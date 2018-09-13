import mainScene from '../scenes/main-scene.js'

export const RED_WIREFRAME_MATERIAL_ID = "RedWireFrame";

const redWireFrameMaterial = new BABYLON.StandardMaterial(RED_WIREFRAME_MATERIAL_ID, mainScene);
redWireFrameMaterial.wireframe = true;
redWireFrameMaterial.emissiveColor = new BABYLON.Color3(1,0,0);

export default redWireFrameMaterial;