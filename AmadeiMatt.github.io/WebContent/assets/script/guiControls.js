
function createControls(scene,elementi,switchCamera,skybox){
	
	video = document.createElement('video');
	video.src = 'assets/movies/Big_Buck_Bunny_small.ogv';
	video.autostart = true;
	video.id = "video";

	texture = new THREE.Texture(video);
	texture.minFilter = THREE.LinearFilter;
	texture.magFilter = THREE.LinearFilter;
	texture.format = THREE.RGBFormat;
	texture.generateMipmaps = false;

	var material = new THREE.MeshBasicMaterial( { map: texture } );

	var videoPlane = new THREE.PlaneGeometry( 9, 5.4, 4, 4 );

	var videoMesh = new THREE.Mesh( videoPlane, material );
	videoMesh.position.set(-120,11.2,4.4);21
	 videoMesh.visible = true;
	  videoMesh.isOn = true;
	//video.play();

scene.add(videoMesh);
		/*var movieMaterial = new THREE.MeshBasicMaterial( { map: texture, overdraw: true, side:THREE.DoubleSide } );
	// the geometry on which the movie will be displayed;
	// 		movie image will be scaled to fit these dimensions.
	var movieGeometry = new THREE.PlaneGeometry( 240, 100, 4, 4 );
	var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
	movieScreen.position.set(0,50,0);
	scene.add(movieScreen);
	*/
	
	
	
	
			var controls = new function() {

				this.switchOnOff1 = false;
				this.switchOnOff2 = false;
				this.switchOnOff3 = false;
				this.switchOnOff4 = false;
				this.switchOnOff5 = false;
				this.switchOnOff6 = false;
				this.switchOnOff7 = false;
				this.switchOnOff8 = false;
				this.switchOnOff9 = false;
				this.switchOnOff10 = false;
				this.switchOnOff11 = false;
				this.illuminazione = false;
				//this.soundson=false;
				this.day = false;
				this.neve = false;
				this.sun = false;
				this.switchCamera=switchCamera;
				
				this.showVideo = false;

		     
		          
			};
			//var lights= creaLampadina();
			//scene.add(lights);
		       var gui = new dat.GUI();
		      

			
		/*	gui.add(controls, 'soundson').onChange(function(e) {
		  		document.getElementById('audio').play();

				
			});*/
			
			gui.add(controls,"switchCamera");
			
			var luci = gui.addFolder('luci');


			luci.add(controls, 'switchOnOff1').onChange(function(e) {
				elementi.lampadine.spotLight.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff2').onChange(function(e) {
				elementi.lampadine.spotLight2.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff3').onChange(function(e) {
				elementi.lampadine.spotLight3.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff4').onChange(function(e) {
				elementi.lampadine.spotLight4.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff5').onChange(function(e) {
				elementi.lampadine.spotLight5.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff6').onChange(function(e) {
				elementi.lampadine.spotLight6.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff7').onChange(function(e) {
				elementi.lampadine.spotLight7.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff8').onChange(function(e) {
				elementi.lampadine.spotLight8.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff9').onChange(function(e) {
				elementi.lampadine.spotLight9.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff10').onChange(function(e) {
				elementi.lampadine.spotLight10.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			luci.add(controls, 'switchOnOff11').onChange(function(e) {
				elementi.lampadine.spotLight11.onlyShadow = e;
		  		document.getElementById('lights').play();

			});
			gui.add(controls, 'illuminazione').onChange(function(e) {
				//scene.add(luci);
				//elementi.luci.dirLight.onlyShadow = e;

				elementi.luci.spotLight1.onlyShadow = e;
				elementi.luci.spotLight2.onlyShadow = e;
				elementi.luci.spotLight3.onlyShadow = e;
				elementi.luci.spotLight4.onlyShadow = e;
				elementi.luci.spotLight5.onlyShadow = e;

			});
			
	        gui.add(controls, 'showVideo').onChange(function(e) {
	        	if(e){
					this.isOn = true;

	        		video.play();
	      
	        	}else{
	        		video.pause();
	        	video.currentTime = 0;
				this.isOn = false;
	        	}
	        });

			
			var dayNight = gui.addFolder('Day/Night');
			
			dayNight.add(controls,'day').onChange(function(e){
				if (e) {
					scene.remove(skybox.skybox1);
					scene.add(skybox.skybox);
					
				} else {
					scene.remove(skybox.skybox);
					scene.add(skybox.skybox1);
					
				}
				

				});
			
			var neve = particel();

			dayNight.add(controls,'neve').onChange(function(e){
			animateNeve(scene,neve,e);

				});
			
			dayNight.add(controls,'sun').onChange(function(e){
			scene.remove(neve);

				});
			
			
		
			
				
}
	      
	      
