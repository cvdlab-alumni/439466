function muri(x,y,z,t_x,t_y,t_z,texture){
	var muro = createMesh(new THREE.BoxGeometry(x, y,z), texture);
	muro.position.set(t_x,t_y,t_z);
	return muro;
}

function createMesh(geom, texture) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + texture)
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;// dentro l'oggetto texture su s e su t(y) specifichiamo che dobbiamo andare a ripetere la nostra textyre

    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;


    // create a multimaterial
    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }
