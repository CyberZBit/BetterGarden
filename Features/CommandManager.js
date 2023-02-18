import Settings from '../utils/config';


register('command',(...args)=>{
    Settings.openGUI()
}).setName('garden')

register('command',()=>{
    const colorString = Settings.myColor.toString(); // Convert the color object to a string
    const rgbValues = colorString.match(/\d+/g); // Extract all numeric values from the string

    const red = parseInt(rgbValues[0]); // Extract the red value from the array and parse it
    const green = parseInt(rgbValues[1]); // Extract the green value from the array and parse it
    const blue = parseInt(rgbValues[2]); // Extract the blue value from the array and parse it

    ChatLib.chat(`${red},${green},${blue} `)
}).setName('getcolor')