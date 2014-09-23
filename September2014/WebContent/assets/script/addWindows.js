function addWind(){
	var scene = new THREE.Object3D();
	var finestra1 = new windows(1.5, 0.4, 2.2, 33.5, 38.8, 3.4, 0x008000);
	scene.add(finestra1);
	var finestra2 = new windows(1.5, 0.4, 2.2, 57.6, 38.8, 3.3, 0xFF0000);
	scene.add(finestra2);
	var finestra3 = new windows(1.5, 1.4, 2.2, 16.4, 38.8, 3.4, 0x00009C);
	scene.add(finestra3);
	var finestra4 = new windows(6.2, 0.4, 2.7, 0, 29.8, 3.5, 0xFF7F24);
	finestra4.rotation.z = Math.PI / 2;
	scene.add(finestra4);
	return scene;

}