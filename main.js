import mainEngine from './src/engine/main-engine.js'
import mainScene from './src/scenes/main-scene.js'


import setupProcedure from './src/setup/setup-procedure.js'

setupProcedure();

mainEngine.runRenderLoop(() => {
    mainScene.render();
});

document.getElementById("main-canvas").focus();