import mainCanvas from '../canvas/main-canvas.js'
import mainScene from '../scenes/main-scene.js'

export const ARC_CAMERA_ID = "arcCamera";

export const createArcCamera = () => {
    const arcCamera = new BABYLON.ArcRotateCamera(
        ARC_CAMERA_ID,
        0,
        0,
        1, 
        new BABYLON.Vector3(0,0,0),
        mainScene
    )
    
    return arcCamera;
}

