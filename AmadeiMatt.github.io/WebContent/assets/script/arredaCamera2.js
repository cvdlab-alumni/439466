function arredaCamera2() {
	
	
	
	var mesh= new THREE.Object3D();

	var loader1 = new THREE.OBJMTLLoader();
	      loader1.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	       // object.rotation.y =Math.PI;

	        object.position.set(38.6,25,1.4);
	object.scale.set(0.7,0.7,0.7);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader1.load(
	        'assets/models/captainsBed.obj', 
	        'assets/models/captainsBed.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      

	  	var loader2 = new THREE.OBJMTLLoader();
	  	      loader2.addEventListener('load', function (event) {

	  	        var object = event.content;

	  	        object.rotation.x =Math.PI/2;
	  	       object.rotation.y =-Math.PI/2;

	  	        object.position.set(55.5,17.5,1.0);
	  	object.scale.set(0.04,0.04,0.03);
	  	       // mesh = object;
	  	        mesh.add(object);

	  	      });


	  	      loader2.load(
	  	        'assets/models/comodinoArancio.obj', 
	  	        'assets/models/comodinoArancio.mtl', 
	  	        {side: THREE.DoubleSide}
	  	      );
	  	      

	  	  	var loader3 = new THREE.OBJMTLLoader();
	  	  	      loader3.addEventListener('load', function (event) {

	  	  	        var object = event.content;

	  	  	        object.rotation.x =Math.PI/2;
	  	  	       object.rotation.y =-Math.PI/2;

	  	  	        object.position.set(38.5,23.5,1.0);
	  	  	object.scale.set(0.03,0.02,0.03);
	  	  	       // mesh = object;
	  	  	        mesh.add(object);

	  	  	      });


	  	  	      loader3.load(
	  	  	        'assets/models/mobileArancio.obj', 
	  	  	        'assets/models/mobileArancio.mtl', 
	  	  	        {side: THREE.DoubleSide}
	  	  	      );
	  	  	      
	  	  	      

	  	  	  	var loader4 = new THREE.OBJMTLLoader();
	  	  	  	      loader4.addEventListener('load', function (event) {

	  	  	  	        var object = event.content;

	  	  	  	        object.rotation.x =Math.PI/2;
	  	  	  	       object.rotation.y =Math.PI/2;

	  	  	  	        object.position.set(27.5,21.5,1.4);
	  	  	  	object.scale.set(0.04,0.04,0.04);
	  	  	  	       // mesh = object;
	  	  	  	        mesh.add(object);

	  	  	  	      });


	  	  	  	      loader4.load(
	  	  	  	        'assets/models/childChair.obj', 
	  	  	  	        'assets/models/childChair.mtl', 
	  	  	  	        {side: THREE.DoubleSide}
	  	  	  	      );
	  	  	  	      
	  	  	  	      
	  	  	  	      
	  	  	  	var loader5 = new THREE.OBJMTLLoader();
	  	      loader5.addEventListener('load', function (event) {

	  	        var object = event.content;

	  	  	        object.rotation.x =Math.PI/2;
	  	  	       object.rotation.y =Math.PI/2;

	  	  	        object.position.set(27.5,21.5,1.6);
	  	  	object.scale.set(0.025,0.025,0.025);
	  	       // mesh = object;
	  	        mesh.add(object);

	  	      });


	  	      loader5.load(
	  	        'assets/models/holdingFemale02.obj', 
	  	        'assets/models/holdingFemale02.mtl', 
	  	        {side: THREE.DoubleSide}
	  	      );
	  	      
	  	  	var loader6 = new THREE.OBJMTLLoader();
	  	      loader6.addEventListener('load', function (event) {

	  	        var object = event.content;

	  	  	        object.rotation.x =3*Math.PI/4;
	  	  	       object.rotation.y =-Math.PI;

	  	  	        object.position.set(28.2,21,4.8);
	  	  	object.scale.set(0.4,0.4,0.4);
	  	       // mesh = object;
	  	        mesh.add(object);

	  	      });


	  	      loader6.load(
	  	        'assets/models/flashlight.obj', 
	  	        'assets/models/flashlight.mtl', 
	  	        {side: THREE.DoubleSide}
	  	        
	  	        
	  	      );
	  	      
	  	      
	  	  	var loader7 = new THREE.OBJMTLLoader();
	  	      loader7.addEventListener('load', function (event) {

	  	        var object = event.content;

	  	  	      object.rotation.x =Math.PI/2;
	  	  	       object.rotation.y =-Math.PI;

	  	  	        object.position.set(31.2,23.8,1.2);
	  	  	object.scale.set(0.4,0.05,0.4);
	  	       // mesh = object;
	  	        mesh.add(object);

	  	      });


	  	      loader7.load(
	  	        'assets/models/housePuzzle.obj', 
	  	        'assets/models/housePuzzle.mtl', 
	  	        {side: THREE.DoubleSide}
	  	        
	  	        
	  	      );
	  	      
	  	      
	  	      
	  	   /* var loader8 = new THREE.OBJMTLLoader();
	  	      loader8.addEventListener('load', function (event) {

	  	        var object1 = event.content;

	  	  	      object1.rotation.x =Math.PI/2;
	  	  	      // object.rotation.y =-Math.PI;

	  	  	        object1.position.set(-20,18,2);
	  	  	object1.scale.set(0.05,0.05,0.05);
	  	       // mesh = object;
	  	        //mesh.add(object1);
		  	     // mesh.object1=object1;
		  	      
		  	      var pick1 = picking(10,10,10,-20,18,2);
		  	      pick1.add(ojbect1);
		  	      mesh.add(pick1);
		  	      


	  	      });

mesh.pick1=pick1;
	  	      loader8.load(
	  	        'assets/models/bonecoDeNeve.obj', 
	  	        'assets/models/bonecoDeNeve.mtl', 
	  	        {side: THREE.DoubleSide}
	  	        
	  	        
	  	      );*/

	      return mesh;
	      
	      
}
	      