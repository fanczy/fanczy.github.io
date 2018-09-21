export const rotateVector = (vector, quaternion) => {
    const matrix = new BABYLON.Matrix(); 
    quaternion.toRotationMatrix(matrix);
    return BABYLON.Vector3.TransformCoordinates(vector, matrix);
}