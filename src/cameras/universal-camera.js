import mainCanvas from '../canvas/main-canvas.js'
import mainScene from '../scenes/main-scene.js'

export const UNIVERSAL_CAMERA_ID = "universalCamera";

export const createUniversalCamera = () => {
    const mainCamera = new BABYLON.UniversalCamera(
        UNIVERSAL_CAMERA_ID,
        new BABYLON.Vector3(0,100,200),
        mainScene
    )
    
    mainCamera.setTarget(BABYLON.Vector3.Zero());
    mainCamera.attachControl(mainCanvas, true);
}

