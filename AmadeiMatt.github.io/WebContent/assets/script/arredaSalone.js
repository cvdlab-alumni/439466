	function caricaSalone(){
		var mesh= new THREE.Object3D();
	

var loader1 = new THREE.OBJMTLLoader();
      loader1.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(57,10.8,1.6);
object.scale.set(0.03,0.03,0.03);
       // mesh = object;
        mesh.add(object);

      });


      loader1.load(
        'assets/models/pianoAQueue.obj', 
        'assets/models/pianoAQueue.mtl', 
        {side: THREE.DoubleSide}
      );
      
      
      
      var loader2 = new THREE.OBJMTLLoader();
      loader2.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(59,1.8,0.7);
object.scale.set(0.04,0.04,0.04);
       // mesh = object;8
        mesh.add(object);

      });


      loader2.load(
        'assets/models/table_lamp.obj', 
        'assets/models/table_lamp.mtl', 
        {side: THREE.DoubleSide}
      );
      
      
      var loader3 = new THREE.OBJMTLLoader();
      loader3.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(23,1.8,0.7);
object.scale.set(0.05,0.05,0.05);
       // mesh = object;
        mesh.add(object);
       

      });
      loader3.load(
              'assets/models/table_lamp.obj', 
              'assets/models/table_lamp.mtl', 
              {side: THREE.DoubleSide}
      );

      
      var loader4 = new THREE.OBJMTLLoader();
      loader4.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(37,12.2,0.7);
object.scale.set(0.05,0.05,0.05);
       // mesh = object;
        mesh.add(object);

      });

      loader4.load(
        'assets/models/table_lamp.obj', 
        'assets/models/table_lamp.mtl', 
        {side: THREE.DoubleSide}
      );
      
      var loader5 = new THREE.OBJMTLLoader();
      loader5.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =Math.PI;
        object.position.set(40,1.2,0.3);
object.scale.set(0.025,0.025,0.027);
       // mesh = object;
        mesh.add(object);

      });

      loader5.load(
        'assets/models/dining_room.obj', 
        'assets/models/dining_room.mtl', 
        {side: THREE.DoubleSide}
      );
      
      
      var loader6 = new THREE.OBJMTLLoader();
      loader6.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =Math.PI;
        object.position.set(39.8,1.4,2.8);
object.scale.set(0.04,0.04,0.04);
       // mesh = object;
        mesh.add(object);

      });

      loader6.load(
        'assets/models/led_tv.obj', 
        'assets/models/led_tv.mtl', 
        {side: THREE.DoubleSide}
      );
      var loader7 = new THREE.OBJMTLLoader();
      loader7.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
       // object.rotation.y =Math.PI;
        object.position.set(39.8,8.4,1.4);
object.scale.set(0.4,0.4,0.4);
       // mesh = object;
        mesh.add(object);

      });

      loader7.load(
        'assets/models/mid-century-sofa.obj', 
        'assets/models/mid-century-sofa.mtl', 
        {side: THREE.DoubleSide}
      );
      var loader8 = new THREE.OBJMTLLoader();
      loader8.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
       object.rotation.y =Math.PI/2;
        object.position.set(35,4.9,1.4);
object.scale.set(0.35,0.35,0.35);
       // mesh = object;
        mesh.add(object);

      });

      loader8.load(
        'assets/models/mid-century-sofa.obj', 
        'assets/models/mid-century-sofa.mtl', 
        {side: THREE.DoubleSide}
      );
      
      var loader9 = new THREE.OBJMTLLoader();
      loader9.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
       object.rotation.y =Math.PI/2;
        object.position.set(28,4.2,0.6);
object.scale.set(0.025,0.025,0.025);
       // mesh = object;
        mesh.add(object);

      });

      loader9.load(
        'assets/models/wooden_table_office.obj', 
        'assets/models/wooden_table_office.mtl', 
        {side: THREE.DoubleSide}
      );
      return mesh;
      }