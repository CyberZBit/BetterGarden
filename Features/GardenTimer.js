import { pogObject } from "../utils/utils";
let VisitorString = ""

register('tick',()=>{
    let list = TabList.getNames()
    list.forEach((text, index) => {
        if(text.includes("Next Visitor")){
            VisitorString = text
        }
    });
})

register('step',()=>{
    const regex = /^\s*Next Visitor:\s*(\d+m?\s+)?(\d+s)\s*$/i;
    const str = VisitorString.removeFormatting()
    const match = str.match(regex);
    
    if (match) {
      const minutes = match[1] ? parseInt(match[1].replace('m', '')) : 0;
      const seconds = parseInt(match[2].replace('s', ''));
      if (minutes == 0 && seconds < 2) {
        Client.showTitle('&bNew Visitor',"",30, 10, 30)
        World.playSound('random.burp',100, 0)
      }
    }
    pogObject.string = VisitorString.removeFormatting()
    pogObject.save()
}).setDelay(0.5)

register('renderOverlay',()=>{
    Renderer.drawString(VisitorString, pogObject.mainGUIx + 75, pogObject.mainGUIy+10)
})

/*
    mainGUIx: 160,
    mainGUIy: 170,
*/