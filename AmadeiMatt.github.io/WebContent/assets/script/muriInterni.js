function muri(x,y,z,t_x,t_y,t_z,texture,rep_x,rep_y){
	var muro = createBumpMesh(new THREE.BoxGeometry(x, y,z), texture,rep_x,rep_y);
	muro.position.set(t_x,t_y,t_z);
	return muro;
}

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    geom.computeVertexNormals();
    var mat = new THREE.MeshBasicMaterial();
    mat.map = texture;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
    texture.repeat.set( 100, 100 );
    texture.needsUpdate = true;

    var myMaterial = new THREE.MeshBasicMaterial({map:texture});
    
  var myMesh = new THREE.Mesh(geom, myMaterial);
  return myMesh;
}   
 
