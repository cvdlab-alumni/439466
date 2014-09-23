function creaMuri(){
	var scene = new THREE.Object3D();
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
      arrayPorta=[buco1,buco2,buco3,buco4,buco5,buco6,buco7,buco8]
      array=[];
      arrayFinestra =[buco9,buco10,buco11,buco12]
  	array1Porta =[buco13,buco14,buco15,buco16];
      array2Porta =[buco17,buco18,buco19,buco20];

      var muro = muroShape(arrayPunti,array);
      var muroPieno = createBumpMesh(muro, "muroEsterno1.jpg",10,10, "muroEsterno1bump.jpg");
      muroPieno.rotation.y=Math.PI/2;
      muroPieno.rotation.z=Math.PI/2;
      muroPieno.scale.set(19.5,20,20);
      var muroFin = muroShape(arrayPunti,arrayFinestra);
      var muroFinestra = createBumpMesh(muroFin, "muroEsterno1.jpg",10,10 ,"muroEsterno1bump.jpg");
      muroFinestra.rotation.y=Math.PI/2;
      muroFinestra.rotation.z=Math.PI/2;
      muroFinestra.scale.set(19.5,20,20);
      muroFinestra.position.set(0,19.5,0);
      scene.add(muroFinestra);

      var muroPorta = muroShape(arrayPunti,arrayPorta);
      
      var muro2 = createBumpMesh(muroPorta, "muroEsterno1.jpg",10,10, "muroEsterno1bump.jpg");
       muro2.rotation.y=Math.PI;
       muro2.rotation.x=Math.PI/2;
     muro2.scale.set(20,20,20);
     muro2.position.set(20,0,0);
     

	scene.add(muro2);
      scene.add(muroPieno);
var muro3 = muroShape(arrayPunti,array1Porta);   
var muroSala = createBumpMesh(muro3, "muroEsterno1.jpg",10,10, "muroEsterno1bump.jpg");
muroSala.rotation.y=Math.PI;
muroSala.rotation.x=Math.PI/2;
muroSala.scale.set(20,20,20);
muroSala.position.set(40,0,0);

var muro4 = muroShape(arrayPunti,array2Porta);
var muroSala1 = createBumpMesh(muro4, "muroEsterno1.jpg",10,10, "muroEsterno1bump.jpg");
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
var muroSalaNord = createBumpMesh(muroSN, "muroEsterno1.jpg", 10,10, "muroEsterno1bump.jpg");
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
 var muro1 = createBumpMesh(muro1d, "muroEsterno1.jpg",10,10, "muroEsterno1bump.jpg");


 muro1.rotation.y= Math.PI;
 muro1.rotation.x=Math.PI/2;
 muro1.scale.set(24,20,20);
 muro1.position.set(24,39.3,0);
 scene.add(muro1);
 
 var buco29 = new Coppia(0.58,0.1);
	var buco30 = new Coppia(0.48,0.1);
	var buco31 = new Coppia(0.48,0.23);
	var buco32 = new Coppia(0.58,0.23);
	arrayBuco =[buco29,buco30,buco31,buco32];
var muro2d = muroShape(arrayPunti,arrayBuco);
var muro2dd = createBumpMesh(muro2d, "muroEsterno1.jpg",10,10,"muroEsterno1bump.jpg");


muro2dd.rotation.y= Math.PI;
muro2dd.rotation.x=Math.PI/2;
muro2dd.scale.set(20,20,20);
muro2dd.position.set(44,39.3,0);
scene.add(muro2dd);
 
var buco33 = new Coppia(0.25,0.1);
var buco34 = new Coppia(0.15,0.1);
var buco35 = new Coppia(0.15,0.23);
var buco36 = new Coppia(0.25,0.23);
arrayBuco1 =[buco33,buco34,buco35,buco36];
var muro3d = muroShape(arrayPunti,arrayBuco1);
var muro3dd = createBumpMesh(muro3d, "muroEsterno1.jpg",10,10, "muroEsterno1bump.jpg");


muro3dd.rotation.y= Math.PI;
muro3dd.rotation.x=Math.PI/2;
muro3dd.scale.set(17,20,20);
muro3dd.position.set(61,39,0);
scene.add(muro3dd);


var mingresso3 = muro3d.clone();

 
//fine muri

/*pavimenti*/
 var floor = creaPavimenti();
 scene.add(floor);
 /* var muri interni */
 
 var muro1CameraMatteo = muri(12,0.1,6.3,6.1,38.5,3,"cartaPMatteo.jpg",1,1);
 scene.add(muro1CameraMatteo);
 var muro2CameraMatteo = muri(0.1,18,6.3,12.3,29.6,3,"cartaPMatteo.jpg",1,1);
 scene.add(muro2CameraMatteo);
 var mM3 = muroFin.clone();
 var muro3CameraMatteo = createBumpMesh(mM3, "cartaPMatteo.jpg",10,4);
 muro3CameraMatteo.rotation.y=Math.PI/2;
 muro3CameraMatteo.rotation.z=Math.PI/2;
 muro3CameraMatteo.scale.set(19,20,20);
 muro3CameraMatteo.position.set(0.2,19.6,0);
 scene.add(muro3CameraMatteo);
 
 var mM4 = muroPorta.clone();
 var muro4CameraMatteo = createBumpMesh(mM4, "cartaPMatteo.jpg",12,6);
 muro4CameraMatteo.rotation.y=Math.PI;
 muro4CameraMatteo.rotation.x=Math.PI/2;
muro4CameraMatteo.scale.set(20,20,12);
muro4CameraMatteo.position.set(20,20.7,0);

 scene.add(muro4CameraMatteo);
 /*corridoio*/
 
 var c1 = mM4.clone();
 var corridoio1 = createMesh(c1, "cartaCameraMatr.jpg");
 corridoio1.rotation.y=Math.PI;
 corridoio1.rotation.x=Math.PI/2;
corridoio1.scale.set(20.4,20,12);
corridoio1.position.set(20.3,14.3,0);

scene.add(corridoio1);
 
 var corridoio2 =corridoio1.clone();
 corridoio2.position.set(20.3,0.2,0);
 scene.add(corridoio2);
 var corridoio3 = muri(0.1,18.3,6.4,20.8,29.5,3,"corridoioMuro.jpg");
 //scene.add(corridoio3);
 var corridoio4 = muri(23.8,0.1,6.4,38.2,20.3,3.1,"corridoioMuro.jpg");
 //scene.add(corridoio4);
 var corridoio5= muri(8.2,0.1,6.4,56,20.3,3.1,"corridoioMuro.jpg");
 //scene.add(corridoio5);
 //var corridoio6= muri(41,0.1,2.4,40,14.6,5,"corridoioMuro.jpg");
// scene.add(corridoio6);
 var corridoio7= muri(0.1,6,6.4,0.5,17.8,3.1,"corridoioMuro.jpg");
 scene.add(corridoio7);
 var corridoio8= muri(6,0.1,6.4,23.2,38.7,3.1,"corridoioMuro.jpg");
 //scene.add(corridoio8);
 var corridoio9= muri(0.1,6,6.4,60.5,17.8,3.1,"corridoioMuro.jpg");
 //scene.add(corridoio9);
 
 /*bagno1*/
 var piastrelleBagno1 = muri(0.1,18,6.4,12.6,29.6,3,"piastrelleBagno.jpg",3,3);
 scene.add(piastrelleBagno1);
 var piastrelleBagno2 = muri(0.1,18,6.4,20.2,29.6,3,"piastrelleBagno.jpg",3,3);
 scene.add(piastrelleBagno2);
 var bucoB1 = new Coppia(0.625,0.1);
 var bucoB2 = new Coppia(0.375,0.1);
 var bucoB3 = new Coppia(0.375,0.23);
 var bucoB4 = new Coppia(0.625,0.23);
 arraybagno =[bucoB1,bucoB2,bucoB3,bucoB4];
 var murobagno = muroShape(arrayPunti,arraybagno);
 var piastrelleBagno3 = createBumpMesh(murobagno, "piastrelleBagno.jpg",3,3);

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
var piastrelleBagno4 = createBumpMesh(murobagno1, "piastrelleBagno.jpg",3,3);

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

/*var corridoio10 = createMesh(c10, "corridoioMuro.jpg");

corridoio10.rotation.y=Math.PI/2;
corridoio10.rotation.x=Math.PI/2;
corridoio10.scale.set(9.1,19,8);
corridoio10.position.set(26.2,29.4,0.4);

scene.add(corridoio10);

var corridoio11 = corridoio10.clone();
corridoio11.position.set(26.2,20.4,0.4);
scene.add(corridoio11);
*/


/*cameraMatrimoniale*/
 var muroCameraMatr1 = muri(0.1,14.1,6.5,0.5,7.1,3.1,"cartaCameraMatr.jpg",2,2);
 scene.add(muroCameraMatr1);
 var muroCameraMatr2 = muri(0.1,14.1,6.5,12.2,7.1,3.1,"cartaCameraMatr.jpg",2,2);
 scene.add(muroCameraMatr2);
 /*cucina*/

 var cucina1= muri(0.1,14.1,6.5,12.6,7.3,3.1,"cucinaP.jpg",1,1);
 scene.add(cucina1);
 var cucina2= muri(0.1,14.1,6.5,20.4,7.3,3.1,"cucinaP.jpg",1,1);
 scene.add(cucina2);
 var c2 =murobagno1.clone();
 var cucina3 = createMesh(c2, "cucinaP.jpg");

 cucina3.rotation.y=Math.PI;
 cucina3.rotation.x=Math.PI/2;
 cucina3.scale.set(8,18.9,8);
 cucina3.position.set(20.5,14.2,0.4);
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
 var muroIng = muri(0.1,18,6.5,40.8,30,3.2,"muroIngresso.jpg",8,8);
 scene.add(muroIng);
 
 var muroIng2 = muri(9.5,0.1,6.4,45.2,20.7,3.1,"muroIngresso.jpg",8,8);
 scene.add(muroIng2);
 var muroIng3 = muri(9,0.1,6.4,56.4,20.7,3.1,"muroIngresso.jpg",8,8);
 scene.add(muroIng3);
 var muroIng4 = muri(0.1,9,6.4,60.4,24.7,3.1,"muroIngresso.jpg",8,8);
 scene.add(muroIng4);
 var muroIng5 = muri(0.1,6.7,6.4,60.4,34.85,3.1,"muroIngresso.jpg",8,8);
 scene.add(muroIng5);
 
 
 return scene;
}

function createMesh(geom, imageFile, bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    geom.computeVertexNormals();
    var mat = new THREE.MeshBasicMaterial();
    mat.map = texture;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
    texture.repeat.set( 100000, 100000 );
    texture.needsUpdate = true;

    var myMaterial = new THREE.MeshBasicMaterial({map:texture,side: THREE.DoubleSide });
  
  var myMesh = new THREE.Mesh(geom, myMaterial);
  return myMesh;
}   


function createBumpMesh(geom, imageFile,x,y,bump) {
	    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
	        texture.wrapS = THREE.RepeatWrapping;
	    texture.wrapT = THREE.RepeatWrapping;
	    geom.computeVertexNormals();
	    var mat = new THREE.MeshBasicMaterial();
	    mat.map = texture;
	    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( x, y);
        texture.needsUpdate = true;

        var myMaterial = new THREE.MeshPhongMaterial({map:texture});
        if(bump)
        {
        var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
        bump.wrapS = bump.wrapT = THREE.RepeatWrapping; 
        //bump.repeat.set(x,y);
        bump.needsUpdate = true;
        myMaterial.bumpMap = bump;
        myMaterial.bumpScale = 0.3;
      }

      var myMesh = new THREE.Mesh(geom, myMaterial);
      return myMesh;
 }   
	
