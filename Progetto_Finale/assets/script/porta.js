

function porta(x,y,z,perno_x,perno_y,perno_z,texture){
	var portaIn = createMesh(new THREE.BoxGeometry(x, y,z), texture);

	var perno = new THREE.Object3D();
	perno.position.set(perno_x,perno_y,perno_z);
	portaIn.position.set(x/2,y/2,z/2);
      perno.add(portaIn);
     var elementi=[];
      elementi.push(perno);
      elementi.push(portaIn);
return elementi;
	
}


      
      
      
      function createMesh(geom, texture) {
           texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + texture);
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;// dentro l'oggetto texture su s e su t(y) specifichiamo che dobbiamo andare a ripetere la nostra textyre

          geom.computeVertexNormals();
          var mat = new THREE.MeshPhongMaterial();
          mat.map = texture;


          // create a multimaterial
          var mesh = new THREE.Mesh(geom, mat);

          return mesh;
        }
