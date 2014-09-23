function picking (lunghezza,larghezza,altezza,traslX,traslY,traslZ,color){
	var geometry1 = new THREE.BoxGeometry(lunghezza,larghezza,altezza);
	var material1 = new THREE.MeshLambertMaterial({color: color, transparent: true, opacity: 0});
	var picking = new THREE.Mesh(geometry1, material1);	
	picking.position.set(traslX,traslY,traslZ);
	return picking;

}