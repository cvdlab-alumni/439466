'''
Created on 22/mar/2014

@author: Ms
'''
from pyplasm import *
import esercizio1

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

floor5=T(3)(2)(STRUCT([piramidedxalt,piramidesxalt,piramideavantialt,piramidedietroalt,piramidedxbase,piramidesxbase,piramideavantibase,piramidedietrobase]))

#capitelli
capitello=T([1,2,3])([-1.2,1.5,8])(CUBOID([1.7,1.7]))
pair_capitello=[T(1)(3.16),capitello]
capitellatodx=STRUCT(NN(13)(pair_capitello))
capitellatosx=T(2)(15.3)(capitellatodx)
pair_capitelloy=[T(2)(3.1),capitello]
capitellatoavanti=T(1)(3.1)(STRUCT(NN(4)(pair_capitelloy)))
capitellatodietro=T(1)(38)(capitellatoavanti)
floor6=T(3)(2)(COLOR(WHITE)(STRUCT([capitellatodx,capitellatosx,capitellatoavanti,capitellatodietro])))

#tetto

tetto=COLOR(RED)(floor3)

tettocrollatop=INSR(PROD)([QUOTE([37]),QUOTE([13.5])])
tettocrollatopp=T([1,2])([3.3,3.4])(tettocrollatop)

paretep=DIFFERENCE([tetto,tettocrollatopp])
floor7=T(3)(12)(paretep)

two_and_half_model=STRUCT([floor0,floor1,floor2,floor3,floor4,floor5,floor6,floor7])
#VIEW(two_and_half_model)
#fine piramide capitello orizzontale
#fine esercizio1


#esercizio 2
#muriInterni2D
muroest=T(2)(5.5)(INSR(PROD)([(QUOTE([-9,26.7,-9])),QUOTE([0]),QUOTE([7])]))

muroovest=T(2)(9)(muroest)
murosud=T(1)(13)(INSR(PROD)([QUOTE([0]),QUOTE([-5.3,9,-4.5]),QUOTE([7])]))
murointerno4=T(1)(30)(INSR(PROD)([QUOTE([0]),QUOTE([-5.4,3.3,-2.4,3.3,-4.5]),QUOTE([7])]))
murointerno5=T(1)(32)(INSR(PROD)([QUOTE([0]),QUOTE([-5.4,3.3,-2.4,3.3,-4.5]),QUOTE([7])]))

#gradini2D
primoGradinolung2D=QUOTE([43])
primoGradinolarg2D=QUOTE([0])
primogradino2D=COLOR(BLACK)(INSR(PROD)([primoGradinolung2D,QUOTE([0]),Q(0.6)]))
secondoGradinolung2D=QUOTE([42])
secondoGradinolarg2D=QUOTE([0])
secondogradinop2D= INSR(PROD)([secondoGradinolung2D,secondoGradinolarg2D,QUOTE([1.2])])
secondogradinopp2D= T(1)(0.5)(secondogradinop2D)
secondogradino2D=COLOR(RED)(T(2)(0.5)(secondogradinopp2D))
terzoGradinolung2D=QUOTE([41])
terzoGradinolarg2D=QUOTE([0])
terzogradinop2D=INSR(PROD)([terzoGradinolung2D,terzoGradinolarg2D,QUOTE([1.8])])
terzogradinopp2D= T(1)(1.5)(terzogradinop2D)
terzogradino2D=COLOR(YELLOW)(T(2)(1)(terzogradinopp2D))
quartoGradinolung2D=QUOTE([40])
quartoGradinolarg2D=QUOTE([0])
quartogradinop2D=INSR(PROD)([quartoGradinolung2D,quartoGradinolarg2D,QUOTE([2.4])])
quartogradinopp2D= T(1)(1.5)(quartogradinop2D)
quartogradino2D=COLOR(GREEN)(T(2)(1.5)(quartogradinopp2D))
primogradinodx2D=T(2)(20)(primogradino2D)
secondogradinodx2D=T(2)(19)(secondogradino2D)
terzogradinodx2D=T(2)(18)(terzogradino2D)
quartogradinodx2D=T(2)(17)(quartogradino2D)

#gradini da davanti e da dietro
Nprimogradino2D=COLOR(BLACK)(INSR(PROD)([QUOTE([0]),QUOTE([20]),Q(0.6)]))
Nsecondogradinop2D= INSR(PROD)([QUOTE([0]),QUOTE([19]),QUOTE([1.2])])
Nsecondogradinopp2D= T(1)(0.5)(Nsecondogradinop2D)
Nsecondogradino2D=COLOR(RED)(T(2)(0.5)(Nsecondogradinopp2D))
Nterzogradinop2D=INSR(PROD)([QUOTE([0]),QUOTE([18]),QUOTE([1.8])])
Nterzogradinopp2D= T(1)(1.5)(Nterzogradinop2D)
Nterzogradino2D=COLOR(YELLOW)(T([1,2])([-0.75,1])(Nterzogradinopp2D))
Nquartogradinop2D=INSR(PROD)([QUOTE([0]),QUOTE([17]),QUOTE([2.4])])
Nquartogradinopp2D= T(1)(1.5)(Nquartogradinop2D)
Nquartogradino2D=COLOR(GREEN)(T([1,2])([-0.5,1.5])(Nquartogradinopp2D))
Ngradini2D=STRUCT([Nprimogradino2D,Nsecondogradino2D,Nterzogradino2D,Nquartogradino2D])
Ndietrop=T(1)(43)(Nprimogradino2D)
Ndietros=T(1)(42.2)(Nsecondogradino2D)
Ndietrot=T(1)(41.5)(Nterzogradino2D)
Ndietroq=T(1)(41)(Nquartogradino2D)

gradiniovest=T(2)(-0.8)(STRUCT([primogradino2D,secondogradino2D,terzogradino2D,quartogradino2D]))
gradiniest=STRUCT([primogradinodx2D,secondogradinodx2D,terzogradinodx2D,quartogradinodx2D])
gradininord=STRUCT([Nprimogradino2D,Nsecondogradino2D,Nterzogradino2D,Nquartogradino2D])
gradinisud=STRUCT([Ndietrop,Ndietros,Ndietrot,Ndietroq])


#colonnato2D
colonnato2=T([1,2])([-1.2,1.5])(CUBOID([1.4,0,8]))
pair_col=[T(1)(3.16),colonnato2]
colonnatoovest=T(2)(-0.2)(STRUCT(NN(13)(pair_col)))
colonnatoest=T(2)(17)(colonnatoovest)
colonnatocentr=CUBOID([0,1.4,8])
pair_coly=[T(2)(3.1),colonnatocentr]
colonnatonord=T([1,2])([1.5,-1.7])(STRUCT(NN(6)(pair_coly)))
colonnatosud=T([1,2])([40,0.3])(colonnatonord)
colonne2D=COLOR(WHITE)(T([1,2])([7.1,4.3])(STRUCT(NN(2)(pair_coly))))
colonne2D2=COLOR(WHITE)(T(1)(29)(colonne2D))


#capitelli
capitellolat=T([1,2,3])([-1.2,1.5,9.2])(CUBOID([1.4,0,1.4]))
pair_capitello2D=[T(1)(3.16),capitellolat]
capitellicentrali2D=(CUBOID([0,1.4,1.4]))
pair_capitelloy2D=[T(2)(3.1),capitellicentrali2D]
capitellatoovest2D=STRUCT(NN(13)(pair_capitello2D))
capitellatoest2D=T(2)(17)(capitellatoovest2D)
capitellatonord2D=T([1,2,3])([1.5,-1.7,9.2])(STRUCT(NN(6)(pair_capitelloy2D)))
capitellatosud2D=T(1)(40)(capitellatonord2D)
################
#perimetrosuperiore2D
latoovest=T([1,2,3])([1.4,1.1,10.7])(INSR(PROD)([QUOTE([40]),QUOTE([0.01]),QUOTE([1.5])]))
latoest=T(2)(17)(latoovest)
latonord=T([1,2,3])([1.5,1.2,11])(INSR(PROD)([QUOTE([0.01]),QUOTE([17]),QUOTE([1.5])]))
latosud=T(1)(40)(latonord)
lati=STRUCT([latoovest,latoest,latonord,latosud])
#frontone2D
pointsfrontone=[[0,0.2,10.5],[0,18.6,10.5],[0,10,14.5]]
frontone2Dnordgrande=T(1)(1.5)(COLOR(CYAN)(JOIN(AA(MK)(pointsfrontone))))
frontone2Dsudgrande=T(1)(40)(frontone2Dnordgrande)
pointsfrontone2=[[1,1,10.7],[1,17.2,10.7],[1,10,14]]
scuro=[1.39,0.90,0.43]

frontone2Dnordpiccolo=T(1)(0.5)((COLOR(scuro)(JOIN(AA(MK)(pointsfrontone2)))))
frontone2Dsudpiccolo=T(1)(40)(frontone2Dnordpiccolo)
frontoninord=T(3)(2)(STRUCT([frontone2Dnordgrande,frontone2Dnordpiccolo]))
frontonisud=T(3)(2)(STRUCT([frontone2Dsudgrande,frontone2Dsudpiccolo]))

#############
#piramidi dei capitelli
pPirlcorto=[[0,0,9.2],[0,1.4,9.2],[0,1.2,8.2],[0,0.2,8.2]]
pPirllungo=[[0,0,9.2],[1.4,0,9.2],[1.2,0,8.2],[0.2,0,8.2]]
pyramidlungo2D=T([1,2])([-1.2,1.5])(JOIN(AA(MK)(pPirllungo)))
pyramidbase2D=(JOIN(AA(MK)(pPirlcorto)))
pair_pir1=[T(1)(3.16),pyramidlungo2D]
pair_piramidebase1=[T(2)(3.16),pyramidbase2D]
piramidedxalt1=STRUCT(NN(13)(pair_pir1))
piramidedxbase1=T([1,2,3])([1.5,-1.81,-0.1])(STRUCT(NN(6)(pair_piramidebase1)))
piramidesxalt1=T(2)(17)(piramidedxalt1)
piramidesxbase1=T(1)(40)(piramidedxbase1)
pair_piramideyalt1=[T(2)(3.1),pyramidalt]
pair_piramideybase1=[T(2)(3.1),pyramidbase]
piramideavantialt1=T(1)(3.1)(STRUCT(NN(4)(pair_piramideyalt1)))
piramideavantibase1=T(1)(3.1)(STRUCT(NN(4)(pair_piramideybase1)))
piramidedietroalt1=T(1)(38)(piramideavantialt1)
piramidedietrobase1=T(1)(38)(piramideavantibase1)
piramidefin2D=STRUCT([piramidedxalt1,piramidesxalt1,piramideavantialt1,piramidedietroalt1,piramidedxbase1,piramidesxbase1,piramideavantibase1,piramidedietrobase1])

north=STRUCT([piramidedxbase1,latonord,frontoninord,capitellatonord2D,colonnatonord,gradininord])
sud= STRUCT([piramidesxbase1,latosud,frontonisud,capitellatosud2D,colonnatosud,gradinisud])
est=(STRUCT([piramidedxalt1,latoest,capitellatoest2D,colonnatoest,gradiniest]))
ovest=(STRUCT([piramidesxalt1,latoovest,capitellatoovest2D,colonnatoovest,gradiniovest]))
interno=STRUCT([muroest,muroovest,murosud,murointerno4,murointerno5])
colonneinterne=STRUCT([colonne2D,colonne2D2])
vertical=(STRUCT([north,sud,est,ovest,interno,colonneinterne]))
mock_up_3D=STRUCT([vertical,two_and_half_model])
VIEW(mock_up_3D)
