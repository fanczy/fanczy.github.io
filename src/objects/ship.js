import mainScene from '../scenes/main-scene.js'
import { setMeshPositionAndMaterial } from '../helpers/creation-helper.js' 

export const createShip = (id, size, positionVector, material) => {
    const ship = BABYLON.MeshBuilder.CreateCylinder(
        id, 
        { height: size, diameterTop: 0, diameterBottom: size * 0.5 }, 
        mainScene
    );

    setMeshPositionAndMaterial(ship, positionVector, material);

    ship.scaling = new BABYLON.Vector3(1, 1, 0.7);

    const wing1 = BABYLON.MeshBuilder.CreateBox(
        id + "-wing1",
        { size },
        mainScene
    )

    setMeshPositionAndMaterial(wing1, positionVector, material);
    
    wing1.parent = ship;
    wing1.position.y -= 20.25 * size;
    wing1.rotation.y += Math.PI / 6;
    wing1.scaling = new BABYLON.Vector3(2, 0.5, 0.05);

    const wing2 = BABYLON.MeshBuilder.CreateBox(
        id + "-wing2",
        { size },
        mainScene
    )

    setMeshPositionAndMaterial(wing2, positionVector, material);

    wing2.parent = ship;
    wing2.position.y -= 20.25 * size;
    wing2.rotation.y -= Math.PI / 6;
    wing2.scaling = new BABYLON.Vector3(2, 0.5, 0.05);

    const fin = BABYLON.MeshBuilder.CreateBox(
        id + "-fin",
        { size },
        mainScene
    )

    setMeshPositionAndMaterial(fin, positionVector, material);

    fin.parent = ship;
    fin.position.y -= 20.25 * size;
    fin.position.z -= size / 3; 
    fin.rotation.y -= Math.PI / 2;
    fin.scaling = new BABYLON.Vector3(0.5, 0.5, 0.05);

    // ship.rotationSpeed = 0.03;
    // ship.motorAcceleration = new BABYLON.Vector3(0,0.1,0);
    // ship.currentAcceleration = new BABYLON.Vector3(0,0,0);

    // setupShipActions(ship);

    ship.actionManager = new BABYLON.ActionManager(mainScene);

    console.log("bla");
    ship.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, (evt) => {								
        console.log("handling inputs");
        //inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));


    return ship;
}

// const setupShipActions = (ship) => {
//     let inputMap = {};

//     ship.actionManager = new BABYLON.ActionManager(mainScene);

//     ship.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
//         console.log("handling inputs");
//         inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
//     }));

//     ship.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
//         inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
//     }));

//     ship.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, function (evt) {								
//         console.log("franme");
//         handleInputs(inputMap, ship);
//         ship.position = ship.position.add(ship.currentAcceleration);
//     }));
// }

// const handleInputs = (inputMap, ship) => {

//     if(inputMap["w"]){
//         ship.rotate(BABYLON.Axis.X, rotationSpeed, BABYLON.Space.LOCAL);
//     } 

//     if(inputMap["s"]){
//         ship.rotate(BABYLON.Axis.X, rotationSpeed * -1, BABYLON.Space.LOCAL);
//     } 

//     if(inputMap["a"]){
//         ship.rotate(BABYLON.Axis.Y, rotationSpeed, BABYLON.Space.LOCAL);
//     } 

//     if(inputMap["d"]){
//         ship.rotate(BABYLON.Axis.Y, rotationSpeed * -1, BABYLON.Space.LOCAL);
//     } 

//     if(inputMap["j"]){
//         ship.rotate(BABYLON.Axis.Z, rotationSpeed, BABYLON.Space.LOCAL);
//     } 

//     if(inputMap["l"]){
//         ship.rotate(BABYLON.Axis.Z, rotationSpeed * -1, BABYLON.Space.LOCAL);
//     }    

//     if(inputMap["i"]){
//         const shipRotation = ship.rotationQuaternion || new BABYLON.Quaternion();
//         const directionalAcceleration = rotateVector(ship.motorAcceleration, shipRotation);
//         ship.currentAcceleration = ship.currentAcceleration.add(directionalAcceleration);
//     }

//     if(inputMap["k"]){
//         ship.currentAcceleration = ship.currentAcceleration.scale(0.9);
//     }
// }


