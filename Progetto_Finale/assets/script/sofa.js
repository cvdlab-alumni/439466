function carica () {
	var mesh= new THREE.Object3D();

var loader1 = new THREE.OBJMTLLoader();
      loader1.addEventListener('load', function (event) {

        var object = event.content;

        object.rotation.x =Math.PI/2;
        object.rotation.y =-Math.PI/2;
        object.position.set(58,8,0.6);
object.scale.set(0.01,0.02,0.01);
       // mesh = object;
        mesh.add(object);

      });


      loader1.load(
        'assets/models/clicClac.obj', 
        'assets/models/clicClac.mtl', 
        {side: THREE.DoubleSide}
      );
      return mesh;
      
      
}