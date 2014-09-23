function skyB(){
	var scena = new THREE.Object3D();
	

var directions = ["iceflow_left", "iceflow_right", "iceflow_top", "iceflow_pav", "iceflow_back", "iceflow_front"];
	//var directions = ["xpos", "xneg", "zpos", "zneg", "ypos", "yneg"];
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push(new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture("assets/textures/"+ directions[i] + ".jpg"),
			side: THREE.BackSide,
			format:THREE.RGBFormat
		}));
	var skybox_material = new THREE.MeshFaceMaterial(materialArray);
	var skybox = new THREE.Mesh(new THREE.CubeGeometry(500,200,500), skybox_material);
	skybox.color = new THREE.Color('#FFFFFF');
	skybox.position.set(-70,100,50);
	scena.add(skybox);
	
	var directions1 = ["starfield_left", "starfield_right", "starfield_top", "starfield_pav", "starfield_back", "starfield_front"];
	//var directions = ["xpos", "xneg", "zpos", "zneg", "ypos", "yneg"];
	var materialArray1 = [];
	for (var i = 0; i < 6; i++)
		materialArray1.push(new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture("assets/textures/"+ directions1[i] + ".jpg"),
			side: THREE.BackSide,
			format:THREE.RGBFormat
		}));
	var skybox_material1 = new THREE.MeshFaceMaterial(materialArray1);
	var skybox1 = new THREE.Mesh(new THREE.CubeGeometry(500,200,500), skybox_material1);
	skybox1.color = new THREE.Color('#FFFFFF');
	skybox1.position.set(-70,100,50);
	scena.add(skybox1);
	
	
	scena.skybox1=skybox1
		scena.skybox=skybox;
	
	return scena;
}
