function creaLampadine(){
	
	
	var lampadine = new THREE.Object3D();
	
	
	var spotLight = new THREE.SpotLight(0xffffff,20, 30, 30, 10);
	spotLight.position.set(11, 10, 5);
	var spotTarget = new THREE.Object3D();
	spotTarget.position.set(14, 10, 3);
	spotLight.target = spotTarget;
	lampadine.add(spotLight);
	//lampadine.add(new THREE.PointLightHelper(spotLight, 3));

	//scene.add(new THREE.PointLightHelper(spotLight, 1));

	var spotLight2 = new THREE.SpotLight(0xffffff, 15, 20, 70, 10);
	spotLight2.position.set(19, 34, 4);
	var spotTarget2 = new THREE.Object3D();
	spotTarget2.position.set(22, 34, 2);
	spotLight2.target = spotTarget;
	lampadine.add(spotLight2);
	//lampadine.add(new THREE.PointLightHelper(spotLight2, 3));

	//scene.add(new THREE.PointLightHelper(spotLight2, 1));

	var spotLight3 = new THREE.SpotLight(0xffffff, 16, 40, 70, 10);
	spotLight3.position.set(9, 36, 4);
	var spotTarget3 = new THREE.Object3D();
	spotTarget3.position.set(9, 28, 2);
	spotLight3.target = spotTarget3;
	lampadine.add(spotLight3);
	//lampadine.add(new THREE.PointLightHelper(spotLight3, 3));

	//scene.add(new THREE.PointLightHelper(spotLight3, 1));

	var spotLight4 = new THREE.SpotLight(0xffffff, 6, 20, 20, 10);
	spotLight4.position.set(26.5, 38, 4);
	var spotTarget4 = new THREE.Object3D();
	spotTarget4.position.set(27.5, 38, 2);
	spotLight4.target = spotTarget4;
	lampadine.add(spotLight4);
	//lampadine.add(new THREE.PointLightHelper(spotLight4, 3));

	//scene.add(new THREE.PointLightHelper(spotLight4, 1));

	var spotLight5 = new THREE.SpotLight(0xffffff, 15, 37, 70, 10);
	spotLight5.position.set(56, 30, 4);
	var spotTarget5 = new THREE.Object3D();
	spotTarget5.position.set(58, 30, 2);
	spotLight5.target = spotTarget5;
	lampadine.add(spotLight5);


	var spotLight6 = new THREE.SpotLight(0xffffff, 15, 24, 100, 10);
	spotLight6.position.set(29.5, 21.5, 4);
	var spotTarget6 = new THREE.Object3D();
	spotTarget6.position.set(32.5, 21.5, 3.5);
	spotLight6.target = spotTarget6;
	lampadine.add(spotLight6);

	var spotLight7 = new THREE.SpotLight(0xffffff, 15, 24, 40, 10);
	spotLight7.position.set(36, 29.3, 4);
	var spotTarget7 = new THREE.Object3D();
	spotTarget7.position.set(32, 29.3, 2);
	spotLight7.target = spotTarget7;
	lampadine.add(spotLight7);


	var spotLight8 = new THREE.SpotLight(0xffffff, 5, 30, 70, 10);
	spotLight8.position.set(21, 1.8, 4);
	var spotTarget8 = new THREE.Object3D();
	spotTarget8.position.set(22, 1.8, 1);
	spotLight8.target = spotTarget8;
	lampadine.add(spotLight8);

	var spotLight9 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
	spotLight9.position.set(59, 6.8, 4);
	var spotTarget9 = new THREE.Object3D();
	spotTarget9.position.set(58.6, 6.8, 1);
	spotLight9.target = spotTarget9;
	lampadine.add(spotLight9);

	var spotLight10 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
	spotLight10.position.set(41, 39, 4);
	var spotTarget10 = new THREE.Object3D();
	spotTarget10.position.set(43, 39, 3);
	spotLight10.target = spotTarget10;
	lampadine.add(spotLight10);
	
	
	var spotLight11 = new THREE.SpotLight(0xffffff, 25, 40, 20,10);
	spotLight11.position.set(37, 12.2, 4);
	var spotTarget11 = new THREE.Object3D();
	spotTarget11.position.set(38, 12.2, 1.5);
	spotLight11.target = spotTarget11;
	lampadine.add(spotLight11);



	var spotLight12 = new THREE.SpotLight(0xffffff, 15, 7, 20, 10);
	spotLight12.position.set(0, 17, 4);
	var spotTarget12 = new THREE.Object3D();
	spotTarget12.position.set(2, 17, 0);
	spotLight12.target = spotTarget12;
	lampadine.add(spotLight12);
	
	/*var directionalLight = new THREE.DirectionalLight( 0xffcc33, 10.5 );
	directionalLight.position.set( 0, 20, 10);
	lampadine.add( directionalLight );
	*/
	lampadine.spotLight=spotLight;
	lampadine.spotLight2=spotLight2;
	lampadine.spotLight3=spotLight3;
	lampadine.spotLight4=spotLight4;
	lampadine.spotLight5=spotLight5;
	lampadine.spotLight6=spotLight6;
	lampadine.spotLight7=spotLight7;
	lampadine.spotLight8=spotLight8;
	lampadine.spotLight9=spotLight9;
	lampadine.spotLight10=spotLight10;
	lampadine.spotLight11=spotLight11;
	lampadine.spotLight12=spotLight12;


return lampadine;
}