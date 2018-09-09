import whiteWireFrame from '../materials/white-wireframe.js'

export const setMeshPositionAndMaterial = (mesh, positionVector, material) => {
    mesh.setPositionWithLocalVector(positionVector || BABYLON.Vector3.Zero());
    mesh.material = material || whiteWireFrame;
}
