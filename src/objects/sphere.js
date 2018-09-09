import mainScene from '../scenes/main-scene.js'
import { setMeshPositionAndMaterial } from '../helpers/creation-helper.js' 

export const createSphere = (id, diameter,  positionVector, material) => {
    const sphere = BABYLON.MeshBuilder.CreateSphere(id, {diameter: diameter || 100}, mainScene);
    setMeshPositionAndMaterial(sphere, positionVector, material);
    return sphere;
}