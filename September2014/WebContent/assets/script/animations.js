
function createAnimations(palla){
	var pallaTween = new TWEEN.Tween(palla.position).delay(1000).to({
		x : -180,
		y : 5,
		z : 52
	}, 1500).easing(TWEEN.Easing.Linear.None).start();
	var pallaTween2 = new TWEEN.Tween(palla.position).to({
		x : -15,
		y : 2,
		z : 52
	}, 3900).easing(TWEEN.Easing.Linear.None);
	pallaTween.chain(pallaTween2);
	pallaTween2.chain(pallaTween);
	pallaTween.chain(pallaTween2);
}

function animateNeve(scene,particel){
	//scene.fog = new THREE.Fog(0x000000, 0.015,500);

	scene.add(particel);

	var particelTween = new TWEEN.Tween(particel.position).to({
		x : 0,
		y : -200,
		z : 0
	}, 15000).easing(TWEEN.Easing.Linear.None)
.repeat(Infinity) .start();
	
	

	
	
}

/*var loader8 = new THREE.OBJMTLLoader();
loader8.addEventListener('load', function (event) {

  var object1 = event.content;

      object1.rotation.x =Math.PI/2;
      // object.rotation.y =-Math.PI;

        object1.position.set(-20,18,2);
object1.scale.set(0.005,0.005,0.005);
 // mesh = object;
  elementi.add(object1);



});


loader8.load(
  'assets/models/bonecoDeNeve.obj', 
  'assets/models/bonecoDeNeve.mtl', 
  {side: THREE.DoubleSide}
  

);
elementi.object1=object1;

*/
function animatePupazzo(pupazzo){

	var pupazzoTween = new TWEEN.Tween(pupazzo.position).to({
		x : -20,
		y : -9,
		z : 1.5
	}, 6500).easing(TWEEN.Easing.Linear.None).start();
	
	var pupazzoTween2 = new TWEEN.Tween(pupazzo.rotation).to({
		x:0,
		y:0,
		z:Math.PI/2
	}, 1000);

	var pupazzoTween3 = new TWEEN.Tween(pupazzo.position).to({
		x:80,
		y:-9,
		z:1.5
	}, 30000).easing(TWEEN.Easing.Linear.None);
	
	
	var pupazzoTween4 = new TWEEN.Tween(pupazzo.rotation).to({
		x:0,
		y:0,
		z:Math.PI
	}, 1000);
	

	var pupazzoTween5 = new TWEEN.Tween(pupazzo.position).to({
		x:80,
		y:30,
		z:1.5
	}, 5000);
	
	
	var pupazzoTween6 = new TWEEN.Tween(pupazzo.position).to({
		x:-20,
		y:18,
		z:1.5
	}, 3000);
	


pupazzoTween.chain(pupazzoTween2);
pupazzoTween2.chain(pupazzoTween3);
pupazzoTween3.chain(pupazzoTween4);
pupazzoTween4.chain(pupazzoTween5);
pupazzoTween5.chain(pupazzoTween6);

}

function animateUomo(uomo){
	
	document.getElementById('russo').play();

	var posUomo = new TWEEN.Tween(uomo.position).delay(4900).to({
		x:6,
		y:8.2,
		z:2.7
		
	},10).easing(TWEEN.Easing.Linear.None).start();
	
	
	var ruotaUomo = new TWEEN.Tween(uomo.rotation).to({
		x:0,
		y:1.5,
		z:0
		
	},150);
	
	
	posUomo.chain(ruotaUomo);
	
}



	
	
	
	
	
