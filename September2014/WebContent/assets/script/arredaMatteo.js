function arredaMatt() {
	
	
	
	var mesh= new THREE.Object3D();

	var loader1 = new THREE.OBJMTLLoader();
	      loader1.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(5,8.2,1);
	object.scale.set(0.02,0.02,0.02);
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
	        object.rotation.y =-Math.PI/2;

	        object.position.set(11,5.2,1);
	object.scale.set(0.03,0.03,0.03);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader2.load(
	        'assets/models/bureau3.obj', 
	        'assets/models/bureau3.mtl', 

	        {side: THREE.DoubleSide}
	      );
	      
	      
	      var loader3 = new THREE.OBJMTLLoader();
	      loader3.addEventListener('load', function (event) {

	        var monitor = event.content;

	        monitor.rotation.x =Math.PI/2;
	        monitor.rotation.y =-Math.PI/2;

	        monitor.position.set(9,5.2,3.2);
	monitor.scale.set(2,2,2);
	       // mesh = object;


	mesh.add(monitor);

	      });


	      loader3.load(
	        'assets/models/monitorLCD.obj', 
	        'assets/models/monitorLCD.mtl', 


	        {side: THREE.DoubleSide}
	      );
	      
	      var loader4 = new THREE.OBJMTLLoader();
	      loader4.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(1.5,4.2,0.3);
	object.scale.set(0.02,0.02,0.02);
	       // mesh = object;
	        mesh.add(object);
	     


	      });


	      loader4.load(
	        'assets/models/mobileArancio.obj', 
	        'assets/models/mobileArancio.mtl', 


	        {side: THREE.DoubleSide}
	      );
	      var loader5 = new THREE.OBJMTLLoader();
	      loader5.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(-20,16.5,0.6);
	object.scale.set(0.04,0.04,0.04);
	        mesh.add(object);
	     


	      });


	      loader5.load(
	        'assets/models/comodinoArancio.obj', 
	        'assets/models/comodinoArancio.mtl', 


	        {side: THREE.DoubleSide}
	      );
	      
	      
	      
	   /*   var loader6 = new THREE.OBJMTLLoader();
	      loader6.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(2.5,8.2,1.4);
	object.scale.set(0.02,0.02,0.02);
	       // mesh = object;
	        mesh.add(object);

	      });


	      loader6.load(
	        'assets/models/lyingDownMale01.obj', 
	        'assets/models/lyingDownMale01.mtl', 
	        {side: THREE.DoubleSide}
	      ); */

	     /* var loader7 = new THREE.OBJMTLLoader();
	      loader7.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(2.7,8.2,1.6);
	object.scale.set(0.02,0.02,0.02);
	       // mesh = object;

	
	        mesh.add(object);

	      });


	      loader7.load(
	        'assets/models/lyingDownMale02.obj', 
	        'assets/models/lyingDownMale02.mtl', 
	        {side: THREE.DoubleSide}
	      );
*/
	      var loader8= new THREE.OBJMTLLoader();
	      loader8.addEventListener('load', function (event) {

	        var object = event.content;

	        object.rotation.x =Math.PI/2;
	        object.rotation.y =Math.PI/2;

	        object.position.set(11,12.2,0.6);
	object.scale.set(0.04,0.08,0.04);
	       // mesh = object;

	

	        mesh.add(object);

	      });


	      loader8.load(
	        'assets/models/table_lamp.obj', 
	        'assets/models/table_lamp.mtl', 
	        {side: THREE.DoubleSide}
	      );

	      
	      
	      
	      return mesh;
}