
/// <reference types="../../CTAutocomplete" />
import { pogObject } from "../utils/utils";
import Settings from '../utils/config';

register('step',()=>{
    
try {
    TabList.getNames()?.forEach((text) => {
        if(text.includes("Next Visitor")){
            pogObject.inGarden = true
            pogObject.save()
        }
    });
} catch (err) {
    console.log(err)
}
}).setDelay(0.5)


register('gameLoad',()=>{
    pogObject.inGarden = false
    pogObject.save()
})

register('worldLoad',()=>{
    pogObject.inGarden = false
    pogObject.save()
})


