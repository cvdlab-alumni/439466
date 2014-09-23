function creaVideo(){
  var video = new THREE.Object3D();

  //TELEVISIONE
  var televisione = creaTelevisione(1.5,1.2);
  televisione.position.set(39.8,1.4,2.8);
  //televisione.rotation.x = -Math.PI/18;
  video.add(televisione);
  
}

function creaTelevisione(width, height){

	  var $video1 = $('#videoTV');
	  var video1 = $video1[0];
	  
	  var texture1 = new THREE.Texture(video1);
	  texture1.minFilter = THREE.LinearFilter;
	  texture1.magFilter = THREE.LinearFilter;
	  texture1.format = THREE.RGBFormat;
	  texture1.generateMipmaps = true;

	  var cubo;
	  geometry1 = new THREE.PlaneGeometry (width, height);
	  material1 = new THREE.MeshBasicMaterial({map: texture1, die: THREE.DoubleSide});
	  cubo = new THREE.Mesh(geometry1, material1);

	video1.pause();
	      toIntersect.push(cube1);
	cubo.visible = false;
	cubo.interact = function () {
	  if (!this.visible) {
	    this.visible = true;
	    video1.play();
	  }
	  else {
	    this.visible = false;
	    video1.pause();
	  }
	}

	return cubo;
	}
