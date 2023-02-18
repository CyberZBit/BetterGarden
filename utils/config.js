import { pogObject } from "./utils";
import { move } from '../Features/GardenMoveGUI'    
import {
    @ButtonProperty,
@CheckboxProperty,
Color,
    @ColorProperty,
@PercentSliderProperty,
@SliderProperty,
@SelectorProperty,
@NumberProperty,
@SwitchProperty,
@TextProperty,
@Vigilant,
    } from 'Vigilance';

@Vigilant('BetterGarden', '§e§lB§a§lGARDEN', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General', 'GUI', 'Auto OOF', 'Vanilla HUD Hiding']
        return categories.indexOf(a.name) - categories.indexOf(b.name)
    },
})
class Settings {

    @SwitchProperty({
        name: "Vistior notification",
        description: "Enables/Disables the visitor notification popup",
        category: "General",
    })
    notificationV = true;

    @ButtonProperty({
        name: "Move GUI",
        placeholder: "Move",
        category: "General"
    })
    ButtonActionMoveGui() {
        ChatLib.command('gardenmovegui', true)
    }

    @ButtonProperty({
        name: "Clear visitor list",
        placeholder: "Clear",
        category: "General"
    })
    ButtonActionClearList() {
        ChatLib.command('gardenclearlist', true)
    }

    @SwitchProperty({
        name: "Garden Only",
        description: "Enables/Disables if the gui only works at the garden",
        category: "General",
    })
    onlyInGarden = true;

    
    constructor() {
        this.initialize(this);
    }
}

export default new Settings();