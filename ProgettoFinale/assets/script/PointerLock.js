      var camera, scene, renderer;
      var geometry, material, mesh;
      var controls;

      var objects = [];

      var ray;

      var blocker = document.getElementById( 'blocker' );
      var instructions = document.getElementById( 'instructions' );

      // http://www.html5rocks.com/en/tutorials/pointerlock/intro/

      var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

      if ( havePointerLock ) {
        var element = document.body;
        var pointerlockchange = function ( event ) {

          if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
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

        var pointerlockerror = function ( event ) {
          instructions.style.display = '';
        }

        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

        instructions.addEventListener( 'click', function ( event ) {
          instructions.style.display = 'none';

          // Ask the browser to lock the pointer
          element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

          if ( /Firefox/i.test( navigator.userAgent ) ) {
            var fullscreenchange = function ( event ) {

              if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
                document.removeEventListener( 'fullscreenchange', fullscreenchange );
                document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
                element.requestPointerLock();
              }
            }

            document.addEventListener( 'fullscreenchange', fullscreenchange, false );
            document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

            element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
            element.requestFullscreen();

          } else {
            element.requestPointerLock();
          }
        }, false );
      } else {
        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
      }

      init();
      animate();

      function init() {
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog( 0xffffff, 0, 750 );

        var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
        light.position.set( -1, - 0.5, -1 );
        scene.add( light );

        controls = new THREE.PointerLockControls( camera ); //dentro pointerlockCOntrols ci stanno i comandi
        scene.add( controls.getObject() );

        ray = new THREE.Raycaster();
        ray.ray.direction.set( 0, -1, 0 );// un raggio che punta in basso per vedere se c'p un cubetto

        // floor
/*
        geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
        geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

        for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
          var vertex = geometry.vertices[ i ];
          vertex.x += Math.random() * 20 - 10;
          vertex.y += Math.random() * 2;
          vertex.z += Math.random() * 20 - 10;
        }

        for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {
          var face = geometry.faces[ i ];
          face.color = new THREE.Color( Math.random() * 0.2, Math.random() * 0.2 + 0.65, Math.random() * 0.25 );
        }

        material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );
        mesh = new THREE.Mesh( geometry, material ); //la texture si applica al materiale per dare un colore a un pixel
        scene.add( mesh );

        // objects

        geometry = new THREE.BoxGeometry( 20, 20, 20 );

        for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {
          var face = geometry.faces[ i ];
          face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
          face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
          face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
        }

        for ( var i = 0; i < 500; i ++ ) {
          material = new THREE.MeshPhongMaterial( { specular: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } );
          var mesh = new THREE.Mesh( geometry, material );
          mesh.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
          mesh.position.y = Math.floor( Math.random() * 20 ) * 20 + 10;
          mesh.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;
          scene.add( mesh );
          material.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
          objects.push( mesh );
        }
*/
        //

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor( 0xffffff );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );
      }

      function onWindowResize() { //setta la dimensione del renderer e il rapporto di forma della camera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
      }

      function animate() {
        requestAnimationFrame( animate );
        controls.isOnObject( false );
        ray.ray.origin.copy( controls.getObject().position ); //copiamo nell'origine l'oggetto dei controlli
        ray.ray.origin.y -= 10; //diminuiamo la quota di 10(il test dei piedi)
        var intersections = ray.intersectObjects( objects );//interesezioni, prendiamo e intersechiamo il raggio
        if ( intersections.length > 0 ) { //se il test di intersezione ci ritorna qualche oggetto
          var distance = intersections[ 0 ].distance;
          if ( distance > 0 && distance < 10 ) { //se la distanza è tra 0 e 10 ci troviamo su un oggetto
            controls.isOnObject( true ); //se isOnobject è true smette di decrementare la quota(non sale piu perchè è appoggiato su un cubo)
          }
        }

        controls.update();
        renderer.render( scene, camera );
      }

