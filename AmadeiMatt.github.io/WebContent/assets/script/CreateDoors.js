function creaDoor(){
	
var scene1 = new THREE.Object3D();
	
	
		var elem2 = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
		perno2 = elem2[0];
		porta2 = elem2[1];
		perno2.position.set(15.6, 0, 0);
		var elem3 = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
		perno3 = elem3[0];
		porta3 = elem3[1];
		perno3.position.set(32.8, 0, 0);
		var elem4 = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
		perno4 = elem4[0];
		porta4 = elem4[1];
		perno4.position.set(46.6, 0, 0);
		var elem5 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
		perno5 = elem5[0];
		porta5 = elem5[1];
		perno5.position.set(5.3, 14.3, 0);
		var elem6 = porta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
		perno6 = elem6[0];
		porta6 = elem6[1];
		perno6.position.set(15.6, 14.3, 0);
		var elem7 = porta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
		perno7 = elem7[0];
		porta7 = elem7[1];
		perno7.position.set(15.6, 20.3, 0);
		var elem8 = porta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
		perno8 = elem8[0];
		porta8 = elem8[1];
		perno8.position.set(5.3, 20.3, 0);
		var elem9 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
		perno9 = elem9[0];
		porta9 = elem9[1];
		perno9.position.set(30.7, 14.3, 0);
		var elem10 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
		perno10 = elem10[0];
		porta10 = elem10[1];
		perno10.position.set(46.7, 14.3, 0);
		var elem11 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
		perno11 = elem11[0];
		porta11 = elem11[1];
		perno11.position.set(26.7, 24.5, 0.5);
		perno11.rotation.z = Math.PI / 2;
		var elem12 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
		perno12 = elem12[0];
		porta12 = elem12[1];
		perno12.position.set(26.7, 33, 0.5);
		perno12.rotation.z = Math.PI / 2;
		var elem13 = porta(2, 0.3, 3.8, 5.3, 0.2, 0, "porta.jpg");
		perno13 = elem13[0];
		porta13 = elem13[1];
		perno13.position.set(61, 29.67, 0.5);
		perno13.rotation.z = Math.PI / 2;
		var elem = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
		perno = elem[0];
		porta = elem[1];
		scene1.add(perno13); scene1.add(perno11); scene1.add(perno12); scene1.add(perno10); scene1.add(perno8);
		scene1.add(perno6); scene1.add(perno7); scene1.add(perno5); scene1.add(perno3);
		scene1.add(perno); scene1.add(perno4); scene1.add(perno9); scene1.add(perno2);
		
		return scene1;
}