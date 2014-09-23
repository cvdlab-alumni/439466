function creaTerrazzo(x,y,z,texture,xrep,yrep){
	var terrazzo = createBumpMesh(new THREE.BoxGeometry(x, y,z), texture,xrep,yrep);
	return terrazzo;
}


function createMesh(geom, texture) {
     texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + texture);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;// dentro l'oggetto texture su s e su t(y) specifichiamo che dobbiamo andare a ripetere la nostra textyre

    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    // create a multimaterial
    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
  }	


function ringhiera(){
	
	var mesh= new THREE.Object3D();	      
	  	var loader2 = new THREE.OBJMTLLoader();
	      loader2.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	       // object.rotation.y =Math.PI;

	        object.position.set(0,0,2);
	object.scale.set(1,0.4,0.5);
	        mesh.add(object);

	      });


	      loader2.load(
	        'assets/models/rampe.obj', 
	        {side: THREE.DoubleSide}
	      );
	      return mesh;
}
	      
	      function latoCorto(){
	    	  var mesh = new THREE.Object3D();
	    	var loader3 = new THREE.OBJMTLLoader();
		      loader3.addEventListener('load', function (event) {

		        var object = event.content;

		        object.rotation.x =Math.PI/2;
		       // object.rotation.y =Math.PI;

		        object.position.set(-0.7,0,2);
		        
		object.scale.set(0.3,0.3,0.5);
		       // mesh = object;
		        mesh.add(object);

		      });

		      loader3.load(
		        'assets/models/rampe.obj', 
		        {side: THREE.DoubleSide}
		      );
	      return mesh;
	      }
	      
	      
	      function oggetti(){
	    	  var mesh = new THREE.Object3D();
	    	  var loader4 = new THREE.OBJMTLLoader();
		      loader4.addEventListener('load', function (event) {

		        var object = event.content;

		        object.rotation.x =Math.PI/2;
		       // object.rotation.y =Math.PI;

		        object.position.set(10,-3.2,1.3);
		        
		object.scale.set(0.02,0.02,0.02);
		       // mesh = object;
		        mesh.add(object);

		      });


		      loader4.load(
		        'assets/models/table_tennis.obj', 
		        'assets/models/table_tennis.mtl', 

		        {side: THREE.DoubleSide}
		      );
		      
	    	  var loader5 = new THREE.OBJMTLLoader();
		      loader5.addEventListener('load', function (event) {

		        var object = event.content;

		        object.rotation.x =Math.PI/2;
		       // object.rotation.y =Math.PI;

		        object.position.set(30,-2.2,0.3);
		        
		object.scale.set(0.15,0.15,0.15);
		       // mesh = object;
		        mesh.add(object);

		      });


		      loader5.load(
		        'assets/models/luckyBamboo.obj', 
		        'assets/models/luckyBamboo.mtl', 

		        {side: THREE.DoubleSide}
		      );      
		      
		 /* 	var loader1 = new THREE.OBJMTLLoader();
		  	      loader1.addEventListener('load', function (event) {

		  	        var object = event.content;

		  	        object.rotation.x =Math.PI/2;
		  	       // object.rotation.y =Math.PI;

		  	        object.position.set(4,27.9,2);
		  	object.scale.set(0.04,0.04,0.04);
		  	       // mesh = object;
		  	        mesh.add(object);

		  	      });


		  	      loader1.load(
		  	        'assets/models/marteau.obj', 
		  	        {side: THREE.DoubleSide}
		  	      );
		  	       */
	    	  var loader4 = new THREE.OBJMTLLoader();
		      loader4.addEventListener('load', function (event) {

		        var object = event.content;

		        object.rotation.x =Math.PI/2;
		       // object.rotation.y =Math.PI;

		        object.position.set(20,-2.2,0.3);
		        
		object.scale.set(0.15,0.15,0.15);
		       // mesh = object;
		        mesh.add(object);

		      });

		      loader4.load(
		        'assets/models/luckyBamboo.obj', 
		        'assets/models/luckyBamboo.mtl', 

		        {side: THREE.DoubleSide}
		      );
			  var loader6 = new THREE.OBJMTLLoader();
		      loader6.addEventListener('load', function (event) {

		        var object = event.content;

		        object.rotation.x =Math.PI/2;
		       // object.rotation.y =Math.PI;

		        object.position.set(40,-2.2,0.3);
		        
		object.scale.set(0.15,0.15,0.15);
		       // mesh = object;
		        mesh.add(object);

		      });


		      loader6.load(
		        'assets/models/luckyBamboo.obj', 
		        'assets/models/luckyBamboo.mtl', 

		        {side: THREE.DoubleSide}
		      );
			  var loader7 = new THREE.OBJMTLLoader();
		      loader7.addEventListener('load', function (event) {

		        var object = event.content;

		        object.rotation.x =Math.PI/2;
		       // object.rotation.y =Math.PI;

		        object.position.set(50,-2.2,0.3);
		        
		object.scale.set(0.15,0.15,0.15);
		       // mesh = object;
		        mesh.add(object);

		      });
		      loader7.load(
		        'assets/models/luckyBamboo.obj', 
		        'assets/models/luckyBamboo.mtl', 

		        {side: THREE.DoubleSide}
		      );
		      
		
		
		      return mesh;
	  			       }
	  