import mainScene from '../scenes/main-scene.js'

export const GREEN_WIREFRAME_MATERIAL_ID = "GreenWireFrame";

const greenWireFrameMaterial = new BABYLON.StandardMaterial(GREEN_WIREFRAME_MATERIAL_ID, mainScene);
greenWireFrameMaterial.wireframe = true;
greenWireFrameMaterial.emissiveColor = new BABYLON.Color3(0,1,0);

export default greenWireFrameMaterial;