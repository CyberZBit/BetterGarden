import Settings from '../utils/config';

register('command',(...args)=>{
    Settings.openGUI()
}).setName('garden')