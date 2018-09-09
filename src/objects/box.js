import mainScene from '../scenes/main-scene.js'
import { setMeshPositionAndMaterial } from '../helpers/creation-helper.js' 

export const createBox = (id, size, positionVector, material) => {
    const box = BABYLON.MeshBuilder.CreateBox(id, {size: size || 100} , mainScene);
    setMeshPositionAndMaterial(box, positionVector, material);
    return box;
}