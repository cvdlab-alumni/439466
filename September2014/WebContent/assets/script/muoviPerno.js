
function muoviPernoApri(perno){
	var pernoApri = new TWEEN.Tween(perno.rotation)
	.to({
		x : 0,
		y : 0,
		z : 1
	}, 3900)

	.easing(TWEEN.Easing.Linear.None)

	.start();
}

function muoviPernoChiudi(perno){
	var pernoChiudi = new TWEEN.Tween(perno.rotation).to({
		x : 0,
		y : 0,
		z : 0
	}, 2700).easing(TWEEN.Easing.Linear.None)
	.start();
}


function scorri(perno){
	var pernoscorri = new TWEEN.Tween(perno.position).to({
		x : 26.45,
		y : 26,
		z : 0.5
	}, 2700).easing(TWEEN.Easing.Linear.None)
	.start();
}

function scorriindietro(perno){
	var pernoscorri = new TWEEN.Tween(perno.position).to({
		x : 26.45,
		y : 24.5,
		z : 0.5
	}, 2700).easing(TWEEN.Easing.Linear.None)
	.start();
}
