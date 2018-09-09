import { createUniversalCamera } from '../cameras/universal-camera.js'

export const setupMainCamera = () => {
    createUniversalCamera();
    console.log("camera set up")
}