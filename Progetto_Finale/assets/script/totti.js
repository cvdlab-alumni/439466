function totti(){
	var scene = new THREE.Object3D();
	var sphere2 = createMesh(new THREE.PlaneGeometry(15, 15), "cornice.jpg", "cornice-bump.jpg");
	sphere2.scale.set(0.2,0.2,0.2);
	sphere2.rotation.x=Math.PI/2;
	sphere2.rotation.y=Math.PI/2;

	sphere2.position.set(21,6,3);
	scene.add(sphere2);

	return scene;
}



function createMesh(geom, imageFile, bump) {
	var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
	geom.computeVertexNormals();
	var mat = new THREE.MeshPhongMaterial();
	mat.map = texture;

	if (bump) {
		var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
		mat.bumpMap = bump;
		mat.bumpScale = -0.2;
	}

	var mesh = new THREE.Mesh(geom, mat);

	return mesh;
}