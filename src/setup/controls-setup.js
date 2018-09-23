import mainScene from '../scenes/main-scene.js'
import { ship } from '../setup/main-scene-setup.js'
import { rotateVector } from '../helpers/vector-helper.js'

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

        if(inputMap["w"]){
            ship.rotate(BABYLON.Axis.X, rotationSpeed, BABYLON.Space.LOCAL);
        } 

        if(inputMap["s"]){
            ship.rotate(BABYLON.Axis.X, rotationSpeed * -1, BABYLON.Space.LOCAL);
        } 

        if(inputMap["a"]){
            ship.rotate(BABYLON.Axis.Y, rotationSpeed, BABYLON.Space.LOCAL);
        } 

        if(inputMap["d"]){
            ship.rotate(BABYLON.Axis.Y, rotationSpeed * -1, BABYLON.Space.LOCAL);
        } 

        if(inputMap["q"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed, BABYLON.Space.LOCAL);
        } 

        if(inputMap["e"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed * -1, BABYLON.Space.LOCAL);
        }    

        if(inputMap["i"]){
            locallyAccelerate(new BABYLON.Vector3(0, motorAcceleration, 0))
        }

        if(inputMap["k"]){
            locallyAccelerate(new BABYLON.Vector3(0, motorAcceleration * -1, 0))
        }

        if(inputMap["j"]){
            locallyAccelerate(new BABYLON.Vector3(motorAcceleration * -1, 0, 0))
        }

        if(inputMap["l"]){
            locallyAccelerate(new BABYLON.Vector3(motorAcceleration, 0, 0))
        }

        if(inputMap["u"]){
            locallyAccelerate(new BABYLON.Vector3(0, 0, motorAcceleration))
        }

        if(inputMap["o"]){
            locallyAccelerate(new BABYLON.Vector3(0, 0, motorAcceleration * -1))
        }



        if(inputMap[" "]){
            currentAcceleration = currentAcceleration.scale(0.9);
        }

        //ship.translate(currentAcceleration);

        // currentShipPosition = currentShipPosition.add(currentAcceleration);
        // ship.position = currentShipPosition;

        // if(inputMap["k"]){
        //     ship.computeWorldMatrix(true);
        //     ship.locallyTranslate(new BABYLON.Vector3(0, movementSpeed * -1, 0));
        // } 

    })

    const locallyAccelerate = (accelrationVector) => {
        const shipRotation = ship.rotationQuaternion || new BABYLON.Quaternion();
        const directionalAcceleration = rotateVector(accelrationVector, shipRotation);
        currentAcceleration = currentAcceleration.add(directionalAcceleration);
    }

    mainScene.registerAfterRender(() => {
        ship.position = ship.position.add(currentAcceleration);
        //ship.locallyTranslate(new BABYLON.Vector3(0, movementSpeed, 0));
        //ship.translate(currentAcceleration);
    })

    console.log("controls set up")
}