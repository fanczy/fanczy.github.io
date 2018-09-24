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

    return ship;
}


