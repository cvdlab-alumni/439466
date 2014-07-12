
   function tutto () {

      var stats = initStats();

      // create a scene, that will hold all our elements such as objects, cameras and lights.
      var scene = new THREE.Scene();

      // create a camera, which defines where we're looking at.
      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      // create trackball controls
      var trackballControls = new THREE.TrackballControls(camera);

      // create a render and set the size
      var webGLRenderer = new THREE.WebGLRenderer();
      webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
      webGLRenderer.setSize(window.innerWidth, window.innerHeight);

//metti in uno script a parte

     var elem2= porta(2,0.3,4,5.3,0.2,0,"PortaFinestra.jpg");
      perno2 = elem2[0];
      porta2=elem2[1];
      perno2.position.set(15.6,0,0);
      
      var elem3= porta(2,0.3,4,5.3,0.2,0,"PortaFinestra.jpg");
      perno3 = elem3[0];
      porta3=elem3[1];
      perno3.position.set(32.8,0,0);
      var elem4= porta(2,0.3,4,5.3,0.2,0,"PortaFinestra.jpg");
      perno4 = elem4[0];
      porta4=elem4[1];
      perno4.position.set(46.6,0,0);



      var elem = porta(2,0.3,4,5.3,0.2,0,"PortaFinestra.jpg");
      perno = elem[0];
      porta=elem[1];
scene.add(perno3);
      scene.add(perno);
      scene.add(perno4);

     scene.add(perno2);

	var coppia1 = new Coppia(0.0,0.0);
	var coppia2 = new Coppia(1.0,0.0);
	var coppia3 = new Coppia(1.0,0.31);
	var coppia4 =new Coppia(0.0,0.31);
	
	var buco1 = new Coppia(0.13,0.0);
	var buco2 = new Coppia(0.23,0.0);
	var buco3 = new Coppia(0.23,0.2);
	var buco4 = new Coppia(0.13,0.2);
	
	var buco5 = new Coppia(0.64,0.0);
	var buco6 = new Coppia(0.73,0.0);
	var buco7 = new Coppia(0.73,0.2);
	var buco8 = new Coppia(0.64,0.2);
	
	var buco9 = new Coppia(0.36,0.1);
	var buco10 = new Coppia(0.7,0.1);
	var buco11 = new Coppia(0.7,0.25);
	var buco12 = new Coppia(0.36,0.25);
	
	var buco13 = new Coppia(0.26,0.0);
	var buco14 = new Coppia(0.36,0.0);
	var buco15 = new Coppia(0.36,0.2);
	var buco16 = new Coppia(0.26,0.2);
	
	var buco17 = new Coppia(0.56,0.0);
	var buco18 = new Coppia(0.66,0.0);
	var buco19 = new Coppia(0.66,0.2);
	var buco20 = new Coppia(0.56,0.2);

      arrayPunti=[coppia1,coppia2,coppia3,coppia4];
      arrayBuchi =[buco5,buco6,buco7,buco8];
      arrayPorta=[buco1,buco2,buco3,buco4,buco5,buco6,buco7,buco8];
      array=[];
      arrayFinestra =[buco9,buco10,buco11,buco12];
  	array1Porta =[buco13,buco14,buco15,buco16];
      array2Porta =[buco17,buco18,buco19,buco20];

      var muro = muroShape(arrayPunti,array);
      var muroPieno = createBumpMesh(muro, "muroEsterno1.jpg", "muroEsterno1bump.jpg");
      muroPieno.rotation.y=Math.PI/2;
      muroPieno.rotation.z=Math.PI/2;
      muroPieno.scale.set(19.5,20,20);
      var muroFin = muroShape(arrayPunti,arrayFinestra);
      var muroFinestra = createBumpMesh(muroFin, "muroEsterno1.jpg", "muroEsterno1bump.jpg");
      muroFinestra.rotation.y=Math.PI/2;
      muroFinestra.rotation.z=Math.PI/2;
      muroFinestra.scale.set(19.5,20,20);
      muroFinestra.position.set(0,19.5,0);
      scene.add(muroFinestra);

      var muroPorta = muroShape(arrayPunti,arrayPorta);
      
      var muro2 = createBumpMesh(muroPorta, "muroEsterno1.jpg", "muroEsterno1bump.jpg");
       muro2.rotation.y=Math.PI;
       muro2.rotation.x=Math.PI/2;
     muro2.scale.set(20,20,20);
     muro2.position.set(20,0,0);
     

	scene.add(muro2);
      scene.add(muroPieno);
var muro3 = muroShape(arrayPunti,array1Porta);   
var muroSala = createBumpMesh(muro3, "muroEsterno1.jpg", "muroEsterno1bump.jpg");
muroSala.rotation.y=Math.PI;
muroSala.rotation.x=Math.PI/2;
muroSala.scale.set(20,20,20);
muroSala.position.set(40,0,0);

var muro4 = muroShape(arrayPunti,array2Porta);
var muroSala1 = createBumpMesh(muro4, "muroEsterno1.jpg", "muroEsterno1bump.jpg");
muroSala1.rotation.y=Math.PI;
muroSala1.rotation.x=Math.PI/2;
muroSala1.scale.set(20,20,20);
muroSala1.position.set(60,0,0);



scene.add(muroSala);
scene.add(muroSala1);

//muro ingresso
var MuroIngresso = muroPieno.clone();
MuroIngresso.position.set(61,0,0);
scene.add(MuroIngresso);
//muro SalaNord
	var buco21 = new Coppia(0.52,0.0);
	var buco22 = new Coppia(0.62,0.0);
	var buco23 = new Coppia(0.62,0.2);
	var buco24 = new Coppia(0.52,0.2);
	arraySala =[buco21,buco22,buco23,buco24];
var muroSN =muroShape(arrayPunti,arraySala);
var muroSalaNord = createBumpMesh(muroSN, "muroEsterno1.jpg", "muroEsterno1bump.jpg");
muroSalaNord.rotation.y=Math.PI/2;
muroSalaNord.rotation.z=Math.PI/2;
muroSalaNord.scale.set(19.5,20,20);
muroSalaNord.position.set(61,19.5,0);
scene.add(muroSalaNord);

/*lato camerette
 * 
 */
 var buco25 = new Coppia(0.375,0.1);
	var buco26 = new Coppia(0.27,0.1);
	var buco27 = new Coppia(0.27,0.23);
	var buco28 = new Coppia(0.35,0.23);
	arrayBuco =[buco25,buco26,buco27,buco28];
 var muro1d = muroShape(arrayPunti,arrayBuco);
 var muro1 = createBumpMesh(muro1d, "muroEsterno1.jpg", "muroEsterno1bump.jpg");


 muro1.rotation.y= Math.PI;
 muro1.rotation.x=Math.PI/2;
 muro1.scale.set(24,20,20);
 muro1.position.set(24,39,0);
 scene.add(muro1);
 
 var buco29 = new Coppia(0.58,0.1);
	var buco30 = new Coppia(0.48,0.1);
	var buco31 = new Coppia(0.48,0.23);
	var buco32 = new Coppia(0.58,0.23);
	arrayBuco =[buco29,buco30,buco31,buco32];
var muro2d = muroShape(arrayPunti,arrayBuco);
var muro2dd = createBumpMesh(muro2d, "muroEsterno1.jpg", "muroEsterno1bump.jpg");


muro2dd.rotation.y= Math.PI;
muro2dd.rotation.x=Math.PI/2;
muro2dd.scale.set(20,20,20);
muro2dd.position.set(44,39,0);
scene.add(muro2dd);
 
var buco33 = new Coppia(0.25,0.1);
var buco34 = new Coppia(0.15,0.1);
var buco35 = new Coppia(0.15,0.23);
var buco36 = new Coppia(0.25,0.23);
arrayBuco1 =[buco33,buco34,buco35,buco36];
var muro3d = muroShape(arrayPunti,arrayBuco1);
var muro3dd = createBumpMesh(muro3d, "muroEsterno1.jpg", "muroEsterno1bump.jpg");


muro3dd.rotation.y= Math.PI;
muro3dd.rotation.x=Math.PI/2;
muro3dd.scale.set(17,20,20);
muro3dd.position.set(61,39,0);
scene.add(muro3dd);



 
//fine muri

/*pavimenti*/
 var cameraMatteo = pavimenti(12,18,0.2,"parquet.jpg");
 cameraMatteo.position.set(6,29.1,0.5);
 scene.add(cameraMatteo);
 var bagno1 = pavimenti(8,18,0.2,"mosaico.jpg");
 
 bagno1.position.set(16.5,29.1,0.5);
 scene.add(bagno1);
 
 var salone = pavimenti(40,14,0.5,"marmo.jpg");
 salone.position.set(40.2,7,0.5);
 scene.add(salone);
 
 var cameraGrande = pavimenti(12,14,0.2,"parquet.jpg");
 cameraGrande.position.set(6,7,0.5);
 scene.add(cameraGrande);
 
 var corridoio = pavimenti(60,6,0.2,"corridoio.jpg");
 corridoio.position.set(30,17,0.5);
 scene.add(corridoio);

 var ingresso= pavimenti(20.2,18,0.2,"ingresso.jpg");
 ingresso.position.set(50.4,30,0.7);
 scene.add(ingresso);
 
 var pavimentoM= pavimenti(14,8.7,0.2,"pavimentom.jpg");
 pavimentoM.position.set(33.5,25.1,0.9);
 scene.add(pavimentoM);
 var bagno2= pavimenti(14,9,0.2,"mosaicoVerde.jpg");
 bagno2.position.set(33.5,34.2,1.4);
 scene.add(bagno2);
 
 

var corridoio2 = pavimenti(5.6,18.4,0.2,"corridoio.jpg");
 
 corridoio2.position.set(23.1,29.2,1);
 scene.add(corridoio2);

 
 var cucina = pavimenti(8,14,0.2,"kitchen.jpg");
 cucina.position.set(16.3,7,0.5);
 scene.add(cucina);
 
 
 /* var muri interni */
 
 var muro1CameraMatteo = muri(12,0.1,6.3,6.1,38.5,3,"cartaPMatteo.jpg");
 scene.add(muro1CameraMatteo);
 var muro2CameraMatteo = muri(0.1,18,6.3,12.3,29.5,3,"cartaPMatteo.jpg");
 scene.add(muro2CameraMatteo);
 var mM3 = muroFin.clone();
 var muro3CameraMatteo = createMesh(mM3, "cartaPMatteo.jpg");
 muro3CameraMatteo.rotation.y=Math.PI/2;
 muro3CameraMatteo.rotation.z=Math.PI/2;
 muro3CameraMatteo.scale.set(19,20,20);
 muro3CameraMatteo.position.set(0.2,19.6,0);
 scene.add(muro3CameraMatteo);
 
 var mM4 = muroPorta.clone();
 var muro4CameraMatteo = createMesh(mM4, "cartaPMatteo.jpg");
 muro4CameraMatteo.rotation.y=Math.PI;
 muro4CameraMatteo.rotation.x=Math.PI/2;
muro4CameraMatteo.scale.set(20,20,12);
muro4CameraMatteo.position.set(20,20.7,0);

 scene.add(muro4CameraMatteo);
 /*corridoio*/
 
 var c1 = mM4.clone();
 var corridoio1 = createMesh(c1, "corridoioMuro.jpg");
 corridoio1.rotation.y=Math.PI;
 corridoio1.rotation.x=Math.PI/2;
corridoio1.scale.set(20.4,20,12);
corridoio1.position.set(20.3,20.4,0);

 scene.add(corridoio1);
 
 var corridoio2 =corridoio1.clone();
 corridoio2.position.set(20.3,14.6,0);
 scene.add(corridoio2);
 var corridoio3 = muri(0.1,18.3,6.4,20.8,29.5,3,"corridoioMuro.jpg");
 scene.add(corridoio3);
 var corridoio4 = muri(23.8,0.1,6.4,38.2,20.3,3.1,"corridoioMuro.jpg");
 scene.add(corridoio4);
 var corridoio5= muri(8.2,0.1,6.4,56,20.3,3.1,"corridoioMuro.jpg");
 scene.add(corridoio5);
 var corridoio6= muri(41,0.1,2.4,40,14.6,5,"corridoioMuro.jpg");
 scene.add(corridoio6);
 var corridoio7= muri(0.1,6,6.4,0.5,17.8,3.1,"corridoioMuro.jpg");
 scene.add(corridoio7);
 var corridoio8= muri(6,0.1,6.4,23.2,38.7,3.1,"corridoioMuro.jpg");
 scene.add(corridoio8);
 var corridoio9= muri(0.1,6,6.4,60.5,17.8,3.1,"corridoioMuro.jpg");
 scene.add(corridoio9);
 
 /*bagno1*/
 var piastrelleBagno1 = muri(0.1,18,6.4,12.6,29.5,3,"piastrelleBagno.jpg");
 scene.add(piastrelleBagno1);
 var piastrelleBagno2 = muri(0.1,18,6.4,20.2,29.5,3,"piastrelleBagno.jpg");
 scene.add(piastrelleBagno2);
 var bucoB1 = new Coppia(0.625,0.1);
 var bucoB2 = new Coppia(0.375,0.1);
 var bucoB3 = new Coppia(0.375,0.23);
 var bucoB4 = new Coppia(0.625,0.23);
 arraybagno =[bucoB1,bucoB2,bucoB3,bucoB4];
 var murobagno = muroShape(arrayPunti,arraybagno);
 var piastrelleBagno3 = createMesh(murobagno, "piastrelleBagno.jpg");

piastrelleBagno3.rotation.y=Math.PI;
piastrelleBagno3.rotation.x=Math.PI/2;
piastrelleBagno3.scale.set(8,19.2,8);
piastrelleBagno3.position.set(20.3,38.7,0.3);
scene.add(piastrelleBagno3);

var bucoB5 = new Coppia(0.625,0.0);
var bucoB6 = new Coppia(0.375,0.0);
var bucoB7 = new Coppia(0.375,0.2);
var bucoB8 = new Coppia(0.625,0.2);
arrayBagno2 =[bucoB5,bucoB6,bucoB7,bucoB8];
var murobagno1 = muroShape(arrayPunti,arrayBagno2);
var piastrelleBagno4 = createMesh(murobagno1, "piastrelleBagno.jpg");

piastrelleBagno4.rotation.y=Math.PI;
piastrelleBagno4.rotation.x=Math.PI/2;
piastrelleBagno4.scale.set(8,18.9,8);
piastrelleBagno4.position.set(20.3,20.9,0.4);
scene.add(piastrelleBagno4);

 /*bagno2*/
  var piastrelleBagno2_1 = muri(14,0.1,6.5,33.4,30,3,"bagno2parete.jpg");
 scene.add(piastrelleBagno2_1);
 var piastrelleBagno2_2 = muri(0.1,9,6.5,40.3,34,3,"bagno2parete.jpg");

 scene.add(piastrelleBagno2_2); 
 var bucoB2_1 = new Coppia(0.57,0.1);
 var bucoB2_2 = new Coppia(0.42,0.1);
 var bucoB2_3 = new Coppia(0.42,0.23);
 var bucoB2_4 = new Coppia(0.57,0.23);
 arraybagno_2 =[bucoB2_1,bucoB2_2,bucoB2_3,bucoB2_4];
 var murobagno_2 = muroShape(arrayPunti,arraybagno_2);
 var piastrelleBagno2_3 = createMesh(murobagno_2, "bagno2parete.jpg");

 piastrelleBagno2_3.rotation.y=Math.PI;
 piastrelleBagno2_3.rotation.x=Math.PI/2;
 piastrelleBagno2_3.scale.set(14,19.5,8);
 piastrelleBagno2_3.position.set(40.5,38.5,0.3);
 scene.add(piastrelleBagno2_3);
 

 
 
 

 /*camera2*/
  var cameraM1 = muri(14,0.1,6.5,33.4,29.6,3,"cartaPM.jpg");
 
 var cameraM2 = muri(0.1,9,6.5,40.3,25,3,"cartaPM.jpg");
 var cameraM3 = muri(14,0.1,6.5,33.4,20.6,3,"cartaPM.jpg");
 var cam1 = murobagno1.clone();
 var cameraM4 = createMesh(cam1, "cartaPM.jpg");

 cameraM4.rotation.y=Math.PI/2;
 cameraM4.rotation.x=Math.PI/2;
 cameraM4.scale.set(9.1,19,8);
 cameraM4.position.set(26.5,20.9,0.4);
 scene.add(cameraM4);
 

scene.add(cameraM1);
scene.add(cameraM2);
scene.add(cameraM3);


var b4=cam1.clone();
var bagno4 = createMesh(b4, "bagno2parete.jpg");

bagno4.rotation.y=Math.PI/2;
bagno4.rotation.x=Math.PI/2;
bagno4.scale.set(9.1,19,8);
bagno4.position.set(26.5,29.4,0.4);
scene.add(bagno4);

var c10 = cam1.clone();

var corridoio10 = createMesh(c10, "corridoioMuro.jpg");

corridoio10.rotation.y=Math.PI/2;
corridoio10.rotation.x=Math.PI/2;
corridoio10.scale.set(9.1,19,8);
corridoio10.position.set(26.2,29.4,0.4);

scene.add(corridoio10);

var corridoio11 = corridoio10.clone();
corridoio11.position.set(26.2,20.4,0.4);
scene.add(corridoio11);



/*cameraMatrimoniale*/
 var muroCameraMatr1 = muri(0.1,14.1,6.5,0.5,7.1,3.1,"cartaCameraMatr.jpg");
 scene.add(muroCameraMatr1);
 var muroCameraMatr2 = muri(0.1,14.1,6.5,12.2,7.1,3.1,"cartaCameraMatr.jpg");
 scene.add(muroCameraMatr2);
 /*cucina*/

 var cucina1= muri(0.1,14.1,6.5,12.6,7.3,3.1,"cucinaP.jpg");
 scene.add(cucina1);
 var cucina2= muri(0.1,14.1,6.5,20.4,7.3,3.1,"cucinaP.jpg");
 scene.add(cucina2);
 var c2 =murobagno1.clone();
 var cucina3 = createMesh(c2, "cucinaP.jpg");

 cucina3.rotation.y=Math.PI;
 cucina3.rotation.x=Math.PI/2;
 cucina3.scale.set(8,18.9,8);
 cucina3.position.set(20.5,14.3,0.4);
 scene.add(cucina3);
 var cucina4=cucina3.clone();
 cucina4.position.set(20.5,0.36,0.4);
 scene.add(cucina4);
 
 /*salone*/
  var salone1= muri(0.1,14.1,6.5,20.8,7.1,3.1,"saloneP.jpg");
 scene.add(salone1);
 var salone2= muri(0.1,14.1,6.5,60.6,7.1,3.1,"saloneP.jpg");
 scene.add(salone2);
 
 var muroS = muro3.clone();   
 var salone3 = createMesh(muroS, "saloneP.jpg");
 salone3.rotation.y=Math.PI;
 salone3.rotation.x=Math.PI/2;
 salone3.scale.set(20,20,20);
 salone3.position.set(40,0.2,0);
 scene.add(salone3);

 var muroS2 = muro4.clone();
 var salone4 = createMesh(muroS2, "saloneP.jpg");
 salone4.rotation.y=Math.PI;
 salone4.rotation.x=Math.PI/2;
 salone4.scale.set(20,20,20);
 salone4.position.set(60,0.2,0);



 scene.add(salone4);
 
 /*ingresso*/
 var muroIng = muri(0.1,18,6.5,40.8,30,3.2,"muroIngresso.jpg");
 scene.add(muroIng);
 
 var muroIng2 = muri(9.5,0.1,6.4,45.2,20.5,3.1,"muroIngresso.jpg");
 scene.add(muroIng2);
 var muroIng3 = muri(9,0.1,6.4,56.4,20.7,3.1,"muroIngresso.jpg");
 scene.add(muroIng3);
 

 
      // position and point the camera to the center of the scene
      camera.position.set(-30,40,50);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // add spotlights
      var spotLight1 = new THREE.SpotLight(0xffffff);
      spotLight1.position.set(-30, 40, 50);
      spotLight1.intensity = 2;
      scene.add(spotLight1);

      var spotLight2 = new THREE.SpotLight(0xffffff);
      spotLight2.position.set(30, -40, -50);
      spotLight2.intensity = 2;
      scene.add(spotLight2);
      var spotLight3 = new THREE.SpotLight(0xffffff);
      spotLight3.position.set(30, 55, 30);
      spotLight3.intensity = 2;
      scene.add(spotLight3);

      
      var spotLight4 = new THREE.SpotLight(0xffffff);
      spotLight4.position.set(80, 55, 30);
      spotLight4.intensity = 2;
      scene.add(spotLight4);
     /* var pointColor = "#ff5808";
      var directionalLight = new THREE.DirectionalLight(pointColor);
      directionalLight.position.set(70, 80, 50);
      directionalLight.castShadow = true;
      directionalLight.shadowCameraNear = 2;
      directionalLight.shadowCameraFar = 50;
      directionalLight.shadowCameraLeft = -20;
      directionalLight.shadowCameraRight = 20;
      directionalLight.shadowCameraTop = 20;
      directionalLight.shadowCameraBottom = -20;
      directionalLight.shadowMapWidth = 1024;
      directionalLight.shadowMapHeight = 1024;

      directionalLight.intensity = 10.5;
      
      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {

        var object = event.content;

        var wing2 = object.children[5].children[0];
        var wing1 = object.children[4].children[0];

        wing1.material.alphaTest = 0.5;
        wing1.material.opacity = 0.6;
        wing1.material.transparent = true;

        wing2.material.alphaTest = 0.4;
        wing2.material.opacity = 0.7;
        wing2.material.transparent = true;

        object.scale.set(140, 140, 140);
        mesh = object;
        scene.add(mesh);

        object.rotation.x = 0.2;
        object.rotation.y = -1.3;
      });


      loader.load(
        'assets/models/butterfly.obj', 
        'assets/models/butterfly.mtl', 
        {side: THREE.DoubleSide}
      );


      scene.add(directionalLight);*/
      // add the output of the renderer to the html element
      $('body').append(webGLRenderer.domElement);

      // call the render function
      var step = 0;

      // setup the control gui
      var controls = new function () {};

      var gui = new dat.GUI();
      var mesh;

      var loader = new THREE.OBJLoader();
      loader.load('assets/models/progetto1.obj', function (obj) {

        global_o = obj;

     //   var material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
       //  material.side = THREE.DoubleSide;
     //   obj.children[0].material = material;
     //   mesh = obj.children[0];
        
      var projector = new THREE.Projector();
      document.addEventListener('mousedown', onDocumentMouseDown, false);
        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0xFFFFFF, side: THREE.DoubleSide, shading: THREE.FlatShading }),
          new THREE.MeshBasicMaterial({wireframe: true, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
          ];

        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
        scene.add(mesh);
      });
      
      
      var loader1 = new THREE.OBJMTLLoader();
      loader1.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(140, 140, 140);
        mesh = object;
        scene.add(mesh);

      });


      loader1.load(
        'assets/models/butterfly.obj', 
        'assets/models/butterfly.mtl', 
        {side: THREE.DoubleSide}
      );



      render();
     var carica = caricaProva();
     scene.add(carica);
      
     
      function createBumpMesh(geom, imageFile, bump) {
    	    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
    	    geom.computeVertexNormals();
    	    var mat = new THREE.MeshPhongMaterial();
    	    mat.map = texture;

    	    if (bump) {
    	      var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump);
    	      mat.bumpMap = bump;
    	      mat.bumpScale = -0.3;
    	    }
 
    	    var mesh = new THREE.Mesh(geom, mat);
       	   //mesh.material.map.wrapS = THREE.RepeatWrapping;
            //mesh.material.map.wrapT = THREE.RepeatWrapping;

    	    return mesh;
    	  }
     
      
      

      function render() {
        stats.update();
        trackballControls.update();

        // render using requestAnimationFrame
        requestAnimationFrame(render);
        webGLRenderer.render(scene, camera);
      }
      
      
      var projector = new THREE.Projector();
      var tube;

      function onDocumentMouseDown(event) {
        event.preventDefault();

        // map viewport coordinates in ([-1,1], [-1,1], 0.5)
        var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
        projector.unprojectVector(vector, camera);

        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

        var intersects = raycaster.intersectObjects([porta]);
        var intersects1 = raycaster.intersectObjects([porta2]);
        var intersects2 = raycaster.intersectObjects([porta3]);
        var intersects3 = raycaster.intersectObjects([porta4]);


        
/*porta.interact = function() {
	door.parent.rotate(...)
}*/
if (intersects1.length > 0) {
	
    //intersects[0].interact && intersects[0].interact
    perno2.rotation.z = Math.PI/2;
   }
        if (intersects.length > 0) {
        	
         //intersects[0].interact && intersects[0].interact
         perno.rotation.z = Math.PI/2;
        }
        if (intersects2.length > 0) {
        	
            //intersects[0].interact && intersects[0].interact
            perno3.rotation.z = Math.PI/2;
           }
        if (intersects3.length > 0) {
        	
            //intersects[0].interact && intersects[0].interact
            perno4.rotation.z = Math.PI/2;
           }

        
      }

      function initStats() {
        var stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        $('body').append(stats.domElement);
        return stats;
      }
      return scene;
    }

