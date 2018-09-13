 import { createUniversalCamera } from '../cameras/universal-camera.js'
 import { createFollowCamera } from '../cameras/follow-camera.js'
import { createFreeCamera } from '../cameras/free-camera.js'
import { ship } from './main-scene-setup.js'
import mainScene from '../scenes/main-scene.js'

export let freeCamera; 

export const setupMainCamera = () => {
    // createUniversalCamera();

    freeCamera = createFreeCamera();
    freeCamera.parent = ship;
    freeCamera.position.y -= 25;
    freeCamera.position.z -= 5;
    freeCamera.setTarget(ship.position);

    // const freeCamera = createFreeCamera();
    // freeCamera.position = new BABYLON.Vector3(0, 0, -250);

    // freeCamera.fov = 120;

    // mainScene.onBeforeRenderObservable.add(()=>{
    //     freeCamera.setTarget(ship.position);
    // });


    console.log("camera set up")
}