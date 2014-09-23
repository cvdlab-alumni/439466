	var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

	if ( havePointerLock ) {
		var element = document.body;
		var pointerlockchange = function ( event ) {

			if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
				PLocker = true;
				trackballControls.reset();
				dat.GUI.toggleHide();
				controls.enabled = true;
				camera.position.set(10,0,40);
				camera.up = new THREE.Vector3(0, 1, 0);
				controls.getObject().position.set(20, 10, -20);
				$("#pointer").fadeIn(1000);

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
			controls = new THREE.PointerLockControls(camera);
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
			
			controls.isOnObject( false );
			ray.ray.origin.copy( controls.getObject().position ); //copiamo nell'origine l'oggetto dei controlli
			ray.ray.origin.y -= 4; //diminuiamo la quota di 10(il test dei piedi)
			var intersections = ray.intersectObjects( objects );//interesezioni, prendiamo e intersechiamo il raggio
			if ( intersections.length > 0 ) { //se il test di intersezione ci ritorna qualche oggetto
				var distance = intersections[ 0 ].distance;
				if ( distance > 0 && distance < 4 ) { //se la distanza è tra 0 e 10 ci troviamo su un oggetto
					controls.isOnObject( true ); //se isOnobject è true smette di decrementare la quota(non sale piu perchè è appoggiato su un cubo)
				}
			}

			controls.update();
		}

	}