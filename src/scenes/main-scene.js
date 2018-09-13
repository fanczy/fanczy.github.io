import mainEngine from '../engine/main-engine.js'

const mainScene = new BABYLON.Scene(mainEngine);
mainScene.clearColor = new BABYLON.Color3.Black();
mainScene.actionManager = new BABYLON.ActionManager(mainScene);
console.log("main scene created");

export default mainScene;