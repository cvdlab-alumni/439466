'''
Created on 11/apr/2014

@author: Ms
'''
import exercise1
from pyplasm import *

hmodel=exercise1.hmodel

#frontoni
#frontone2D
pointsfrontone=[[0,0.2,10.5],[0,18.2,10.5],[0,10,14.5],[1.3,1,10.5],[1.3,17.5,10.5],[1.3,10,14.5]]
frontone3Dnordgrande=T(1)(1.5)(JOIN(AA(MK)(pointsfrontone)))
frontone3Dsudgrande=T(1)(39)(frontone3Dnordgrande)
pointsfrontone2=[[1,1,10.7],[1,17.2,10.7],[1,10,14]]
scuro=[1.39,0.90,0.43]
frontone2Dnordpiccolo=T(1)(0.5)((COLOR(scuro)(JOIN(AA(MK)(pointsfrontone2)))))
frontone2Dnordpiccolo1=(T(1)(0.5)((COLOR(RED)(JOIN(AA(MK)(pointsfrontone2))))))
frontone2Dsudpiccolo1=T(1)(40.5)(frontone2Dnordpiccolo)
frontoninord3D=T([1,3])([0.4,0.6])(STRUCT([frontone3Dnordgrande,frontone2Dnordpiccolo1]))
frontonisud3D=T(3)(0.3)(STRUCT([frontone3Dsudgrande,frontone2Dsudpiccolo1]))
tan2=[2.05,1.33,0.63]      
frontoni=STRUCT([frontoninord3D,frontonisud3D])
#piramidi3D
puntipiramide=[[0.2,0.2,0.3],[1.5,0.2,0.3],[0.2,1.5,0.3],[1.5,1.5,0.3],[0,0],[1.7,0],[1.7,1.7],[0,1.7]]
piramide=(JOIN(AA(MK)(puntipiramide)))
pair_piramidealt=[T(1)(3.16),piramide]
pair_piramidebase=[T(1)(3.16),piramide]
piramidedxalt=STRUCT(NN(13)(pair_piramidealt))
piramidedxbase=STRUCT(NN(13)(pair_piramidebase))
piramidesxalt=T(2)(15.3)(piramidedxalt)
piramidesxbase=T(2)(15.3)(piramidedxbase)
pair_piramideyalt=[T(2)(3.1),piramide]
pair_piramideybase=[T(2)(3.1),piramide]
piramideavantialt=T(1)(3.1)(STRUCT(NN(4)(pair_piramideyalt)))
piramideavantibase=T(1)(3.1)(STRUCT(NN(4)(pair_piramideybase)))
piramidedietroalt=T(1)(38)(piramideavantialt)
piramidedietrobase=T(1)(38)(piramideavantibase)
piramidi=T([1,2,3])([-1,1.7,9])(STRUCT([piramidedxalt,piramidesxalt,piramideavantialt,piramidedietroalt,piramidedxbase,piramidesxbase,piramideavantibase,piramidedietrobase]))
#finepiramidi
#capitelli3D
capitello=T([1,2,3])([-1.2,1.5,9.3])(CUBOID([1.7,1.7,0.4]))
pair_capitello=[T(1)(3.16),capitello]
capitellatodx=STRUCT(NN(13)(pair_capitello))
capitellatosx=T(2)(15.3)(capitellatodx)
pair_capitelloy=[T(2)(3.1),capitello]
capitellatoavanti=T(1)(3.1)(STRUCT(NN(4)(pair_capitelloy)))
capitellatodietro=T(1)(38)(capitellatoavanti)
capitellocolor=[2.05,1.33,0.63]
piano=COLOR(capitellocolor)(STRUCT([capitellatodx,capitellatosx,capitellatoavanti,capitellatodietro]))
#finecapitelli
per3=PROD([exercise1.perimetrointerno3,QUOTE([9])])
per4=PROD([exercise1.perimetrointerno4,QUOTE([9])])
per1=T(1)(-0.2)(PROD([exercise1.perimetrointerno1,QUOTE([9])]))
per2=PROD([exercise1.perimetrointerno2,QUOTE([9])])
def circle(r):
    def circle0(p):
        alpha = p[0]
        return [r*COS(alpha), r*SIN(alpha)]
    return circle0
rettangologrande=PROD([QUOTE([1.5]),QUOTE([0.1])])
rettangolopiccolo=T([1,2])([0.25,0.025])(PROD([QUOTE([1]),QUOTE([0.05])]))
cerchio = MAP(circle(0.01))(INTERVALS(2*PI)(20))
cerchiotr=T([1,2])([0.25,0.02])(cerchio)
diff1=DIFFERENCE([rettangologrande,rettangolopiccolo])
diff2=DIFFERENCE([diff1,cerchio])
pertot=STRUCT([per1,per2,per3,per4])
tan2=[2.05,1.33,0.63]    
fregio1=CUBOID([2,6,1])
fregio2=T([2,3])([1,1])(CUBOID([2,4,1]))
fregio3=T([2,3])([2,2])(CUBOID([2,2,1]))
fregi=T([1,2,3])([7,6.8,9.5])(STRUCT([fregio1,fregio2,fregio3]))
fregisud=T(1)(28)(fregi)   
tempio=COLOR(tan2)(STRUCT([fregi,fregisud,hmodel,frontoni,piano,piramidi,pertot]))
VIEW(tempio)