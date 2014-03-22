'''
Created on 21/mar/2014

@author: Ms
'''
from pyplasm import *
primoGradinolung=QUOTE([43])
primoGradinolarg=QUOTE([20])
floor0=COLOR(BLACK)(INSR(PROD)([primoGradinolung,primoGradinolarg]))
secondoGradinolung=QUOTE([42])
secondoGradinolarg=QUOTE([19])
secondogradinop=PROD([secondoGradinolung,secondoGradinolarg])
secondogradinopp= T(1)(0.5)(secondogradinop)
floor1=COLOR(RED)(T(2)(0.5)(secondogradinopp))
terzoGradinolung=QUOTE([41])
terzoGradinolarg=QUOTE([18])
terzogradinop=PROD([terzoGradinolung,terzoGradinolarg])
terzogradinopp= T(1)(1)(terzogradinop)
floor2=COLOR(YELLOW)(T(2)(1)(terzogradinopp))
quartoGradinolung=QUOTE([40])
quartoGradinolarg=QUOTE([17])
quartogradinop=PROD([quartoGradinolung,quartoGradinolarg])
quartogradinopp= T(1)(1.5)(quartogradinop)
floor3=COLOR(GREEN)(T(2)(1.5)(quartogradinopp))
gradini=STRUCT([floor0,floor1,floor2,floor3])

def circle(r):
    def circle0(p):
        alpha = p[0]
        return [r*COS(alpha), r*SIN(alpha)]
    return circle0
#base colonne e dei muri interni
basep = MAP(circle(0.7))(INTERVALS(2*PI)(20))
base=COLOR(WHITE)(T([1,2])([-0.9,2.2])(basep))
pair_x=[T(1)(3.2),base]
colonnatodx = COLOR(WHITE)(STRUCT(NN(13)(pair_x)))
colonnatosx=COLOR(WHITE)(T(2)(15.5)(colonnatodx))
pair_y=[T(2)(3),base]
colonnatoavanti=COLOR(WHITE)(T(1)(3)(STRUCT(NN(4)(pair_y))))
colonnatodietro=COLOR(WHITE)(T(1)(38.7)(colonnatoavanti))
colonnecentrali1=COLOR(WHITE)(T([1,2])([8.5,2.9])(STRUCT(NN(2)(pair_y))))
colonnecentrali2=COLOR(WHITE)(T(1)(28)(colonnecentrali1))
colonnato=COLOR(YELLOW)(STRUCT([colonnatoavanti,colonnatodietro,colonnecentrali1,colonnecentrali2,colonnatodx,colonnatosx]))
perimetrointerno1=COLOR(BLACK)(T(2)(5.5)(QUOTE([-9,26.7,-9])))
perimetrointerno2=COLOR(BLACK)(T(2)(9)(perimetrointerno1))
perimetrointerno3=COLOR(BLACK)(PROD([QUOTE([-13,0.1,-26]),QUOTE([-5.3,9,-4.5])]))
perimetrointerno4=COLOR(BLACK)(PROD([QUOTE([-30,1.8,-13]),QUOTE([-5.4,3.3,-2.4,3.3,-4.5])]))
perimetrointerno=(STRUCT([perimetrointerno1,perimetrointerno2,perimetrointerno3,perimetrointerno4]))
floor4=STRUCT([colonnato,perimetrointerno])
#piramide capitello orizzontale
pointsalt=[(0,0),(1.7,0),(1.7,1.7),(0,1.7)]
pointbase=[(0.2,0.2),(1.5,0.2),(0.2,1.5),(1.5,1.5)]
pyramidalt=COLOR(CYAN)(T([1,2,3])([-1.2,1.5,7])(JOIN(AA(MK)(pointsalt))))
pyramidbase=COLOR(BLACK)(T([1,2,3])([-1.2,1.5,7])(JOIN(AA(MK)(pointbase))))
pair_piramidealt=[T(1)(3.16),pyramidalt]
pair_piramidebase=[T(1)(3.16),pyramidbase]

piramidedxalt=STRUCT(NN(13)(pair_piramidealt))
piramidedxbase=STRUCT(NN(13)(pair_piramidebase))

piramidesxalt=T(2)(15.3)(piramidedxalt)
piramidesxbase=T(2)(15.3)(piramidedxbase)

pair_piramideyalt=[T(2)(3.1),pyramidalt]
pair_piramideybase=[T(2)(3.1),pyramidbase]

piramideavantialt=T(1)(3.1)(STRUCT(NN(4)(pair_piramideyalt)))
piramideavantibase=T(1)(3.1)(STRUCT(NN(4)(pair_piramideybase)))

piramidedietroalt=T(1)(38)(piramideavantialt)
piramidedietrobase=T(1)(38)(piramideavantibase)

floor5=STRUCT([piramidedxalt,piramidesxalt,piramideavantialt,piramidedietroalt,piramidedxbase,piramidesxbase,piramideavantibase,piramidedietrobase])

#capitelli
capitello=T([1,2,3])([-1.2,1.5,8])(CUBOID([1.7,1.7]))
pair_capitello=[T(1)(3.16),capitello]
capitellatodx=STRUCT(NN(13)(pair_capitello))
capitellatosx=T(2)(15.3)(capitellatodx)
pair_capitelloy=[T(2)(3.1),capitello]
capitellatoavanti=T(1)(3.1)(STRUCT(NN(4)(pair_capitelloy)))
capitellatodietro=T(1)(38)(capitellatoavanti)
floor6=COLOR(WHITE)(STRUCT([capitellatodx,capitellatosx,capitellatoavanti,capitellatodietro]))

#tetto
#tetto=COLOR(RED)(PROD([floor3,Q(0.02)]))
tetto=COLOR(RED)(floor3)
#tettocrollatop=INSR(PROD)([QUOTE([37]),QUOTE([13.5]),QUOTE([0.02])])

tettocrollatop=INSR(PROD)([QUOTE([37]),QUOTE([13.5])])
tettocrollatopp=T([1,2])([3.3,3.4])(tettocrollatop)

paretep=DIFFERENCE([tetto,tettocrollatopp])
floor7=T(3)(9)(paretep)

two_and_half_model=STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6,floor7])
VIEW(two_and_half_model)
#fine piramide capitello orizzontale
#fine esercizio1





