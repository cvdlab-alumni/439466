function pavimenti(x,y,z,texture){
	var pavimento = createMesh(new THREE.BoxGeometry(x, y,z), texture);
	return pavimento;
}

function createMesh(geom, texture) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + texture)
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;// dentro l'oggetto texture su s e su t(y) specifichiamo che dobbiamo andare a ripetere la nostra textyre

    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;


    // create a multimaterial
    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }


function creaPavimenti(){
	
	
	var scene = new THREE.Object3D();
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
	 
	 return scene;
}