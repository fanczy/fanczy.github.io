import { createSphere } from '../objects/sphere.js' 
import { createBox } from '../objects/box.js'
import greenWireFrame from '../materials/green-wireframe.js'

export const setupMainScene = () => {
    createSphere("bigassSphere", 500);
    createBox("blueBox", 50, new BABYLON.Vector3(0,0,0) , greenWireFrame);
    
    console.log("main scene set up")
}