import mainScene from '../scenes/main-scene.js'
import { ship } from '../setup/main-scene-setup.js'
import { rotateVector } from '../helpers/vector-helper.js'
import { pointerCenterOffsetX, pointerCenterOffsetY} from '../helpers/pointer-listener.js'
import { limitNumber } from '../helpers/number-helper.js'

const rotationSpeed = 0.03;
const motorAcceleration = 0.1;
let currentAcceleration = new BABYLON.Vector3(0,0,0);

export const setupControls = () => {
    let inputMap = {};


    mainScene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    mainScene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    mainScene.onBeforeRenderObservable.add(()=>{
        
        if(inputMap["q"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed, BABYLON.Space.LOCAL);
        } 

        if(inputMap["e"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed * -1, BABYLON.Space.LOCAL);
        } 

        if(inputMap["w"]){
            locallyAccelerate(new BABYLON.Vector3(0, motorAcceleration, 0));
        } 

        if(inputMap["s"]){
            locallyAccelerate(new BABYLON.Vector3(0, motorAcceleration * -1, 0));
        } 

        if(inputMap["a"]){
            locallyAccelerate(new BABYLON.Vector3(motorAcceleration * -1, 0, 0))
        }

        if(inputMap["d"]){
            locallyAccelerate(new BABYLON.Vector3(motorAcceleration, 0, 0))
        }

        if(inputMap["r"]){
            locallyAccelerate(new BABYLON.Vector3(0, 0, motorAcceleration * -1))
        }

        if(inputMap["f"]){
            locallyAccelerate(new BABYLON.Vector3(0, 0, motorAcceleration))
        }

        if(inputMap[" "]){
            currentAcceleration = currentAcceleration.scale(0.9);
        } 
    })

    const locallyAccelerate = (accelrationVector) => {
        const shipRotation = ship.rotationQuaternion || new BABYLON.Quaternion();
        const directionalAcceleration = rotateVector(accelrationVector, shipRotation);
        currentAcceleration = currentAcceleration.add(directionalAcceleration);
    }

    mainScene.registerAfterRender(() => {
        ship.position = ship.position.add(currentAcceleration);

        const pointerDistance = Math.sqrt(Math.pow(pointerCenterOffsetX, 2) + Math.pow(pointerCenterOffsetY, 2));
        
        if(pointerDistance > 32){
            const limitRotation = limitNumber(-350, 350);
            const horizontalRotationSpeed = rotationSpeed * limitRotation(pointerCenterOffsetX) / 350 * -1;
            ship.rotate(BABYLON.Axis.Y, horizontalRotationSpeed, BABYLON.Space.LOCAL);

            const verticalRotationSpeed = rotationSpeed * limitRotation(pointerCenterOffsetY) / 350 * -1;
            ship.rotate(BABYLON.Axis.X, verticalRotationSpeed, BABYLON.Space.LOCAL);
        }

    })



    console.log("controls set up")
}