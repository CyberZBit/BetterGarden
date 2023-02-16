import PogObject from "PogData";
const Color = Java.type("java.awt.Color");

export function nameInList(name, visitorList) {
    return visitorList.some(item => {
      const itemKey = Object.keys(item)[0];
      return itemKey === name;
    });
}

export const pogObject = new PogObject("BetterGarden", {
    visitor:[],
    guiCordX: 486,
    guiCordY: 291,
    string:""
}, "Garden.json");


export function removeVisitor(name, list) {
  const visitorArray = list.visitor;
  
  for (let i = 0; i < visitorArray.length; i++) {
    if (visitorArray[i].hasOwnProperty(name)) {
      visitorArray.splice(i, 1);
      break;
    }
  }
}



  export function replaceSpaces(str) {
    if (str?.indexOf(' ') !== -1) {
      return str.replace(/ /g, '_');
    } else {
      return str;
    }
  }

  export function replaceUnderscores(str) {
    if (str?.indexOf('_') !== -1) {
      return str.replace(/_/g, ' ');
    } else {
      return str;
    }
  }

export function getJavaColor(color){
    return new Color(color.getRed()/255, color.getGreen()/255, color.getBlue()/255, (color.getAlpha()/255) ? color.getAlpha()/255 : 0);
}