  	  	function ingresso(){
  	  		var mesh = new THREE.Object3D();
  	  	

var loader1 = new THREE.OBJMTLLoader();
	  	  	      loader1.addEventListener('load', function (event) {

	  	  	        var object = event.content;

	  	  	        object.rotation.x =Math.PI/2;
	  	  	       object.rotation.y =-Math.PI/2;

	  	  	        object.position.set(60.6,27.5,4);
	  	  	        object.scale.set(0.06,0.06,0.06);
	  	  	       // mesh = object;
	  	  	        mesh.add(object);

	  	  	      });


	  	  	      loader1.load(
	  	  	        'assets/models/com_bath2_esponja.obj', 
	  	  	        'assets/models/com_bath2_esponja.mtl', 
	  	  	        {side: THREE.DoubleSide}
	  	  	      );
	  	  	      
	  	  	      

	  	  	  var loader2 = new THREE.OBJMTLLoader();
	  	  	  	  	  	      loader2.addEventListener('load', function (event) {

	  	  	  	  	  	        var palla = event.content;

	  	  	  	  	  	        palla.rotation.x =Math.PI/2;
	  	  	  	  	  	       palla.rotation.y =-Math.PI/2;

	  	  	  	  	  	        palla.position.set(54,27.5,1);
	  	  	  	  	  	        palla.scale.set(0.15,0.15,0.15);
	  	  	  	  	  	       // mesh = object;
	  	  	  	  	  	        mesh.add(palla);


	  	  	  	  	  	      });
	  	  	  
	  	  	  	  	  	      loader2.load(
	  	  	  	  	  	        'assets/models/luckyBamboo.obj', 
	  	  	  	  	  	        'assets/models/luckyBamboo.mtl', 
	  	  	  	  	  	        {side: THREE.DoubleSide}
	  	  	  	  	  	      );
	  	  	  	  	  	      
	  	  	  	  	  	      
	  	  	  	  	  var loader3 = new THREE.OBJMTLLoader();
	  	  	  	  	      loader3.addEventListener('load', function (event) {

	  	  	  	  	        var object = event.content;

	  	  	  	  	        object.rotation.x =Math.PI/2;
	  	  	  	  	       object.rotation.y =Math.PI/2;

	  	  	  	  	        object.position.set(3,17,0.4);
	  	  	  	  	        object.scale.set(0.02,0.02,0.02);
	  	  	  	  	       // mesh = object;
	  	  	  	  	        mesh.add(object);
	  	  	  	  	        
	  	  	  	  
	  	            

	  	  	  	  	      });


	  	  	  	  	      loader3.load(
	  	  	  	  	        'assets/models/male02.obj', 
	  	  	  	  	        'assets/models/male02.mtl', 
	  	  	  	  	        {side: THREE.DoubleSide}
	  	  	  	  	      );
	  	  	  	  	      
	  	  	  	  	      
	  	  	  	 	  var loader4 = new THREE.OBJMTLLoader();
	  	  	  	  	      loader4.addEventListener('load', function (event) {

	  	  	  	  	        var palla = event.content;

	  	  	  	  	        palla.rotation.x =Math.PI/2;
	  	  	  	  	       palla.rotation.y =-Math.PI/2;

	  	  	  	  	        palla.position.set(54,34.5,1);
	  	  	  	  	        palla.scale.set(0.15,0.15,0.15);
	  	  	  	  	       // mesh = object;
	  	  	  	  	        mesh.add(palla);


	  	  	  	  	      });
	  	  
	  	  	  	  	      loader4.load(
	  	  	  	  	        'assets/models/luckyBamboo.obj', 
	  	  	  	  	        'assets/models/luckyBamboo.mtl', 
	  	  	  	  	        {side: THREE.DoubleSide}
	  	  	  	  	      );
	  	  	  	  	      
	  	  	  	  	      
	  	  	  	    var loader5 = new THREE.OBJMTLLoader();
	  	  	  	      loader5.addEventListener('load', function (event) {

	  	  	  	        var palla = event.content;

	  	  	  	        palla.rotation.x =Math.PI/2;
	  	  	  	       palla.rotation.y =-Math.PI/2;

	  	  	  	        palla.position.set(54,33.5,1);
	  	  	  	        palla.scale.set(0.03,0.03,0.03);
	  	  	  	       // mesh = object;
	  	  	  	        mesh.add(palla);


	  	  	  	      });
	  
	  	  	  	      loader5.load(
	  	  	  	        'assets/models/kleed_grieks.obj', 
	  	  	  	        'assets/models/kleed_grieks.mtl', 
	  	  	  	        {side: THREE.DoubleSide}
	  	  	  	      );
	  	  	  	      
	  		  	    var loader6 = new THREE.OBJMTLLoader();
	  	  	  	      loader6.addEventListener('load', function (event) {

	  	  	  	        var palla = event.content;

	  	  	  	        palla.rotation.x =Math.PI/2;
	  	  	  	      // palla.rotation.y =Math.PI;

	  	  	  	        palla.position.set(48,38.5,1);
	  	  	  	        palla.scale.set(0.025,0.025,0.025);
	  	  	  	       // mesh = object;
	  	  	  	        mesh.add(palla);


	  	  	  	      });
	  
	  	  	  	      loader6.load(
	  	  	  	        'assets/models/cabinet2.obj', 
	  	  	  	        'assets/models/cabinet2.mtl', 
	  	  	  	        {side: THREE.DoubleSide}
	  	  	  	      );
	  	  	  	  	   
	  	  	  	  	      
	  	  	  	  	      
	  	  	      return mesh;
	  	  	      }
	  	  	      