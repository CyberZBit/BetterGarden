/// <reference types="../../CTAutocomplete" />
import * as Elementa from "Elementa";
import { pogObject, getJavaColor } from "../utils";
const Color = Java.type("java.awt.Color");

let mainString = ""


win = new Elementa.Window();



const Visitors = new Elementa.UIText("Vistiors")
.setX((50).pixels())
.setY((10).pixels());   

const textMain = new Elementa.UIText("Vistiors")
.setX((10).pixels())
.setY((20).pixels());   

const myElement = new Elementa.UIRoundedRectangle(3)
.setX((pogObject.guiCordX).pixels())
.setY((pogObject.guiCordY).pixels())
.setWidth((140).pixels()) //x
.setHeight((40).pixels()) //y
.setColor(new Elementa.ConstantColorConstraint(getJavaColor(new Color(0, 0, 0, 0.7))))
.addChild(textMain)
.addChild(Visitors)
win.addChild(myElement);

function text(str){
    textMain.setText(str)

}


register('step',()=>{
    pogObject.visitor.forEach(visitorObj => {
        const visitorName = Object.keys(visitorObj)[0];
        const visitorWants = visitorObj[visitorName].wants;
        if(!mainString.includes(`${visitorName} wants ${visitorWants}`)){
            mainString+= `${visitorName} wants ${visitorWants} \n`
        }
        text(mainString)
      });
}).setDelay(1)



register('renderOverlay',()=>{
    win.draw();

})

