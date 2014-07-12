	function telecamera() {
		var stats = initStats();
		var scene = new THREE.Scene();

		// create a camera, which defines where we're looking at.
		var camera = new THREE.PerspectiveCamera(45, window.innerWidth
				/ window.innerHeight, 0.1, 1000);
		//var camera2 =new THREE.PerspectiveCamera(45, window.innerWidth
		/// window.innerHeight, 0.1, 1000);
		//camera.position.set(30, 60, 200);
		//camera.lookAt(new THREE.Vector3(0, 1, 0));
		var trackballControls = new THREE.TrackballControls(camera);
		var objects = [];

		var ray;

		var blocker = document.getElementById('blocker');
		var instructions = document.getElementById('instructions');


		// http://www.html5rocks.com/en/tutorials/pointerlock/intro/
		var havePointerLock = 'pointerLockElement' in document
				|| 'mozPointerLockElement' in document
				|| 'webkitPointerLockElement' in document;
		if (havePointerLock) {
			var element = document.body;
			var pointerlockchange = function(event) {

				if (document.pointerLockElement === element
						|| document.mozPointerLockElement === element
						|| document.webkitPointerLockElement === element) {
					controls.enabled = true;
					blocker.style.display = 'none';
				} else {
					controls.enabled = false;
					blocker.style.display = '-webkit-box';
					blocker.style.display = '-moz-box';
					blocker.style.display = 'box';
					instructions.style.display = '';
				}
			}

			var pointerlockerror = function(event) {
				instructions.style.display = '';
			}

			// Hook pointer lock state change events
			document.addEventListener('pointerlockchange', pointerlockchange,
					false);
			document.addEventListener('mozpointerlockchange',
					pointerlockchange, false);
			document.addEventListener('webkitpointerlockchange',
					pointerlockchange, false);

			document.addEventListener('pointerlockerror', pointerlockerror,
					false);
			document.addEventListener('mozpointerlockerror', pointerlockerror,
					false);
			document.addEventListener('webkitpointerlockerror',
					pointerlockerror, false);

			instructions.addEventListener('click', function(event) {
				instructions.style.display = 'none';

				// Ask the browser to lock the pointer

				element.requestPointerLock = element.requestPointerLock
						|| element.mozRequestPointerLock
						|| element.webkitRequestPointerLock;

				if (/Firefox/i.test(navigator.userAgent)) {
					var fullscreenchange = function(event) {

						if (document.fullscreenElement === element
								|| document.mozFullscreenElement === element
								|| document.mozFullScreenElement === element) {
							document.removeEventListener('fullscreenchange',
									fullscreenchange);
							document.removeEventListener('mozfullscreenchange',
									fullscreenchange);
							element.requestPointerLock();
						}
					}

					document.addEventListener('fullscreenchange',
							fullscreenchange, false);
					document.addEventListener('mozfullscreenchange',
							fullscreenchange, false);

					element.requestFullscreen = element.requestFullscreen
							|| element.mozRequestFullscreen
							|| element.mozRequestFullScreen
							|| element.webkitRequestFullscreen;
					element.requestFullscreen();

				} else {

					element.requestPointerLock();

				}
			}, false);
		} else {
			instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
		}

		init();
		animate();

		function init() {
			camera = new THREE.PerspectiveCamera(75, window.innerWidth
					/ window.innerHeight, 0.1, 1000);
			camera.up = new THREE.Vector3(0, 0, 1);

			scene = new THREE.Scene();
			scene.fog = new THREE.Fog(0xffffff, 0, 750);

			var light = new THREE.DirectionalLight(0xffffff, 1.5);
			light.position.set(1, 1, 1);
			scene.add(light);

			var light = new THREE.DirectionalLight(0xffffff, 0.75);
			light.position.set(-1, -0.5, -1);
			scene.add(light);

			controls = new THREE.PointerLockControls(camera); //dentro pointerlockCOntrols ci stanno i comandi
			scene.add(controls.getObject());

			ray = new THREE.Raycaster();
			ray.ray.direction.set(0, -1, 0);// un raggio che punta in basso per vedere se c'p un cubetto

			var elem2 = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
			perno2 = elem2[0];
			porta2 = elem2[1];
			perno2.position.set(15.6, 0, 0);
			var elem3 = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
			perno3 = elem3[0];
			porta3 = elem3[1];
			perno3.position.set(32.8, 0, 0);
			var elem4 = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
			perno4 = elem4[0];
			porta4 = elem4[1];
			perno4.position.set(46.6, 0, 0);
			var elem5 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
			perno5 = elem5[0];
			porta5 = elem5[1];
			perno5.position.set(5.3, 14.3, 0);
			var elem6 = porta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
			perno6 = elem6[0];
			porta6 = elem6[1];
			perno6.position.set(15.6, 14.3, 0);
			var elem7 = porta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
			perno7 = elem7[0];
			porta7 = elem7[1];
			perno7.position.set(15.6, 20.3, 0);
			var elem8 = porta(2, 0.3, 4, 5.3, 0.2, 0, "porta.jpg");
			perno8 = elem8[0];
			porta8 = elem8[1];
			perno8.position.set(5.3, 20.3, 0);
			var elem9 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
			perno9 = elem9[0];
			porta9 = elem9[1];
			perno9.position.set(30.7, 14.3, 0);
			var elem10 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
			perno10 = elem10[0];
			porta10 = elem10[1];
			perno10.position.set(46.7, 14.3, 0);
			var elem11 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
			perno11 = elem11[0];
			porta11 = elem11[1];
			perno11.position.set(26.7, 24.5, 0.5);
			perno11.rotation.z = Math.PI / 2;
			var elem12 = porta(2, 0.3, 3.9, 5.3, 0.2, 0, "porta.jpg");
			perno12 = elem12[0];
			porta12 = elem12[1];
			perno12.position.set(26.7, 33, 0.5);
			perno12.rotation.z = Math.PI / 2;
			var elem13 = porta(2, 0.3, 3.7, 5.3, 0.2, 0, "porta.jpg");
			perno13 = elem13[0];
			porta13 = elem13[1];
			perno13.position.set(61, 29.67, 0.5);
			perno13.rotation.z = Math.PI / 2;
			var elem = porta(2, 0.3, 4, 5.3, 0.2, 0, "PortaFinestra.jpg");
			perno = elem[0];
			porta = elem[1];
			scene.add(perno13);
			scene.add(perno11);
			scene.add(perno12);
			scene.add(perno10);
			scene.add(perno8);
			scene.add(perno6);
			scene.add(perno7);
			scene.add(perno5);
			scene.add(perno3);
			scene.add(perno);
			scene.add(perno4);
			scene.add(perno9);
			scene.add(perno2);

			var pareti = creaMuri();
			scene.add(pareti);
			// position and point the camera to the center of the scene
			camera.position.set(-30, 10, 40);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
			// add the output of the renderer to the html element
			//$('body').append(renderer.domElement);
			var step = 0;
			var mesh;

			var loader = new THREE.OBJLoader();
			loader.load('assets/models/progetto1.obj', function(obj) {

				global_o = obj;

				var projector = new THREE.Projector();
				document.addEventListener('mousedown', onDocumentMouseDown,
						false);
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

				scene.add(mesh);
			});
			//var caricamento = carica();
			//scene.add(caricamento);
			var caricaB = caricaBagno();
			scene.add(caricaB);
			var Matt = arredaMatt();
			scene.add(Matt);
			var cuc = arredaCuci();
			scene.add(cuc);
			var camera2 = arredaCamera2();
			scene.add(camera2);
			var camera3 = arredaCamera3();
			scene.add(camera3);
			var bagno1 = creaBagno1();
			scene.add(bagno1);
			var salone = caricaSalone();
			scene.add(salone);
			var ing = ingresso();
			scene.add(ing);
			var luci = creaLuci();
			scene.add(luci);
			var fin = addWind();
			scene.add(fin);
			var terr = creaTerrazzo(61, 7, 0.3, "brick-wall.jpg");
			terr.position.set(30.5, -3.5, 0);
			scene.add(terr);

			var ringh = ringhiera();
			ringh.position.set(0.8, -4.5, 0.3);
			ringh.rotation.x = Math.PI / 2;
			scene.add(ringh);
			var ringh2 = ringhiera();
			ringh2.position.set(20.8, -4.5, 0.3);
			ringh2.rotation.x = Math.PI / 2;
			scene.add(ringh2);
			var ringh3 = ringhiera();
			ringh3.position.set(40.8, -4.5, 0.3);
			ringh3.rotation.x = Math.PI / 2;
			scene.add(ringh3);

			var latoC = latoCorto();
			latoC.rotation.x = Math.PI / 2;
			latoC.rotation.y = Math.PI / 2;
			latoC.position.set(-2, -5.8, 0.3);
			scene.add(latoC);
			var latoC1 = latoCorto();
			latoC1.rotation.x = Math.PI / 2;
			latoC1.rotation.y = Math.PI / 2;
			latoC1.position.set(58, -5.8, 0.3);
			scene.add(latoC1);

			var ogg = oggetti();
			scene.add(ogg);

			var spotLight = new THREE.SpotLight(0xffffff, 6, 8, 4, 10);
			spotLight.position.set(18, 14, 2);
			var spotTarget = new THREE.Object3D();
			spotTarget.position.set(18, 9, 1);
			spotLight.target = spotTarget;
			scene.add(spotLight);
			scene.add(new THREE.PointLightHelper(spotLight, 1));

			var spotLight2 = new THREE.SpotLight(0xffffff, 6, 20, 20, 10);
			spotLight2.position.set(14, 36, 5);
			var spotTarget2 = new THREE.Object3D();
			spotTarget2.position.set(14, 45, 5);
			spotLight2.target = spotTarget;
			scene.add(spotLight2);
			scene.add(new THREE.PointLightHelper(spotLight2, 1));

			var spotLight3 = new THREE.SpotLight(0xffffff, 6, 20, 10, 10);
			spotLight3.position.set(2, 36, 2);
			var spotTarget3 = new THREE.Object3D();
			spotTarget3.position.set(2, 28, 2);
			spotLight3.target = spotTarget3;
			scene.add(spotLight3);
			scene.add(new THREE.PointLightHelper(spotLight3, 1));

			var spotLight4 = new THREE.SpotLight(0xffffff, 15, 9, 30, 10);
			spotLight4.position.set(30, 38, 3);
			var spotTarget4 = new THREE.Object3D();
			spotTarget4.position.set(30, 37, 3);
			spotLight4.target = spotTarget4;
			scene.add(spotLight4);
			scene.add(new THREE.PointLightHelper(spotLight4, 1));

			var spotLight5 = new THREE.SpotLight(0xffffff, 15, 7, 2, 10);
			spotLight5.position.set(1, 11, 2.5);
			var spotTarget5 = new THREE.Object3D();
			spotTarget5.position.set(3, 9, 1);
			spotLight5.target = spotTarget5;
			scene.add(spotLight5);
			scene.add(new THREE.PointLightHelper(spotLight5, 1));

			var spotLight6 = new THREE.SpotLight(0xffffff, 8, 6, 10, 10);
			spotLight6.position.set(27.5, 21.5, 4);
			var spotTarget6 = new THREE.Object3D();
			spotTarget6.position.set(32.5, 26, 0.5);
			spotLight6.target = spotTarget6;
			scene.add(spotLight6);
			scene.add(new THREE.PointLightHelper(spotLight6, 1));

			var spotLight7 = new THREE.SpotLight(0xffffff, 30, 20, 30, 20);
			spotLight7.position.set(60, 27.5, 4);
			var spotTarget7 = new THREE.Object3D();
			spotTarget7.position.set(55, 27.5, 4);
			spotLight7.target = spotTarget7;
			scene.add(spotLight7);

			var spotLight8 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
			spotLight8.position.set(23, 1.8, 4);
			var spotTarget8 = new THREE.Object3D();
			spotTarget8.position.set(24, 1.8, 3);
			spotLight8.target = spotTarget8;
			scene.add(spotLight8);

			var spotLight9 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
			spotLight9.position.set(59, 1.8, 4);
			var spotTarget9 = new THREE.Object3D();
			spotTarget9.position.set(58.6, 1.8, 3);
			spotLight9.target = spotTarget9;
			scene.add(spotLight9);

			var spotLight11 = new THREE.SpotLight(0xffffff, 5, 40, 200, 10);
			spotLight11.position.set(37, 12.2, 4);
			var spotTarget11 = new THREE.Object3D();
			spotTarget11.position.set(37, 11.7, 3.5);
			spotLight11.target = spotTarget11;
			scene.add(spotLight11);

			var spotLight10 = new THREE.SpotLight(0xffffff, 30, 20, 30, 20);
			spotLight10.position.set(60, 34.5, 4);
			var spotTarget10 = new THREE.Object3D();
			spotTarget10.position.set(55, 34.5, 4);
			spotLight10.target = spotTarget10;
			scene.add(spotLight10);

			var pallaGeometry = new THREE.SphereGeometry(0.5, 20, 20);
			var sphereMaterial = new THREE.MeshPhongMaterial({
				color : 0xFFFF00
			});
			var palla = new THREE.Mesh(pallaGeometry, sphereMaterial);

			// position the sphere
			palla.position.set(4, 17, 1);

			// add the sphere to the scene
			scene.add(palla);
			var pallaTween = new TWEEN.Tween(palla.position).delay(1000).to({
				x : 60,
				y : 17,
				z : 1
			}, 1500).easing(TWEEN.Easing.Linear.None).start();
			var pallaTween2 = new TWEEN.Tween(palla.position).to({
				x : 4,
				y : 17,
				z : 1
			}, 3900).easing(TWEEN.Easing.Linear.None)
			pallaTween.chain(pallaTween2)
			pallaTween2.chain(pallaTween)
			pallaTween.chain(pallaTween2)

			var spotLight12 = new THREE.SpotLight(0xffffff, 15, 7, 20, 10);
			spotLight12.position.set(0, 17, 4);

			var spotTarget12 = new THREE.Object3D();
			spotTarget12.position.set(2, 17, 0);
			spotLight12.target = spotTarget12;
			scene.add(spotLight12);
			//scene.add(luci)

			var spotAvanti = new TWEEN.Tween(spotLight12.position).delay(1000)
					.to({
						x : 60,
						y : 17,
						z : 1
					}, 1500)

					.easing(TWEEN.Easing.Linear.None)

					.start();
			var spotIndietro = new TWEEN.Tween(spotLight12.position).to({
				x : 4,
				y : 17,
				z : 1
			}, 3900).easing(TWEEN.Easing.Linear.None)

			spotAvanti.chain(spotIndietro)
			spotIndietro.chain(spotAvanti)
			spotAvanti.chain(spotIndietro)
			renderer = new THREE.WebGLRenderer();
			renderer.setClearColor(0xffffff);
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			window.addEventListener('resize', onWindowResize, false);
		}

		function onWindowResize() { //setta la dimensione del renderer e il rapporto di forma della camera
			camera.aspect = window.innerWidth / window.innerHeight * 2;

			camera.updateProjectionMatrix();
			camera.position.set(30, 60, 100);
			camera.lookAt(new THREE.Vector3(0, 0, 1));
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function animate() {
			requestAnimationFrame(animate);
			controls.isOnObject(false);
			ray.ray.origin.copy(controls.getObject().position); //copiamo nell'origine l'oggetto dei controlli
			ray.ray.origin.y -= 10; //diminuiamo la quota di 10(il test dei piedi)
			var intersections = ray.intersectObjects(objects);//interesezioni, prendiamo e intersechiamo il raggio
			if (intersections.length > 0) { //se il test di intersezione ci ritorna qualche oggetto
				var distance = intersections[0].distance;
				if (distance > 0 && distance < 10) { //se la distanza è tra 0 e 10 ci troviamo su un oggetto
					controls.isOnObject(true); //se isOnobject è true smette di decrementare la quota(non sale piu perchè è appoggiato su un cubo)
				}
			}

			controls.update();
			renderer.render(scene, camera);
		}

		function onDocumentMouseDown(event) {
			event.preventDefault();
			var projector = new THREE.Projector();
			// map viewport coordinates in ([-1,1], [-1,1], 0.5)
			var vector = new THREE.Vector3(
					(event.clientX / window.innerWidth) * 2 - 1,
					-(event.clientY / window.innerHeight) * 2 + 1, 0.5);
			projector.unprojectVector(vector, camera);

			var raycaster = new THREE.Raycaster(camera.position, vector.sub(
					camera.position).normalize());
			raycaster.intersectObjects(scene.children, true);

			var intersects = raycaster.intersectObjects([ porta ]);
			var intersects1 = raycaster.intersectObjects([ porta2 ]);
			var intersects2 = raycaster.intersectObjects([ porta3 ]);
			var intersects3 = raycaster.intersectObjects([ porta4 ]);
			var intersects4 = raycaster.intersectObjects([ porta5 ]);
			var intersects5 = raycaster.intersectObjects([ porta6 ]);
			var intersects6 = raycaster.intersectObjects([ porta7 ]);
			var intersects7 = raycaster.intersectObjects([ porta8 ]);
			var intersects8 = raycaster.intersectObjects([ porta9 ]);
			var intersects9 = raycaster.intersectObjects([ porta10 ]);
			var intersects10 = raycaster.intersectObjects([ porta11 ]);
			var intersects11 = raycaster.intersectObjects([ porta12 ]);
			var intersects12 = raycaster.intersectObjects([ porta13 ]);

			/*porta.interact = function() {
			 door.parent.rotate(...)
			 }*/
			if (intersects1.length > 0) {
				//intersects[0].interact && intersects[0].interact
				perno2.rotation.z = Math.PI / 2;
			}
			if (intersects.length > 0) {
				perno.rotation.z = Math.PI / 2;
			}
			if (intersects2.length > 0) {
				perno3.rotation.z = Math.PI / 2;
			}
			if (intersects3.length > 0) {
				perno4.rotation.z = Math.PI / 2;
			}
			if (intersects4.length > 0) {
				perno5.rotation.z = -Math.PI / 2;
			}
			if (intersects5.length > 0) {
				perno6.rotation.z = -Math.PI / 2;
			}
			if (intersects6.length > 0) {
				perno7.rotation.z = Math.PI / 2;
			}
			if (intersects7.length > 0) {
				perno8.rotation.z = Math.PI / 2;
			}
			if (intersects8.length > 0) {
				perno9.rotation.z = -Math.PI / 2;
			}
			if (intersects9.length > 0) {
				perno10.rotation.z = -Math.PI / 2;
			}
			if (intersects10.length > 0) {
				perno11.rotation.z = -Math.PI / 2;
			}
			if (intersects11.length > 0) {
				perno12.rotation.z = -Math.PI / 2;
			}
			if (intersects12.length > 0) {
				perno13.rotation.z = -Math.PI / 2;
			}
		}

		render();

		function render() {
			stats.update();
			trackballControls.update();
			TWEEN.update();

			requestAnimationFrame(render);
			renderer.render(scene, camera);
		}

		function initStats() {
			var stats = new Stats();
			stats.setMode(0); // 0: fps, 1: ms
			$('body').append(stats.domElement);
			return stats;
		}
}