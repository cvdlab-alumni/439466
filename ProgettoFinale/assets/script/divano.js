

function caricaProva(){
	  var mesh;

 var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {


        var object = event.content;

        var wing2 = object.children[5].children[0];
        var wing1 = object.children[4].children[0];

        

       
        mesh = object;

        
      });


      loader.load(
        'assets/models/butterfly.obj', 
        'assets/models/butterfly.mtl', 
        {side: THREE.DoubleSide}
      );
      return mesh;
     
      
}
