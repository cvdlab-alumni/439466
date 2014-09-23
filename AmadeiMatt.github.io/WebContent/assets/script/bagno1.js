	function creaBagno1(){

var mesh= new THREE.Object3D();

var loader1 = new THREE.OBJMTLLoader();
      loader1.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =Math.PI;
        object.position.set(17,35.2,1);
object.scale.set(0.02,0.02,0.02);
       // mesh = object;
        mesh.add(object);

      });


      loader1.load(
        'assets/models/jacuzzi.obj', 
        'assets/models/jacuzzi.mtl', 
        {side: THREE.DoubleSide}
      );
      
      
      
      var loader2 = new THREE.OBJMTLLoader();
      loader2.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(18.8,28.2,0.5);
object.scale.set(0.025,0.025,0.025);
       // mesh = object;
        mesh.add(object);

      });


      loader2.load(
        'assets/models/water.obj', 
        'assets/models/water.mtl', 
        {side: THREE.DoubleSide}
      );
      var loader3 = new THREE.OBJMTLLoader();
      loader3.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
		object.position.set( 14, 38.5, 5);

object.scale.set(0.4,0.4,0.4);
       // mesh = object;
        mesh.add(object);

      });


      loader3.load(
        'assets/models/wall-spotlight.obj', 
        'assets/models/wall-spotlight.mtl', 
        {side: THREE.DoubleSide}
      );
      return mesh;
	}