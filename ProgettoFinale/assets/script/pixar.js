function lampada(){
        var scene = new THREE.Object3D();
      
        var planeGeometry = new THREE.PlaneGeometry(160, 160,160,160); //largherzza e lunghezza del piano
		var planeMaterial = new THREE.MeshLambertMaterial({ color : 0xCCCCCC, side: THREE.DoubleSide
		}); 
		var plane = new THREE.Mesh(planeGeometry, planeMaterial); //istanzia una nuova Mesh che poi aggiunge alla scena, passandogli una geometria e un materiale
		// rotate and position the plane
		plane.position.set(0,50,0);
		        plane.receiveShadow=true;

		scene.add(plane);
        function mkJoint (radius, height) {
          var joint = new THREE.Object3D();
          var pianoGeometry = new THREE.CylinderGeometry(radius*2,radius*2,height/5,20,20,false);
          var pianoMaterial = new THREE.MeshLambertMaterial({color: 0x595959, shading: THREE.FlatShading});
		var piano = new THREE.Mesh(pianoGeometry, pianoMaterial);
		piano.position.set(0,0,0);
		piano.rotation.x= Math.PI/2;

		scene.add(piano);
	    var spotLight0 = new THREE.SpotLight(0xBBBBBB);
        spotLight0.position.set(120, 120, 30);
        spotLight0.angle=Math.PI/3;
        //spotLight0.lookAt(piano);
        scene.add(spotLight0)
            var lightColor = "#ffffee";
        var directionalLight = new THREE.DirectionalLight(lightColor);
        directionalLight.position.set(-20, 100, 0);
        directionalLight.intensity = 2;
        scene.add(directionalLight);
        	var sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
          var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x5C5C5C, shading: THREE.FlatShading});
          var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.position.set(0,0,radius +height/10);
          joint.add(sphere);
          var ambiColor = "#1c1c1c";
          var ambientLight = new THREE.AmbientLight(ambiColor);
          scene.add(ambientLight);

          var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, height, 20, 20, false);
          var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x595959, shading: THREE.FlatShading});
          var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
          cylinder.rotation.x=-Math.PI/2;
          cylinder.position.set(0,0,3*radius+1.5*height/10);
          sphere.add(cylinder);

          var hook = new THREE.Object3D();
          hook.rotation.x=Math.PI/2;
			
          hook.position.set(0,-2*radius-height/20,0);
         
          
          cylinder.add(hook);
          
          joint.sphere = sphere;
          joint.cylinder = cylinder;
          joint.hook = hook;
          //joint.sphere2=sphere2;
          
		  joint.piano=piano;
          return joint;
        }
		function lampada(radius){
			var joint = new THREE.Object3D();

			var sphereGeometry2 = new THREE.SphereGeometry(radius, 32, 32);
	          var sphereMaterial2 = new THREE.MeshLambertMaterial({color: 0x5C5C5C, shading: THREE.FlatShading});
	          var sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
	          sphere2.position.set(0,0,radius+height/10);
	          
	          joint.add(sphere2);
	          
			var semisferaGeometry = new THREE.SphereGeometry(3*radius, 20, 20,2*Math.PI,Math.PI);
	          var semisferaMaterial = new THREE.MeshLambertMaterial({color: 0x5C5C5C, shading: THREE.FlatShading});
	          var semisfera = new THREE.Mesh(semisferaGeometry, semisferaMaterial);
	          semisfera.rotation.x=Math.PI;
	          semisfera.position.set(0,0,4*radius);
	          sphere2.add(semisfera);
	        
	          
	          var lampadinaGeometry = new THREE.SphereGeometry(1.2*radius, 32, 32);
	          var lampadinaMaterial = new THREE.MeshPhongMaterial({color: 0xFFFF00, shading: THREE.FlatShading});
	          var lampadina = new THREE.Mesh(lampadinaGeometry, lampadinaMaterial);
	          lampadina.rotation.x =Math.PI/2;
	       
	          semisfera.add(lampadina);
	          var pointColor = "#ffffee";
		      var spotLight = new THREE.SpotLight(pointColor);
		      spotLight.target=lampadina;		      
		      //spotLight.position.set(0,0,30);
		      //spotLight.target=target;
		      spotLight.distance = 60;
		      //spotLight.castShadow=true;
		      //spotLight.onlyShadow=true;
		      spotLight.angle = Math.PI/10;
		      spotLight.exponent = 80;
		      spotLight.intensity=100;
		      //scene.add(spotLight);
		      //vector= new THREE.Vector3(0,0,0);

		    /* spotLight.lookAt(lampadina.position);
		      var spotLightHelper = new THREE.SpotLightHelper(spotLight);
		      scene.add(spotLightHelper);*/

		      // set shadow properties - try to change these values
		     spotLight.castShadow = true;
		      spotLight.shadowCameraNear = 2;
		      spotLight.shadowCameraFar = 200;
		      spotLight.shadowCameraFov = 70;
		      spotLight.shadowDarkness = 0.5;
		      spotLight.shadowMapWidth = 256;
		      spotLight.shadowMapHeight = 256;
		      spotLight.shadow;
		      //spotLight.rotation.z=-3*Math.PI/2;
		      //spotLight.rotation.y=Math.PI;
		      //spotLight.position.set(0,0,5*radius);
		      //lampadina.rotation.x=3*Math.PI/2;
		      	     //spotLight.position=lampadina.position;

		      lampadina.add(spotLight);

	          joint.sphere2 =sphere2;
	          joint.semisfera=semisfera;
	          joint.lampadina=lampadina;
	          joint.spotLight=spotLight;
	          return joint;
	          
	          
		}
        var height = 6;
        var radius = 1;
        var joint1 = mkJoint(radius, height);

        scene.add(joint1);

       var joint2 = mkJoint(radius, height);

        joint1.hook.add(joint2);
        var joint3 = lampada(radius);
        joint2.hook.add(joint3);
        
        var pallaGeometry = new THREE.SphereGeometry(radius*4, 32, 32);
        var pallaMaterial = new THREE.MeshPhongMaterial({color: 0x00CD00, shading: THREE.FlatShading});
        var palla = new THREE.Mesh(pallaGeometry, pallaMaterial);
        palla.castShadow=true;
        palla.position.set(-20,70,8*radius*4);
        palla2=palla.clone();
        scene.add(palla);
        scene.add(palla2);
        
     

       /* var controls = new function () {
          this.alpha = 0.0;
          this.beta = 0.0;
          this.gamma = 0.0;
          this.delta = 0.0;
          this.epsilon=0.0;
          this.switchOnOff=false;
        };

        var gui = new dat.GUI();
        gui.add(controls, 'alpha', 0.0, 2*Math.PI).onChange(function (value) {
          joint1.rotation.z = value;
        });
        gui.add(controls, 'beta', 0.0, Math.PI/2).onChange(function (value) {
          joint1.sphere.rotation.x = value;
        });

        gui.add(controls, 'gamma', 0.0, Math.PI/2).onChange(function (value) {
          joint2.sphere.rotation.x = value;
        });
        gui.add(controls, 'delta', 0.0, 2*Math.PI).onChange(function (value) {
          joint2.sphere.rotation.z= value;
        });
        gui.add(controls, 'epsilon', 0.0, Math.PI/2).onChange(function (value) {
            joint3.sphere2.rotation.x = value;
          });
        gui.add(controls, 'switchOnOff').onChange(function (e) {
            joint3.spotLight.onlyShadow = e;
            palla.castShadow=!e;
          });

		
      var text1;
      var text2;*/
      
      var options = {
              size: 10,
              height: 5,
              weight: "normal",
              font: "helvetiker",
              bevelThickness: 1,
              bevelSize: 0.5,
              bevelSegments:4,
              bevelEnabled: true,
              curveSegments: 12,
              steps:1
            };
      

        
          function createMesh(geom) {
              // assign two materials
              // var meshMaterial = new THREE.MeshLambertMaterial({color: 0xff5555});
              // var meshMaterial = new THREE.MeshNormalMaterial();
              var meshMaterial = new THREE.MeshPhongMaterial({specular: 0xffffff, color: 0xff5555, shininess: 100, metal: true});
              // meshMaterial.side=THREE.DoubleSide;
              // create a multimaterial
              var plane = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);
              return plane;
            }
    
        /*  var pianoTween = new TWEEN.Tween(joint1.piano.position) // si instanzia un nuovo tween e vogliamo modificarci la posizione del cubo
          .to({ x: 8, y: 45, z:0 }, 6000)// vogliamo arrivare in 2000 ms nella nuova posizione x,y,z
          // .easing(TWEEN.Easing.Linear.None)
          .easing(TWEEN.Easing.Elastic.InOut)
          .start();
          
          var piano2Tween = new TWEEN.Tween(joint2.piano.position) // si instanzia un nuovo tween e vogliamo modificarci la posizione del cubo
          .to({ x: 8, y: 45, z:0 }, 6000)// vogliamo arrivare in 2000 ms nella nuova posizione x,y,z
          // .easing(TWEEN.Easing.Linear.None)
          .easing(TWEEN.Easing.Elastic.InOut)
          .start();
          
          var pallaTween = new TWEEN.Tween(palla.position) 
          .to({ x: -15, y: 70, z:4 }, 10000)
          // .easing(TWEEN.Easing.Linear.None)
          .easing(TWEEN.Easing.Bounce.Out)
          .start();
          
          var palla2Tween = new TWEEN.Tween(palla2.scale) 
          .to({ x:radius*0.8 , y:radius*0.8, z:radius*0.8 }, 5000)
          // .easing(TWEEN.Easing.Linear.None)
         // .easing(TWEEN.Easing.Elastic.InOut)
          .start();
         
		var saluto = new TWEEN.Tween(joint2.sphere.rotation) 
		      .to({x: 20, y: 10, z: 20}, 7000)
		     
		      .easing(TWEEN.Easing.Bounce.InOut)
		      .start();


          var lampadaTween = new TWEEN.Tween(joint1.position)
        
          .to({ x: 8, y: 45, z:0 }, 6000)
          // .easing(TWEEN.Easing.Linear.None)
          .easing(TWEEN.Easing.Elastic.InOut)
          
          .start();
        
      
        var ElleScale = new TWEEN.Tween(text2.position)
          .to({x: -15, y:70, z:8*radius*3.5}, 7000)
          .delay(1000)
          .easing(TWEEN.Easing.Bounce.Out)
          .start();

          
          
          
          



}
