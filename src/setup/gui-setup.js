import mainScene from '../scenes/main-scene.js'
import { pointerCenterOffsetX, pointerCenterOffsetY } from '../helpers/pointer-listener.js'
import { limitNumber } from '../helpers/number-helper.js'

export const setupGUI = () => {
    const guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    const crosshair = new BABYLON.GUI.Image("crosshair", "src/assets/crosshair2.png");
    crosshair.autoScale = true;
    guiTexture.addControl(crosshair);    

    const canvas = document.getElementById("main-canvas");  
    const canvasRect = canvas.getBoundingClientRect();


    const canvasCenterX = canvasRect.width / 2;
    const canvasCenterY = canvasRect.height / 2;

    const cameraRotationLine = new BABYLON.GUI.Line();
    cameraRotationLine.x1 = canvasCenterX;
    cameraRotationLine.y1 = canvasCenterY;
    cameraRotationLine.x2 = canvasCenterX
    cameraRotationLine.y2 = canvasCenterY;
    cameraRotationLine.lineWidth = 2;
    cameraRotationLine.color = "red";

    guiTexture.addControl(cameraRotationLine);   

    const lineOffsetLimit = limitNumber(-350, 350);

    mainScene.registerAfterRender(() => {
        cameraRotationLine.x2 = canvasCenterX + lineOffsetLimit(pointerCenterOffsetX);
        cameraRotationLine.y2 = canvasCenterY - lineOffsetLimit(pointerCenterOffsetY);
    })
}