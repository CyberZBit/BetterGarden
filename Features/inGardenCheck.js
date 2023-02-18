import { pogObject } from "../utils/utils";


register('step',()=>{
    let list = TabList.getNames()
      list.forEach((text) => {
        if(text.includes("Next Visitor")){
            ChatLib.chat('set to true')
            pogObject.inGarden = true
            pogObject.save()
        }
    });
}).setDelay(0.5)


register('gameLoad',()=>{
    pogObject.inGarden = false
    pogObject.save()
})

register('worldLoad',()=>{
    pogObject.inGarden = false
    pogObject.save()
})


