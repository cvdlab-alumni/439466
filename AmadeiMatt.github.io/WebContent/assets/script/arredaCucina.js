function arredaCuci() {
	
	
	
	var mesh= new THREE.Object3D();

	var loader1 = new THREE.OBJMTLLoader();
	      loader1.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(18,8.2,4);
	object.scale.set(0.6,0.6,0.6);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader1.load(
	        'assets/models/frigorifero_Scene.obj', 
	        'assets/models/frigorifero_Scene.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader2 = new THREE.OBJMTLLoader();
	      loader2.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(14,7.6,0.6);
	object.scale.set(0.4,0.4,0.4);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader2.load(
	        'assets/models/dishwasher.obj', 
	        'assets/models/dishwasher.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader3 = new THREE.OBJMTLLoader();
	      loader3.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(18,7.6,0.6);
	object.scale.set(0.02,0.02,0.02);
	
	  
	       // mesh = object;
	        mesh.add(object);

	      });
	    


	      loader3.load(
	        'assets/models/tableCuisine2.obj', 
	        'assets/models/tableCuisine2.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader4 = new THREE.OBJMTLLoader();
	      loader4.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =-Math.PI/2;

	        object.position.set(20,1.6,1.6);
	object.scale.set(0.4,0.4,0.4);
	       // mesh = object;
	
	/*var pointColor = "#ffffee";
  	var spotLight2 = new THREE.SpotLight(pointColor);
	 var target = new THREE.Object3D();
     target.position = new THREE.Vector3(16,1.6,1);
	spotLight2.target=target;
	spotLight2.intensity = 8;
	mesh.add(spotLight2);
	spotLight2.position.set(20,12.6,3);

	*/
	
    mesh.add(object);


	      });


	      loader4.load(
	        'assets/models/kitchenSinkWithMarble.obj', 
	        'assets/models/kitchenSinkWithMarble.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader5 = new THREE.OBJMTLLoader();
	      loader5.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =-Math.PI/2;

	        object.position.set(20,3,1.6);
	object.scale.set(1.8,1.8,1.8);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader5.load(
	        'assets/models/pantry.obj', 
	        'assets/models/pantry.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader6 = new THREE.OBJMTLLoader();
	      loader6.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =-Math.PI/2;
	        object.position.set(18,7.6,1.8);


	object.scale.set(0.04,0.04,0.04);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader6.load(
	        'assets/models/pizza.obj', 
	        'assets/models/pizza.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader7= new THREE.OBJMTLLoader();
	      loader7.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI;
	        object.position.set(18,3,0.4);


	object.scale.set(0.02,0.02,0.02);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader7.load(
	        'assets/models/chairWithCushion.obj', 
	        'assets/models/chairWithCushion.mtl', 
	        {side: THREE.DoubleSide}
	      );
	      return mesh;
}
