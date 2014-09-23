function creaLampadina(){
	var scene = new THREE.Object3D();
	
	var spotLight = new THREE.SpotLight(0xffffff, 6, 8, 4, 10);
	spotLight.position.set( 18, 14, 2);
	 
	var spotTarget = new THREE.Object3D();
	spotTarget.position.set(18, 9, 1);
	spotLight.target = spotTarget;
	scene.add(spotLight);
	scene.spotLight=spotLight;
	scene.add(new THREE.PointLightHelper(spotLight, 1));
	
	
	var spotLight2 = new THREE.SpotLight(0xffffff, 6, 20, 20, 10);
	spotLight2.position.set( 14, 36, 5);
	 
	var spotTarget2 = new THREE.Object3D();
	spotTarget2.position.set(14, 45, 5);
	spotLight2.target = spotTarget;
	 
	scene.add(spotLight2);
	scene.spotLight2=spotLight2;

	scene.add(new THREE.PointLightHelper(spotLight2, 1));
	
	var spotLight3 = new THREE.SpotLight(0xffffff, 6, 20, 10, 10);
	spotLight3.position.set(2, 36, 2);
	 
	var spotTarget3 = new THREE.Object3D();
	spotTarget3.position.set(2, 28, 2);
	spotLight3.target = spotTarget3;
	scene.add(spotLight3);
	scene.spotLight3=spotLight3;

	scene.add(new THREE.PointLightHelper(spotLight3, 1));

	var spotLight4 = new THREE.SpotLight(0xffffff, 15, 7, 2, 10);
	spotLight4.position.set(30, 38, 3);
	 
	var spotTarget4 = new THREE.Object3D();
	spotTarget4.position.set(30, 37, 3);
	spotLight4.target = spotTarget4;
	scene.add(spotLight4);
	scene.spotLight4=spotLight4;

	scene.add(new THREE.PointLightHelper(spotLight4, 1));
	
	
	var spotLight5 = new THREE.SpotLight(0xffffff, 15, 7, 2, 10);
	spotLight5.position.set(1,11,2.5);
	 
	var spotTarget5 = new THREE.Object3D();
	spotTarget5.position.set(3,9,1);
	spotLight5.target = spotTarget5;
	scene.add(spotLight5);
	scene.spotLight5=spotLight5;

	scene.add(new THREE.PointLightHelper(spotLight5, 1));

	
	var spotLight6 = new THREE.SpotLight(0xffffff, 8, 6, 2, 10);
	spotLight6.position.set(27.5,21.5,4);
	 
	var spotTarget6 = new THREE.Object3D();
	spotTarget6.position.set(32.6,26.2,0.5);
	spotLight6.target = spotTarget6;
	scene.add(spotLight6);
	scene.spotLight6=spotLight6;

	scene.add(new THREE.PointLightHelper(spotLight6, 1));
	
	

	var spotLight7 = new THREE.SpotLight(0xffffff, 30, 20, 30, 20);
	spotLight7.position.set(60,27.5,4);
	
	 
	var spotTarget7 = new THREE.Object3D();
	spotTarget7.position.set(55,27.5,4);
	spotLight7.target = spotTarget7;

	scene.add(spotLight7);
	scene.spotLight7=spotLight7;

	
	var spotLight8 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
	spotLight8.position.set(23,1.8,4);
	
	 
	var spotTarget8 = new THREE.Object3D();
	spotTarget8.position.set(24,1.8,3);
	spotLight8.target = spotTarget8;
	scene.add(spotLight8);
	scene.spotLight8=spotLight8;

	
	var spotLight9 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
	spotLight9.position.set(59,1.8,4);
	
	 
	var spotTarget9 = new THREE.Object3D();
	spotTarget9.position.set(58.6,1.8,3);
	spotLight9.target = spotTarget9;
	scene.add(spotLight9);
	scene.spotLight9=spotLight9;

	
	var spotLight11 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
	spotLight11.position.set(37,12.2,4);
	
	 
	var spotTarget11 = new THREE.Object3D();
	spotTarget11.position.set(37,11.7,3.5);
	spotLight11.target = spotTarget11;
	scene.add(spotLight11);
	scene.spotLight11=spotLight11;

	
	var spotLight10 = new THREE.SpotLight(0xffffff, 30, 20, 30, 20);
	spotLight10.position.set(60,34.5,4);
	
	 
	var spotTarget10 = new THREE.Object3D();
	spotTarget10.position.set(55,34.5,4);
	spotLight10.target = spotTarget10;
	scene.add(spotLight10);
	scene.spotLight10=spotLight10;

	
	var spotLight12 = new THREE.SpotLight(0xffffff, 15, 10, 30, 10);
	spotLight12.position.set(0,17,4);
	 
	var spotTarget12 = new THREE.Object3D();
	spotTarget12.position.set(2,17,0);
	spotLight12.target = spotTarget12;
	scene.add(spotLight12);
	scene.spotLight12=spotLight12;
	return scene;

	
	
	
	
}