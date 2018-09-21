import mainScene from '../scenes/main-scene.js'
import { ship } from '../setup/main-scene-setup.js'
import { rotateVector } from '../helpers/vector-helper.js'

const rotationSpeed = 0.03;
const movementSpeed = 1;
const motorAcceleration = new BABYLON.Vector3(0,0.1,0);

export const setupControls = () => {
    let inputMap = {};


    mainScene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    mainScene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    let currentAcceleration = new BABYLON.Vector3(0,0,0);

    mainScene.on

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

        if(inputMap["j"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed, BABYLON.Space.LOCAL);
        } 

        if(inputMap["l"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed * -1, BABYLON.Space.LOCAL);
        }    

        if(inputMap["i"]){
            const shipRotation = ship.rotationQuaternion || new BABYLON.Quaternion();
            const directionalAcceleration = rotateVector(motorAcceleration, shipRotation);
            currentAcceleration = currentAcceleration.add(directionalAcceleration);


            //ship.locallyTranslate(new BABYLON.Vector3(0, movementSpeed, 0));

        }

        if(inputMap["k"]){
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

    mainScene.registerAfterRender(() => {
        ship.position = ship.position.add(currentAcceleration);
        //ship.locallyTranslate(new BABYLON.Vector3(0, movementSpeed, 0));
        //ship.translate(currentAcceleration);
    })

    console.log("controls set up")
}