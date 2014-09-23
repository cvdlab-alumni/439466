function pavimenti(x,y,z,texture,rep_x,rep_y){
	var pavimento = createBumpMesh(new THREE.BoxGeometry(x, y,z), texture,rep_x,rep_y);
	return pavimento;
}



function creaPavimenti(){


	var scena = new THREE.Object3D();
	var cameraMatteo = pavimenti(12,18,0.001,"parquet.jpg",3,3);
	cameraMatteo.position.set(6,29.5,0.325);
	scena.add(cameraMatteo);
	var bagno1 = pavimenti(8,18,0.001,"mosaico.jpg",2,2);
	bagno1.position.set(16.5,29.5,0.325);
	scena.add(bagno1);

	var salone = pavimenti(40,14,0.001,"marmo.jpg",10,10);
	salone.position.set(40.2,7,0.325);
	scena.add(salone);

	var cameraGrande = pavimenti(12,14,0.001,"parquet.jpg",3,3);
	cameraGrande.position.set(6,7,0.325);
	scena.add(cameraGrande);

	var corridoio = pavimenti(60,6,0.001,"corridoio.jpg",3,3);
	corridoio.position.set(30,17,0.325);
	scena.add(corridoio);

	var ingresso= pavimenti(20.2,18,0.001,"ingresso.jpg",4,4);
	ingresso.position.set(50.4,30,1);
	scena.add(ingresso);

	var pavimentoM= pavimenti(14,8.7,0.001,"pavimentom.jpg",2,2);
	pavimentoM.position.set(33.5,25.1,1);
	scena.add(pavimentoM);
	var bagno2= pavimenti(14,9,0.001,"mosaicoVerde.jpg",2,2);
	bagno2.position.set(33.5,34.2,1);
	scena.add(bagno2);



	var corridoio2 = pavimenti(4.5,18.4,0.001,"corridoio.jpg",3,3);

	corridoio2.position.set(24,29.6,0.6);
	//scena.add(corridoio2);


	var cucina = pavimenti(8,14,0.001,"kitchen.jpg",2,2);
	cucina.position.set(16.3,7,0.35);
	scena.add(cucina);
	
	
	return scena;
}


function createBumpMesh1(geom, imageFile,x,y,bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
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
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump);
    bump.wrapS = bump.wrapT = THREE.RepeatWrapping; 
    bump.repeat.set(x,y);
    bump.needsUpdate = true;
    myMaterial.bumpMap = bump;
    myMaterial.bumpScale = 0.3;
  }

  var myMesh = new THREE.Mesh(geom, myMaterial);
  return myMesh;
}   