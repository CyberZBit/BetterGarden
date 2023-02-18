import { pogObject } from "../utils/utils";
export let move = new Gui();
register("dragged", (dx, dy, x, y) => {
	if (move.isOpen()) {
		pogObject.mainGUIx = x
		pogObject.mainGUIy = y
        pogObject.save()
	}
});



register("RenderOverlay", () => {
    if (move.isOpen()) {
        x = pogObject.mainGUIx
        y = pogObject.mainGUIy
        Renderer.scale(2,2)
        Renderer.drawString('Drag the GUI to move it', 100, 50)
        Renderer.drawStringWithShadow(`x: ${Math.round(x)}, y: ${Math.round(y)}`, pogObject.mainGUIx - 65, pogObject.mainGUIy - 12)
        pogObject.save()
    }
})

register('command',()=>{
    move.open()
}).setName('gardenmovegui')


//pogObject.mainGUIx + 75, pogObject.mainGUIy+10