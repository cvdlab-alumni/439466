var scene = new THREE.Scene();
var switchCamera;
var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);
var ray = new THREE.Raycaster();
ray.ray.direction.set(0, 0, 1);
var PLocker =false;

var groundMirror;
var objects = [];

function CopiaNoTelecamera(){

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight, 0.1, 1000);
	camera.position.set(-100,60,-200);
	camera.up = new THREE.Vector3(0,1,0);
	camera.lookAt(new THREE.Vector3(0, 0,0));
	var trackballControls = new THREE.TrackballControls(camera);


	var skyBox = skyB();
	scene.add(skyBox);

	var elementi = creaElementi();
	scene.add(elementi);

	var loader = new THREE.OBJLoader();
	loader.load('assets/models/progetto1.obj', function(obj) {

		global_o = obj;

		//var projector = new THREE.Projector();
		var multiMaterial = [ new THREE.MeshLambertMaterial({
			color : 0xFFFFFF,
			side : THREE.DoubleSide,
			shading : THREE.FlatShading
		}), new THREE.MeshBasicMaterial({
			overdraw : true,
			color : 0xffffff,
			side : THREE.DoubleSide
		}) ];

		mesh = THREE.SceneUtils.createMultiMaterialObject(
				obj.children[0].geometry, multiMaterial);
		mesh.rotation.y=Math.PI;
		mesh.scale.set(3,3,3);
		mesh.rotation.x=Math.PI/2;
		scene.add(mesh);
	});

	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	groundMirror = new THREE.Mirror( webGLRenderer, camera, { clipBias: 0.003, textureWidth: WIDTH, textureHeight: HEIGHT, color: 0x777777 } );
	var planeGeo = new THREE.CircleGeometry(30,20);

	var mirrorMesh = new THREE.Mesh( planeGeo, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
	mirrorMesh.position.set(-75,0.2,-54);
	
	var pallaGeometry = new THREE.SphereGeometry(1.5, 20, 20);
	var sphereMaterial = new THREE.MeshPhongMaterial({
		color : 0xFFFFFF
	});
	var palla = new THREE.Mesh(pallaGeometry, sphereMaterial);
	palla.position.set(-75,0.2,-84);
	scene.add(palla);
	//var base = pavimenti(contorno,-75,0.1,-54,);
	
	scene.add( mirrorMesh );
	var verticalMirror = new THREE.Mirror( webGLRenderer, camera, { clipBias: 0.003, textureWidth: WIDTH, textureHeight: HEIGHT, color:0x889999 } );
	
	var verticalMirrorMesh = new THREE.Mesh( new THREE.PlaneGeometry( 140, 20 ), verticalMirror.material );
	verticalMirrorMesh.add( verticalMirror );
	verticalMirrorMesh.position.y = 35;
	verticalMirrorMesh.position.z = -45;
	
	//scene.add( verticalMirrorMesh );


	/*tween palla*/
	scene.add(elementi.palla);
	createAnimations(elementi.palla);

	var projector = new THREE.Projector();

	function onDocumentMouseDown(event) {
		event.preventDefault();

		if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
			var vector = new THREE.Vector3(0, 0, 0.5);
			projector.unprojectVector(vector, camera);
			var raycaster = new THREE.Raycaster(vector,controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
		}

		else {
			var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
			projector.unprojectVector(vector, camera);
			var raycaster = new THREE.Raycaster(camera.position,
					vector.sub(camera.position).normalize());

		}

	raycaster.intersectObjects(scene.children, true);

		var intersects1 = raycaster.intersectObjects([ elementi.porta ]);
		var intersects2 = raycaster.intersectObjects([ elementi.porta2 ]);
		var intersects3 = raycaster.intersectObjects([ elementi.porta3 ]);
		var intersects4 = raycaster.intersectObjects([ elementi.porta4 ]);
		var intersects5 = raycaster.intersectObjects([ elementi.porta5 ]);
		var intersects6 = raycaster.intersectObjects([ elementi.porta6 ]);
		var intersects7 = raycaster.intersectObjects([ elementi.porta7 ]);
		var intersects8 = raycaster.intersectObjects([ elementi.porta8 ]);
		var intersects9 = raycaster.intersectObjects([ elementi.porta9 ]);
		var intersects10 = raycaster.intersectObjects([ elementi.porta10 ]);
		var intersects11 = raycaster.intersectObjects([ elementi.porta11 ]);
		var intersects12 = raycaster.intersectObjects([ elementi.porta12 ]);
		var intersects13 = raycaster.intersectObjects([ elementi.porta13 ]);
		var intersects14 = raycaster.intersectObjects([ elementi.pick1 ]);
		var intersects15 = raycaster.intersectObjects([ elementi.pick2 ]);



		if (intersects1.length > 0) {
			if(elementi.perno.rotation.z===0){
				muoviPernoApri(elementi.perno);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno);
				document.getElementById('doorCl').play();

			}
		}

		if (intersects2.length > 0) {
			if(elementi.perno2.rotation.z===0){
				muoviPernoApri(elementi.perno2);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno2);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects3.length > 0) {
			if(elementi.perno3.rotation.z===0){
				muoviPernoApri(elementi.perno3);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno3);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects4.length > 0) {
			if(elementi.perno4.rotation.z===0){
				muoviPernoApri(elementi.perno4);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno4);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects5.length > 0) {
			if(elementi.perno5.rotation.z===0){
				muoviPernoApri(elementi.perno5);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno5);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects6.length > 0) {
			if(elementi.perno6.rotation.z===0){
				muoviPernoApri(elementi.perno6);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno6);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects7.length > 0) {
			if(elementi.perno7.rotation.z===0){
				muoviPernoApri(elementi.perno7);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno7);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects8.length > 0) {
			if(elementi.perno8.rotation.z===0){
				muoviPernoApri(elementi.perno8);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno8);
				document.getElementById('doorCl').play();

			}
		}

		if (intersects9.length > 0) {
			if(elementi.perno9.rotation.z===0){
				muoviPernoApri(elementi.perno9);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno9);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects10.length > 0) {
			if(elementi.perno10.rotation.z===0){
				muoviPernoApri(elementi.perno10);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno10);
				document.getElementById('doorCl').play();

			}
		}
		if (intersects11.length > 0) {
			if(elementi.perno11.position.y===24.5){
				scorri(elementi.perno11);
			}else{
				scorriindietro(elementi.perno11);

			}
		}
		if (intersects12.length > 0) {
			if(elementi.perno12.rotation.z===0){
				muoviPernoApri(elementi.perno12);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno12);
				document.getElementById('doorCl').play();

			}
		}

		if (intersects13.length > 0) {
			if(elementi.perno13.rotation.z===0){
				muoviPernoApri(elementi.perno13);
				document.getElementById('doorOp').play();
			}else{
				muoviPernoChiudi(elementi.perno13);
				document.getElementById('doorCl').play();

			}
		}
		
		
		if (intersects14.length > 0) {
animatePupazzo(elementi.pick1);
}

		if (intersects15.length > 0) {
			animateUomo(elementi.pick2);
			}




	}
	$('body').append(webGLRenderer.domElement);



	var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

	if ( havePointerLock ) {
		var element = document.body;
		var pointerlockchange = function ( event ) {

			if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
				PLocker = true;
				//trackballControls.reset();
				//dat.GUI.toggleHide();
				controls.enabled = true;
				$("#pointer").fadeIn(2000);

			} else {
				controls.enabled = false;
				location.reload();
			}
		};

		var pointerlockerror = function ( event ) {
			//instructions.style.display = '';
			location.reload();
		};

		// Hook pointer lock state change events
		document.addEventListener( 'pointerlockchange', pointerlockchange, false );
		document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
		document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
		document.addEventListener( 'pointerlockerror', pointerlockerror, false );
		document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
		document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
		document.addEventListener( 'mousedown', onDocumentMouseDown, false );


		switchCamera = function(){
			
			camera.up = new THREE.Vector3(0, 1, 0);
			camera.position.set(0,0,0);
			camera.lookAt(new THREE.Vector3(0,0,0));

			controls = new THREE.PointerLockControls(camera);
			//trackballControls.reset();
			controls.getObject().position.set(8, 8, 8);

			scene.add(controls.getObject());

			element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

			if ( /Firefox/i.test( navigator.userAgent ) ) {
				var fullscreenchange = function ( event ) {

					if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
						document.removeEventListener( 'fullscreenchange', fullscreenchange );
						document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
						element.requestPointerLock();
					}
				};

				document.addEventListener( 'fullscreenchange', fullscreenchange, false );
				document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );
				element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
				element.requestFullscreen();

			} else {
				element.requestPointerLock();
			}
		};
		
		
		function animate() {
			
			controls.isOnObject( true );
			ray.ray.origin.copy( controls.getObject().position ); //copiamo nell'origine l'oggetto dei controlli
			ray.ray.origin.y = 2; //diminuiamo la quota di 10(il test dei piedi)
			var intersections = ray.intersectObjects( objects );//interesezioni, prendiamo e intersechiamo il raggio
			if ( intersections.length > 0 ) { //se il test di intersezione ci ritorna qualche oggetto
				var distance = intersections[ 0 ].distance;
				if ( distance > 0 && distance < 10 ) { //se la distanza è tra 0 e 10 ci troviamo su un oggetto
					controls.isOnObject( true ); //se isOnobject è true smette di decrementare la quota(non sale piu perchè è appoggiato su un cubo)
				}
			}

			controls.update();
		}

	}
	 createControls(scene,elementi,switchCamera,skyBox);



	function onWindowResize() { //setta la dimensione del renderer e il rapporto di forma della camera
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}



	render();

	function render() {
		trackballControls.update();
		TWEEN.update();
		if (PLocker === true){
			animate();
			controls.update();
		}

		groundMirror.render();
		//verticalMirror.renderWithMirror( groundMirror );
		if(typeof video != 'undefined')
		{
			if (video.readyState === video.HAVE_ENOUGH_DATA) {
				if (texture) texture.needsUpdate = true;
			}			
		}
		requestAnimationFrame(render);
		webGLRenderer.render(scene, camera);
	}


}