function muroShape(punti,buchi){
	 var shape = new THREE.Shape();
     shape.moveTo(punti[0].getPunto1(),punti[0].getPunto2());
     shape.lineTo(punti[1].getPunto1(),punti[1].getPunto2());
     shape.lineTo(punti[2].getPunto1(),punti[2].getPunto2());
     shape.lineTo(punti[3].getPunto1(),punti[3].getPunto2());
     shape.lineTo(punti[0].getPunto1(),punti[0].getPunto2());


    if(buchi.length>0){
     while(buchi.length >=4){
    		 var doorHole = new THREE.Shape(); 

    		 doorHole.moveTo(buchi[0].getPunto1(),buchi[0].getPunto2());
    		 doorHole.lineTo(buchi[1].getPunto1(),buchi[1].getPunto2());
    		 doorHole.lineTo(buchi[2].getPunto1(),buchi[2].getPunto2());
    		 doorHole.lineTo(buchi[3].getPunto1(),buchi[3].getPunto2());
    		 doorHole.lineTo(buchi[0].getPunto1(),buchi[0].getPunto2());
    		 shape.holes.push(doorHole);
    		for(var i=0; i<4; i++)
    			 buchi.shift();
    		 
    		 
    		}
    }
     

     var options = {
       amount: 0,
       bevelThickness: 0.01,
       bevelSize: 0,
       bevelSegments: 10,
       bevelEnabled: true,
       curveSegments: 12,
       steps: 1
     };
     var geometry = new THREE.ExtrudeGeometry(shape,options);

     return geometry;
     

}

function Coppia(punto1,punto2){
	this.punto1=punto1;
	this.punto2=punto2;
	
}

Coppia.prototype.getPunto1 = function() {
    return this.punto1;
};
Coppia.prototype.getPunto2 = function() {
    return this.punto2;
};




