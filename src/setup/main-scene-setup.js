import { createSphere } from '../objects/sphere.js' 
import { createBox } from '../objects/box.js'
import greenWireFrame from '../materials/green-wireframe.js'
import { createShip } from '../objects/ship.js';
import redWireFrame from '../materials/red-wireframe.js';
import mainScene from '../scenes/main-scene.js'

export let ship;

export const setupMainScene = () => {
    createSphere("bigassSphere", 1000);
    createBox("blueBox", 100, new BABYLON.Vector3(0,0,0) , greenWireFrame);
    ship = createShip("ship", 5, new BABYLON.Vector3(0, 100, 0), redWireFrame);

    
    console.log("main scene set up")
}