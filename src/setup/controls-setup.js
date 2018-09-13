import mainScene from '../scenes/main-scene.js'
import { ship } from '../setup/main-scene-setup.js'

const rotationSpeed = 0.03;
const movementSpeed = 1;

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

        if(inputMap["j"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed, BABYLON.Space.LOCAL);
        } 

        if(inputMap["l"]){
            ship.rotate(BABYLON.Axis.Z, rotationSpeed * -1, BABYLON.Space.LOCAL);
        }    

        if(inputMap["i"]){
            ship.locallyTranslate(new BABYLON.Vector3(0, movementSpeed, 0));

            // let direction = new BABYLON.Vector3(ship.position)

            // let matrix = BABYLON.Matrix.RotationAxis(BABYLON.Axis.Y, diffAngle - (Math.PI * -1));
        } 

        if(inputMap["k"]){
            ship.locallyTranslate(new BABYLON.Vector3(0, movementSpeed * -1, 0));
        } 

    })

    console.log("controls set up")
}