/// <reference types="../../CTAutocomplete" />
import Settings from '../utils/config';
import {nameInList, pogObject, replaceSpaces, replaceUnderscores} from "../utils/utils";

let mainGUIx = 160
let mainGUIy = 170
let mainGUIWidth = 250

function renderText(){
  let textY = pogObject.mainGUIy +10
  let textX = pogObject.mainGUIx + 5

  pogObject.visitor.forEach(textelement => {
    textY+= 20
    const visitorName = Object.keys(textelement)[0];
    const visitorWants = textelement[visitorName].wants;
    const price_of_item_from_bz = textelement[visitorName].price
    Renderer.drawString(`${ChatLib.addColor("&e"+replaceUnderscores(visitorName)+"&r")}:${visitorWants} ${ChatLib.addColor("&6"+price_of_item_from_bz)}`, textX, textY);
  });
}

function noVis(){
  if(pogObject.visitor.length == 0){
    Renderer.drawString(ChatLib.addColor("&6No vistiors..."), pogObject.mainGUIx+93, pogObject.mainGUIy+30)
    
  }
}


function mainGUI() {
  const baseHeight = 50; 
  const extraHeightPerVisitor = 15; 
  const visitorCount = pogObject.visitor.length;
  const extraHeight = Math.min(visitorCount, 150) * extraHeightPerVisitor; 
  Renderer.drawRect(Renderer.color(55, 55, 55), pogObject.mainGUIx, pogObject.mainGUIy, mainGUIWidth, baseHeight + extraHeight)
}



register('renderOverlay',()=>{

  if(Settings.onlyInGarden){
    if(pogObject.inGarden){
      mainGUI()
      renderText() 
      noVis()
    }
  }else if(Settings.onlyInGarden == false){
    mainGUI()
    renderText() 
    noVis()
  }
}).setPriority(Priority.HIGHEST)



