import mainScene from '../scenes/main-scene.js'
import mainCanvas from '../canvas/main-canvas.js'

export const createFollowCamera = () => {
    const followCamera = new BABYLON.FollowCamera(
        "followCamera",
        new BABYLON.Vector3(-1000,1000, 0),
        mainScene
    )
    
    followCamera.radius = 100;
    followCamera.heightOffset = 0;
    followCamera.rotationOffset = 0;
    followCamera.cameraAcceleration = 0.05;
    followCamera.attachControl(mainCanvas, true);
}