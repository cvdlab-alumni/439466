


function creaElementi(){


	var elementi = new THREE.Object3D();
	var caricaB = caricaBagno();
	elementi.add(caricaB);
	var Matt = arredaMatt();
	elementi.add(Matt);
	var pareti = creaMuri();
	elementi.add(pareti);
	var cuc = arredaCuci();
	elementi.add(cuc);
	var camera2 = arredaCamera2();
	elementi.add(camera2);
	var camera3 = arredaCamera3();
	elementi.add(camera3);
	var bagno1 = creaBagno1();
	elementi.add(bagno1);
	var salone = caricaSalone();
	elementi.add(salone);
	var ing = ingresso();
	elementi.add(ing);
	var luci = creaLuci();
	elementi.add(luci);
	var fin = addWind();
	elementi.add(fin);
	var terr = creaTerrazzo(60,7,0.3,"snow_terrazzo.jpg",10,1);
	terr.position.set(30.5,-3.5,0);
	elementi.add(terr);

	var ringh =ringhiera();
	ringh.position.set(0.8,-4.5,0.3);
	ringh.rotation.x=Math.PI/2;
	elementi.add(ringh);
	var ringh2 =ringhiera();
	ringh2.position.set(20.8,-4.5,0.3);
	ringh2.rotation.x=Math.PI/2;
	elementi.add(ringh2);
	var ringh3 =ringhiera();
	ringh3.position.set(40.8,-4.5,0.3);
	ringh3.rotation.x=Math.PI/2;
	elementi.add(ringh3);

//var neve = particel();
//elementi.add(neve);
var pick1;
	var loader8 = new THREE.OBJMTLLoader();
      loader8.addEventListener('load', function (event) {

        var object1 = event.content;

  	      object1.rotation.x =Math.PI/2;
  	      // object.rotation.y =-Math.PI;

  	        //object1.position.set(-20,18,2);
  	object1.scale.set(0.05,0.05,0.05);
       // mesh = object;
        //mesh.add(object1);
	     // mesh.object1=object1;
	      
	       pick1 = picking(10,10,10,-20,18,2);
	      pick1.add(object1);
	      elementi.add(pick1);
	      
	      elementi.pick1=pick1;


      });

      loader8.load(
        'assets/models/bonecoDeNeve.obj', 
        'assets/models/bonecoDeNeve.mtl', 
        {side: THREE.DoubleSide}
        
        
      );

      
      var pick2;
      
      var loader6 = new THREE.OBJMTLLoader();
      loader6.addEventListener('load', function (event) {

        var object3 = event.content;

        object3.rotation.x =Math.PI/2;
        object3.rotation.y =Math.PI/2;

       // object3.position.set(2.5,8.2,1.4);
object3.scale.set(0.02,0.02,0.02);
       // mesh = object;


pick2 = picking(3,3,3,2.5,8.2,1.4);
pick2.add(object3);
elementi.add(pick2);

elementi.pick2=pick2;

      });


      loader6.load(
        'assets/models/lyingDownMale01.obj', 
        'assets/models/lyingDownMale01.mtl', 
        {side: THREE.DoubleSide}
      );
	var latoC= latoCorto();
	latoC.rotation.x=Math.PI/2;
	latoC.rotation.y=Math.PI/2;
	latoC.position.set(-2,-5.4,0.3);
	elementi.add(latoC);
	var latoC1= latoCorto();
	latoC1.rotation.x=Math.PI/2;
	latoC1.rotation.y=Math.PI/2;
	latoC1.position.set(58,-5.4,0.3);
	elementi.add(latoC1);


	var pallaGeometry = new THREE.SphereGeometry(0.5, 20, 20);
	var sphereMaterial = new THREE.MeshPhongMaterial({
		color : 0xFFFF00
	});
	var palla = new THREE.Mesh(pallaGeometry, sphereMaterial);
	palla.position.set(-15,2,52);
	elementi.add(palla);
	createAnimations(palla);
//	animateNeve(neve);
	
	
	
	
	
	var loader8 = new THREE.OBJMTLLoader();
	loader8.addEventListener('load', function (event) {

	  var object1 = event.content;

	      object1.rotation.x =Math.PI/2;
	      // object.rotation.y =-Math.PI;

	        object1.position.set(-20,18,2);
	object1.scale.set(0.005,0.005,0.005);
	 // mesh = object;
	  elementi.add(object1);

	});
	loader8.load(
	  'assets/models/bonecoDeNeve.obj', 
	  'assets/models/bonecoDeNeve.mtl', 
	  {side: THREE.DoubleSide}
	// elementi.object1=object1


	);

	var elem2 = CreaportaFinestra(2, 0.3, 4, 5.3, 0.2, 0);
	perno2 = elem2[0];
	porta2 = elem2[1];
	perno2.position.set(15.6, 0, 0);
	var elem3 = CreaportaFinestra(2, 0.3, 4, 5.3, 0.2, 0);
	perno3 = elem3[0];
	porta3 = elem3[1];
	perno3.position.set(32.8, 0, 0);
	var elem4 = CreaportaFinestra(2, 0.3, 4, 5.3, 0.2, 0);
	perno4 = elem4[0];
	porta4 = elem4[1];
	perno4.position.set(46.6, 0, 0);
	var elem5 = Creaporta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
	perno5 = elem5[0];
	porta5 = elem5[1];
	perno5.position.set(5.3, 14.3, 0);
	var elem6 = Creaporta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
	perno6 = elem6[0];
	porta6 = elem6[1];
	perno6.position.set(15.6, 14.3, 0);
	var elem7 = Creaporta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
	perno7 = elem7[0];
	porta7 = elem7[1];
	perno7.position.set(15.6, 20.3, 0);
	var elem8 = Creaporta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
	perno8 = elem8[0];
	porta8 = elem8[1];
	perno8.position.set(5.3, 20.3, 0);
	var elem9 = Creaporta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
	perno9 = elem9[0];
	porta9 = elem9[1];
	perno9.position.set(30.7, 14.3, 0);
	var elem10 = Creaporta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
	perno10 = elem10[0];
	porta10 = elem10[1];
	perno10.position.set(46.7, 14.3, 0);
	var elem11 = Creaporta(2.4, 0.09, 3.9, 5.3, 0.2, 0, "plaster-diffuse.jpg");
	perno11 = elem11[0];
	porta11 = elem11[1];
	perno11.position.set(26.45, 24.5, 0.5);
	perno11.rotation.z = Math.PI / 2;
	var elem12 = Creaporta(2, 0.3, 3.9, 5.3, 0.2, 0, "plaster-diffuse.jpg");
	perno12 = elem12[0];
	porta12 = elem12[1];
	perno12.position.set(26.7, 33, 0.5);
	perno12.rotation.z = Math.PI / 2;
	var elem13 = Creaporta(2, 0.3, 3.8, 5.3, 0.2, 0, "porta.jpg");
	perno13 = elem13[0];
	porta13 = elem13[1];
	perno13.position.set(61, 29.67, 0.5);
	perno13.rotation.z = Math.PI / 2;
	var elem = Creaporta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
	perno = elem[0];
	porta = elem[1];
	elementi.add(perno13); 
	elementi.add(perno11); elementi.add(perno12); elementi.add(perno10); elementi.add(perno8);
	elementi.add(perno6); elementi.add(perno7); elementi.add(perno5); elementi.add(perno3);
	elementi.add(perno); elementi.add(perno4); elementi.add(perno9); elementi.add(perno2);


	elementi.perno = perno;
	elementi.porta=porta;

	elementi.perno2 = perno2;
	elementi.porta2=porta2;
	elementi.porta3=porta3;
	elementi.perno3 = perno3;
	elementi.porta4=porta4;
	elementi.perno4 = perno4;
	elementi.porta5=porta5;
	elementi.perno5 = perno5;
	elementi.porta6=porta6;
	elementi.perno6 = perno6;
	elementi.porta7=porta7;
	elementi.perno7 = perno7;
	elementi.porta8=porta8;
	elementi.perno8 = perno8;

	elementi.porta9=porta9;	
	elementi.perno9 = perno9;
	elementi.porta10=porta10;
	elementi.perno10 = perno10;
	elementi.perno11=perno11;
	elementi.porta11=porta11;
	elementi.perno12 = perno12;
	elementi.porta12 = porta12;
	elementi.porta13=porta13;
	elementi.perno13 = perno13;
	elementi.palla=palla;
	//elementi.neve=neve;

	
	
	var axisHelper = new THREE.AxisHelper( 15 );
	elementi.add( axisHelper );
	
	
var lampadine = creaLampadine();
elementi.add(lampadine);
elementi.lampadine=lampadine;
	/*elementi.lampadine.spotLight2 = lampadine.spotLight2;

	elementi.lampadine.spotLight3 = lampadine.spotLight3;

	elementi.lampadine.spotLight4 = lampadine.spotLight4;

	elementi.lampadine.spotLight5 = lampadine.spotLight5;

	elementi.lampadine.spotLight6 = lampadine.spotLight6;
	elementi.lampadine.spotLight = lampadine.spotLight;

	elementi.lampadine.spotLight7 = lampadine.spotLight7;

	elementi.lampadine.spotLight8 = lampadine.spotLight8;
	elementi.lampadine.spotLight9 = lampadine.spotLight9;

	elementi.lampadine.spotLight10 = lampadine.spotLight10;

	elementi.lampadine.spotLight11 = lampadine.spotLight11;

	elementi.lampadine.spotLight12 = lampadine.spotLight12;
*/

	elementi.luci=luci;
	

	var ogg = oggetti();
	elementi.add(ogg);
	elementi.rotation.y=Math.PI;
	elementi.scale.set(3,3,3);


	elementi.rotation.x=Math.PI/2;



	return elementi;
}
