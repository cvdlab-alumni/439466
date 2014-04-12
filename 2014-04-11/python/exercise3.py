'''
Created on 11/apr/2014

@author: Ms
'''
import exercise1
import exercise2
from pyplasm import *
'''
Created on 11/apr/2014

@author: Matteo
'''
import exercise1
from pyplasm import *
#ho dovuto copia-incollare l'esercizio2 perche importandolo da problemi con il caricamento
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
frontone2Dsudpiccolo1=T(1)(41.3)(frontone2Dnordpiccolo)
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
tempio=COLOR(tan2)(STRUCT([hmodel,frontoni,piano,piramidi,pertot]))
#fine exercise 2(da problemi l'import)



#inizio esercizio 3
tan2=[2.05,1.33,0.63]   
tan3=[2.05,1.33,0.63 ]   
strada1=COLOR(tan3)(CUBOID([100,50,0.4]))
strada=T([1,2,3])([-40,-15,-4.4])(strada1)
puntipiramide=[[-5,-4,0],[-5,24,0],[50,-4,0],[50,24,0],[60,29,-4],[60,-9,-4],[-10,-9,-4],[-10,29,-4]]
sterrato1=PROD([QUOTE([50]),QUOTE([28])])
tan4=[1.39,0.90,0.43]
sterrato=COLOR(tan4)(T([1,2])([-5,-4.1])(sterrato1))
casa1p=CUBOID([14,7,9])
casa2p=CUBOID([16,10,8])
casa3p=CUBOID([16,9,11])
casa4p=CUBOID([16,9,11])
casa5p=CUBOID([8,18,12])
casa6p=S(1)(-1)(casa2p)
case=[2.05,1.02,0.29]    
color=[1.42,1.07,0.35] 
color2=[1.66,1.28,1.00]
casa1=COLOR(color)(T([1,2,3])([170,34,-4])(casa1p))
casa2=COLOR(color)(T([1,2,3])([100,34,-4])(casa2p))
casa3=COLOR(color2)(T([1,2,3])([120,-30,-4])(casa3p))
casa4=COLOR(case)(T([1,2,3])([170,-30,-4])(casa4p))
casa5=COLOR(case)(T([1,2,3])([220,-2,-4])(casa5p))
casa6=COLOR(color2)(T([1,2,3])([-55,-2,-4])(casa5p))
vicinato=STRUCT([casa1,casa2,casa3,casa4,casa5,casa6])
piramide=COLOR(tan4)((JOIN(AA(MK)(puntipiramide))))
forestgreen=[1.54,2.05,0.50 ]  
prato1=COLOR(forestgreen)(CUBOID([300,90,0.2]))
prato=T([1,2,3])([-70,-40,-4.5])(prato1)
#ghiaia
ghiaia1=CUBOID([2.5,2.5,0.2])
ghiaiamod = [T(1)(3.5), ghiaia1]
ghiaia = T([1,2,3])([166,-24,-4.4])(STRUCT(NN(5)(ghiaiamod)))
pair_z = [T(2)(0.9), ghiaia]
ghiaiato = STRUCT(NN(60)(pair_z))
ghiaiato2=STRUCT(NN(10)(pair_z))
ghiaiafin=STRUCT([ghiaiato,ghiaiato2])
ghiaia2=R([1,2])(PI/2)(ghiaiafin)
ghiaiafin2=T([1,2])([200,-170])(ghiaia2)
#muretto e stradina
ciocco=[0.92,0.64,0.51]    
murettop=COLOR(ciocco)(CUBOID([80,2,3]))
muretto=T([1,2,3])([60,-9,-4])(murettop)
muretto2=T(2)(35)(muretto)
street=[1.33,0.94,0.66]
stradinap=COLOR(street)(CUBOID([80,35,0.3]))
stradina=T([1,2,3])([60,-9,-4.5])(stradinap)
#fine muretto e stradina
smallarea=STRUCT([muretto,muretto2,stradina,tempio,sterrato,piramide,strada,prato,vicinato,ghiaiafin,ghiaiafin2])
VIEW(smallarea)