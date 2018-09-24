import { createUniversalCamera } from '../cameras/universal-camera.js'
import { createFollowCamera } from '../cameras/follow-camera.js'
import { createArcCamera } from '../cameras/arc-camera.js'
import { ship } from './main-scene-setup.js'
import mainScene from '../scenes/main-scene.js'
import mainCanvas from '../canvas/main-canvas.js';
import { pointerCenterOffsetX, pointerCenterOffsetY} from '../helpers/pointer-listener.js'
import { limitNumber } from '../helpers/number-helper.js'

export const setupMainCamera = () => {


    const cameraCoT = new BABYLON.TransformNode("cameraCoT");
    cameraCoT.parent = ship;

    cameraCoT.rotate(BABYLON.Axis.X, Math.PI /2 * -1, BABYLON.Space.LOCAL);
    cameraCoT.locallyTranslate(new BABYLON.Vector3(0,15,-50));
    const camera = createUniversalCamera();
    camera.parent = cameraCoT;

    const originalCoTquaternion = cameraCoT.rotationQuaternion.clone();

    const maxRollTiltAngle = Math.PI / 8;
    const maxPitchTiltAngle = Math.PI / 16;

    mainScene.registerAfterRender(() => {
        let mouseTiltedQuaternion = originalCoTquaternion;

        const limitTilt = limitNumber(-350, 350);
        const rollTiltAngle = maxRollTiltAngle * limitTilt(pointerCenterOffsetX) / 350;      
        const pitchTiltAngle = maxPitchTiltAngle * limitTilt(pointerCenterOffsetY) / 350;

        mouseTiltedQuaternion = mouseTiltedQuaternion.multiply(
            new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, rollTiltAngle)
        );
        mouseTiltedQuaternion = mouseTiltedQuaternion.multiply(
            new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, pitchTiltAngle)
        );


        
        document.getElementById("camera").innerText = `; camera quaternion: ${mouseTiltedQuaternion}`;
        

        cameraCoT.rotationQuaternion = mouseTiltedQuaternion;
    })

    console.log("camera set up")
}