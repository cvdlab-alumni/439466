function arredaCamera3() {
	
	
	
	var mesh= new THREE.Object3D();

	var loader1 = new THREE.OBJMTLLoader();
	      loader1.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	       // object.rotation.y =Math.PI;

	        object.position.set(4,29,1.4);
	object.scale.set(0.02,0.02,0.02);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader1.load(
	        'assets/models/lit.obj', 
	        'assets/models/lit.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	  	var loader2 = new THREE.OBJMTLLoader();
	      loader2.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	       // object.rotation.y =Math.PI;

	        object.position.set(0,49,1);
	object.scale.set(0.9,0.9,0.9);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader2.load(
	        'assets/models/singleChair.obj', 
	        'assets/models/singleChair.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	   	var loader3 = new THREE.OBJMTLLoader();
	      loader3.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	       // object.rotation.y =Math.PI;

	        object.position.set(4,30.9,1.4);
	object.scale.set(0.03,0.03,0.03);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader3.load(
	        'assets/models/lyingDownFemale01.obj', 
	        'assets/models/lyingDownFemale01.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      return mesh;
}