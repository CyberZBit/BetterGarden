
import {nameInList, pogObject, replaceSpaces, replaceUnderscores, prefix, formatNumber} from '../utils/utils' 
import { getPrice } from './GardenPrice'


register('step', (event) => {
  if (Player.getContainer()?.getClassName() == "ContainerChest") {
      if (!Player.getContainer()?.getStackInSlot(29)?.getName()?.includes("Accept Offer")) return
      Player.getContainer()?.getStackInSlot(29)?.getLore()?.forEach((lore, index) => {
          if (lore.match(/x\d+/)) {
              const visitorName = replaceSpaces(Player.getContainer()?.getStackInSlot(13)?.getName().removeFormatting().toLocaleLowerCase())
              const item_req = lore.removeFormatting();
              if (!nameInList(visitorName, pogObject.visitor)) {
                const regex = /\bEnchanted\s\w+\s*\w*\s*x(\d+)\b/;
                const match = item_req.trim().match(regex);
            

                if (match) {
                    const enchantedItem = item_req.replace(/ x\d+$/, '').trim();
                    const count = Number(match[1]);
                    ChatLib.chat(`${enchantedItem}:${count}`);
                    getPrice(enchantedItem).then(item => {
                      pogObject.visitor.push({
                        [visitorName]: {
                          wants: item_req,
                          price: formatNumber(Math.round(item.price * count))
                        }
                      });
                      pogObject.save();
                    }).catch(error => console.error(error));
                  
                }
              }
          }
      })
  } //troll have fun 


}).setDelay(1)


register('chat',(msg)=>{
    let newmsg = msg.removeFormatting()
    const trade_complete = msg.match(/OFFER ACCEPTED with (\w+) \((\w+)\)/);
    const imNotDoingThatShit = newmsg.match(/^\[(\w+)\]\s+([^:]+):\s+(.*)$/);
    if (trade_complete) {
        replaceSpaces(trade_complete[1])
        const vistior = replaceSpaces(trade_complete[1].toLocaleLowerCase().removeFormatting());
        const visitorArray = pogObject.visitor;
        for (let i = 0; i < visitorArray.length; i++) {
          if (visitorArray[i].hasOwnProperty(vistior)) {
            visitorArray.splice(i, 1);
            break;
          }
        }
        
        pogObject.save()
    }

    if(imNotDoingThatShit){
        replaceSpaces(imNotDoingThatShit[2])
        const vistior = (imNotDoingThatShit[2]).toLocaleLowerCase().removeFormatting();
        vistior.removeFormatting()
        const visitorArray = pogObject.visitor;
        for (let i = 0; i < visitorArray.length; i++) {
          if (visitorArray[i].hasOwnProperty(vistior)) {
            visitorArray.splice(i, 1);
            break;
          }
        }
        pogObject.save()
    }
}).setChatCriteria("${msg}");

register('command',()=>{
  pogObject.visitor = []
  ChatLib.chat(`${prefix} List Cleard!`)
  pogObject.save()
}).setName('gardenclearlist')