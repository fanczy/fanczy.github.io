import { setupMainScene } from './main-scene-setup.js'
import { setupMainCamera } from './main-camera-setup.js'
import { setupControls } from './controls-setup.js'
import { setupGUI } from './gui-setup.js'

const setupProcedure = () => {
    setupMainScene();
    setupMainCamera();
    setupControls();
    setupGUI();
}

export default setupProcedure;