function loadProj (){

	var loading = new THREE.Object3D();


	var loader = new THREE.OBJLoader();
	loader.load('assets/models/progetto1.obj', function(obj) {

		global_o = obj;

		//var projector = new THREE.Projector();
		//document.addEventListener('mousedown', onDocumentMouseDown,
		//	false);
		var multiMaterial = [ new THREE.MeshLambertMaterial({
			color : 0xFFFFFF,
			side : THREE.DoubleSide,
			shading : THREE.FlatShading
		}), new THREE.MeshBasicMaterial({
			overdraw : true,
			color : 0xffffff,
			side : THREE.DoubleSide
		}) ];
var mesh;
		mesh = THREE.SceneUtils.createMultiMaterialObject(
		obj.children[0].geometry, multiMaterial);
		mesh.rotation.y=Math.PI;
		mesh.scale.set(3,3,3);
		mesh.rotation.x=Math.PI/2;
		loading.add(mesh);
		//scene.add(mesh);
	});

	return loading;

}