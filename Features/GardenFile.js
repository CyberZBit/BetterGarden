
import {nameInList, pogObject, replaceSpaces, replaceUnderscores} from '../utils/utils' 



register('step',(event)=>{
    if(Player.getContainer()?.getClassName() == "ContainerChest"){
        if(!Player.getContainer()?.getStackInSlot(29)?.getName()?.includes("Accept Offer")) return
            Player.getContainer()?.getStackInSlot(29)?.getLore()?.forEach((lore, index) => {
                if(lore.match(/x\d+/)){
                    const visitorName = replaceSpaces(Player.getContainer()?.getStackInSlot(13)?.getName().removeFormatting().toLocaleLowerCase())
                    const item_req = lore.removeFormatting()
                    
                    if(!nameInList(visitorName, pogObject.visitor)){
                        pogObject.visitor.push({[visitorName]:{wants: item_req, active: true}})
                        pogObject.save()
                        ChatLib.chat(`${visitorName} was added to the list`)
                    }
                    
                    
                }
            })
    }

    
}).setDelay(1)


register('chat',(msg)=>{
    const trade_complete = msg.match(/OFFER ACCEPTED with (\w+) \((\w+)\)/);
    const imNotDoingThatShit = msg.match(/^\[(\w+)\]\s+([^:]+):\s+(.*)$/);
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
        ChatLib.chat(`Removed ${vistior} from the list`);
    }

    if(imNotDoingThatShit){
        ChatLib.chat(imNotDoingThatShit[2])
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
        ChatLib.chat(`Removed ${vistior} from the list`);
    }
}).setChatCriteria("${msg}");

