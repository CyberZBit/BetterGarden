/// <reference types="../../CTAutocomplete" />
import { pogObject, getJavaColor } from "../utils";


const gui = new Gui()
let mainGUIx = 60
let mainGUIy = 70
let mainGUIWidth = 170





function renderText(){
  
  let textY = mainGUIy +10
  let textX = mainGUIx + 2
  Renderer.drawString("Visitors", mainGUIx+50, mainGUIy*1.1)
  pogObject.visitor.forEach(textelement => {
    textY+= 20
    
    const visitorName = Object.keys(textelement)[0];
    const visitorWants = textelement[visitorName].wants;
    Renderer.drawString(`${visitorName}: ${visitorWants}`, textX, textY);
  });
}


function mainGUI() {
  const baseHeight = 50; 
  const extraHeightPerVisitor = 10; 
  
  const visitorCount = pogObject.visitor.length;
  const extraHeight = Math.min(visitorCount, 5) * extraHeightPerVisitor; 
  
  Renderer.drawRect(Renderer.color(55, 55, 55), mainGUIx, mainGUIy, mainGUIWidth, baseHeight + extraHeight);
}

register('renderOverlay',()=>{
  mainGUI()
  renderText()  
}).setPriority(Priority.HIGHEST)



