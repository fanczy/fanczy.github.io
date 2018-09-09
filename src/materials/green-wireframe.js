import mainScene from '../scenes/main-scene.js'

export const BLUE_WIREFRAME_MATERIAL_ID = "BlueWireFrame";

const greenWireFrameMaterial = new BABYLON.StandardMaterial(BLUE_WIREFRAME_MATERIAL_ID, mainScene);
greenWireFrameMaterial.wireframe = true;
greenWireFrameMaterial.emissiveColor = new BABYLON.Color3(0,1,0);

export default greenWireFrameMaterial;