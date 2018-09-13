import mainScene from '../scenes/main-scene.js'
import mainCanvas from '../canvas/main-canvas.js'

export const createFreeCamera = () => {
    const freeCamera = new BABYLON.FollowCamera(
        "freeCamera",
        new BABYLON.Vector3(0, 0, 0),
        mainScene
    )
    
    freeCamera.attachControl(mainCanvas, true);

    return freeCamera;
}