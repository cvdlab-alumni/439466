function caricaBagno () {
	var mesh= new THREE.Object3D();

var loader1 = new THREE.OBJMTLLoader();
      loader1.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =Math.PI;
        object.position.set(34,30.2,0.6);
object.scale.set(0.04,0.04,0.04);
       // mesh = object;
        mesh.add(object);

      });


      loader1.load(
        'assets/models/bathroomFurniture.obj', 
        'assets/models/bathroomFurniture.mtl', 
        {side: THREE.DoubleSide}
      );
      
      var loader2 = new THREE.OBJMTLLoader();
      loader2.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(39,31,0.6);
object.scale.set(0.04,0.04,0.04);
mesh.add(object);
      });


      loader2.load(
        'assets/models/bidet.obj', 
        'assets/models/bidet.mtl', 
        {side: THREE.DoubleSide}
      );

      
      var loader3 = new THREE.OBJMTLLoader();
      loader3.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(39,37,0.6);
object.scale.set(0.04,0.04,0.04);
mesh.add(object);

      });


      loader3.load(
        'assets/models/water.obj', 
        'assets/models/water.mtl', 
        {side: THREE.DoubleSide}
      );
      
      
      var loader4 = new THREE.OBJMTLLoader();
      loader4.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =Math.PI;
        object.position.set(31,30.5,4.5);
object.scale.set(0.06,0.06,0.22);
mesh.add(object);

      });


      loader4.load(
        'assets/models/mirror.obj', 
        'assets/models/mirror.mtl', 
        {side: THREE.DoubleSide}
      );

      

      var loader5 = new THREE.OBJMTLLoader();
      loader5.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(27,44.5,1.2);
object.scale.set(0.02,0.02,0.02);
mesh.add(object);

      });


      loader5.load(
        'assets/models/doccia.obj', 
        'assets/models/doccia.mtl', 
        {side: THREE.DoubleSide}
      );


      var loader6 = new THREE.OBJMTLLoader();
      loader6.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(32,37.6,1.2);
object.scale.set(0.5,0.5,0.5);
mesh.add(object);

      });


      loader6.load(
        'assets/models/vase1.obj', 
        'assets/models/vase1.mtl', 
        {side: THREE.DoubleSide}
      );

      
      return mesh;
      
      
}