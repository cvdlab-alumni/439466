//add spotlights
function creaLuci(){
	var scene= new THREE.Object3D();
	var pointColor = "#ffffee";
	
	
	



	var spotLight1 = new THREE.SpotLight(pointColor);
	spotLight1.position.set(12, 12,2, 3);
	spotLight1.intensity = 3;
	scene.add(spotLight1);
	scene.spotLight1=spotLight1;
	var spotLight2 = new THREE.SpotLight(0xffffff);
	spotLight2.position.set(30, -40, -50);
	spotLight2.intensity = 1;
	scene.add(spotLight2);
	scene.spotLight2=spotLight2;

	var spotLight3 = new THREE.SpotLight(0xffffff);
	spotLight3.position.set(30, 55, 30);
	spotLight3.intensity = 1;
	scene.add(spotLight3);
	scene.spotLight3=spotLight3;
	scene.add(new THREE.PointLightHelper(spotLight3, 3));


	var spotLight4 = new THREE.SpotLight(0xffffff);
	spotLight4.position.set(110, 60, 40);
	spotLight4.intensity = 1.5;
	scene.add(spotLight4);
	scene.spotLight4=spotLight4;


	var spotLight5= new THREE.SpotLight(0xffffff);
	spotLight5.position.set(3, 17, 20);
	spotLight5.intensity = 1;
	scene.add(spotLight5);
	scene.spotLight5=spotLight5;
	
	
	
	
	return scene;

}