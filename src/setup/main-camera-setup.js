import { createUniversalCamera } from '../cameras/universal-camera.js'
import { createFollowCamera } from '../cameras/follow-camera.js'
import { createArcCamera } from '../cameras/arc-camera.js'
import { ship } from './main-scene-setup.js'
import mainScene from '../scenes/main-scene.js'
import mainCanvas from '../canvas/main-canvas.js';

export const setupMainCamera = () => {


    const cameraCoT = new BABYLON.TransformNode("cameraCoT");
    cameraCoT.parent = ship;

    cameraCoT.rotate(BABYLON.Axis.X, Math.PI /2 * -1, BABYLON.Space.LOCAL);
    cameraCoT.locallyTranslate(new BABYLON.Vector3(0,15,-50));
    const camera = createUniversalCamera();
    camera.parent = cameraCoT;

    console.log("camera set up")
}