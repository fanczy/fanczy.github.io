import mainScene from '../scenes/main-scene.js'

export const WHITE_WIREFRAME_MATERIAL_ID = "WhiteWireFrame";

const whiteWireFrameMaterial = new BABYLON.StandardMaterial(WHITE_WIREFRAME_MATERIAL_ID, mainScene);
whiteWireFrameMaterial.wireframe = true;
whiteWireFrameMaterial.emissiveColor = new BABYLON.Color3(1,1,1);

export default whiteWireFrameMaterial;