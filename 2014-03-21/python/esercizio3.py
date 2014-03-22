'''
Created on 22/mar/2014

@author: Ms
'''
from pyplasm import *
import esercizio1
import esercizio2

#inizio esercizio3
#colonnato
colonnacreate= PROD([esercizio1.basep, Q(9)])
colonnapos=T([1,2])([-0.9,2.2])(colonnacreate)
colonne_x=[T(1)(3.2),colonnapos]
coldx = STRUCT(NN(13)(colonne_x))
colsx=T(2)(15.5)(coldx)
colonne_y=[T(2)(3),colonnapos]
colonnato3Davanti=T(1)(3)(STRUCT(NN(4)(colonne_y)))
colonnato3Ddietro=T(1)(38.7)(colonnato3Davanti)
colonne3Dcentrali1=T([1,2])([8.5,2.9])(STRUCT(NN(2)(colonne_y)))
colonne3Dcentrali2=T(1)(28)(colonne3Dcentrali1)
colonnato=(STRUCT([colonnato3Davanti,colonnato3Ddietro,colonne3Dcentrali1,colonne3Dcentrali2,coldx,colsx]))
#gradini
primo=PROD([esercizio1.floor0,QUOTE([0.6])])
secondo=PROD([esercizio1.floor1,QUOTE([1.2])])
terzo=PROD([esercizio1.floor2,QUOTE([1.8])])
quarto=PROD([esercizio1.floor3,QUOTE([2.4])])
gradini=STRUCT([primo,secondo,terzo,quarto])

per3=PROD([esercizio1.perimetrointerno3,QUOTE([9])])
per4=PROD([esercizio1.perimetrointerno4,QUOTE([9])])
per1=PROD([esercizio1.perimetrointerno1,QUOTE([9])])
per2=PROD([esercizio1.perimetrointerno2,QUOTE([9])])
pertot=STRUCT([per1,per2,per3,per4])
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
perimetro=T(3)(9.8)(PROD([esercizio1.paretep,QUOTE([1])]))

#frontoni
#frontone2D
pointsfrontone=[[0,0.2,10.5],[0,18.2,10.5],[0,10,14.5],[1.3,1,10.5],[1.3,17.5,10.5],[1.3,10,14.5]]
frontone3Dnordgrande=T(1)(1.5)(JOIN(AA(MK)(pointsfrontone)))
frontone3Dsudgrande=T(1)(39)(frontone3Dnordgrande)
pointsfrontone2=[[1,1,10.7],[1,17.2,10.7],[1,10,14]]
frontone2Dnordpiccolo1=(T(1)(0.5)((COLOR(RED)(JOIN(AA(MK)(pointsfrontone2))))))
frontone2Dsudpiccolo1=T(1)(41.3)(esercizio2.frontone2Dnordpiccolo)
frontoninord3D=T([1,3])([0.4,0.6])(STRUCT([frontone3Dnordgrande,frontone2Dnordpiccolo1]))
frontonisud3D=T(3)(0.3)(STRUCT([frontone3Dsudgrande,frontone2Dsudpiccolo1]))
tan2=[2.05,1.33,0.63]       
solid_model_3D=COLOR(tan2)(STRUCT(([gradini,colonnato,pertot,piano,piramidi,perimetro,frontoninord3D,frontonisud3D])))
VIEW(solid_model_3D)





