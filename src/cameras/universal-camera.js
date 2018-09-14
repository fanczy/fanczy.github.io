import mainCanvas from '../canvas/main-canvas.js'
import mainScene from '../scenes/main-scene.js'

export const UNIVERSAL_CAMERA_ID = "universalCamera";

export const createUniversalCamera = () => {
    const universalCamera = new BABYLON.UniversalCamera(
        UNIVERSAL_CAMERA_ID,
        new BABYLON.Vector3(0,0,0),
        mainScene
    )
    
    return universalCamera;
}

