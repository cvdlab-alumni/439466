'''
Created on 11/apr/2014

@author: Ms
'''
from pyplasm import *

import exercise3
#alberi
tronco=COLOR(BROWN)(CYLINDER([1,4])(32))
cono1=COLOR(GREEN)(CONE([2,10])(32))
cono=T(3)(3)(cono1)
albero=T([1,2,3])([-30,-30,-4])(STRUCT([tronco,cono]))
alberid=[T(1)(6),albero]
alberi= STRUCT(NN(20)(alberid))
alberisin=T(2)(15)(S(2)(-1)(alberi))
alberocas1=T([1,2,3])([120,40,-4])(STRUCT([tronco,cono]))
alberocas2=T([1,2,3])([189,20,-4])(STRUCT([tronco,cono]))
alberocas3=T([1,2,3])([170,43,-4])(STRUCT([tronco,cono]))
alberocas5=T(2)(8)(S(2)(-1)(alberocas2))
albericasuali=STRUCT([alberocas1,alberocas2,alberocas3,alberocas5])
#fine alberi
#panchine
gamba1=T([1,2])([1,0.2])(CYLINDER([0.2,1.5])(32))
gamba2=S(1)(-1)(gamba1)
gamba3=S(2)(-1)(gamba1)
gamba4=S(2)(-1)(gamba2)
gambe=STRUCT([gamba1,gamba2,gamba3,gamba4])
piano=T([1,2,3])([-2,-1,1.5])(CUBOID(([4,2,0.3])))
panchina=(STRUCT([piano,gambe]))
panchinad=[T(2)(5),panchina]
panchine= T([1,3])([-23,-4.2])(STRUCT(NN(4)(panchinad)))
#fine panchine
#lampioni da giardino
lampione=COLOR(YELLOW)(T([1,2])([1,-4])(CYLINDER([1,1])(32)))
lampioned=[T(1)(6),lampione]
lampionid= T([1,2,3])([-10,-8,-4.4])(STRUCT(NN(10)(lampioned)))
lampionis=T(2)(20)(S(2)(-1)(lampionid))
lampioni=STRUCT([lampionid,lampionis])
#fine lampioni da giardino
#campettocalcio
def semidomain(n): 
    return INTERVALS(PI)(n)
def domain(n): 
    return INTERVALS(2*PI)(n) #prende una riga da 0 a 2Pi e la divide in n pezzi
def sphere1(p):
    return [9.15*COS(p[0]), 9.15*SIN(p[0])] 
palo1=CYLINDER([0.1,3])(32)
palo2=T(2)(8)(CYLINDER([0.1,3])(32))
traversa=T([2,3])([-0.1,3])(CUBOID([0.2,8,0.1]))
porta1=T(2)(30)(STRUCT([palo1,palo2,traversa]))
porta2=T(1)(150)(porta1)
erba=COLOR(GREEN)(CUBOID([150,68]))
riga=COLOR(WHITE)(QUOTE([-75,1]))
rigacentrale=PROD([riga,Q(68)])
areapiccx=QUOTE([-6,0.1])
areapiccnord=PROD([areapiccx,QUOTE([-25,18,-25])])
areapiccsud=T(1)(138)(areapiccnord)
area=[0,2.38,0 ]   
arearigorenord=COLOR(area)(PROD([QUOTE([17]),QUOTE([-14,40,-14])]))
arearigoresud=T(1)(150)(S(1)(-1)(arearigorenord))
cerchio=T([1,2])([75,34])((MAP(sphere1)(domain(30))))
dischettonord=PROD([QUOTE([-11,0.2]),QUOTE([-34,0.2])])
dischettosud=T(1)(128)(dischettonord)
discoareanord=T([1,2])([-34,17])((MAP(sphere1)(semidomain(30))))
disco=R([1,2])(-PI/2)(discoareanord)
discosud=T(1)(150)(S(1)(-1)(disco))
albericamp= T([1,2,3])([24,30,4])(STRUCT(NN(40)(alberid)))
albericamp2=T(2)(68)(albericamp)
campetto=T([1,2,3])([-70,-110,-4.4])(STRUCT([albericamp,albericamp2,porta1,porta2,erba,disco,discosud,rigacentrale,areapiccnord,areapiccsud,arearigorenord,arearigoresud,cerchio,dischettonord,dischettosud]))
#fine campetto
#recinto
terraP=COLOR(BROWN)(CUBOID([90,70,0.1]))
#recinto-pecore
corpopecora=T(3)(0.1)(CUBOID([0.5,0.4,0.2]))
zampapecora=T([1,2])([0.05,0.05])(CUBOID([0.1,0.1,0.1]))
zampa2=S(1)(-1)(zampapecora)
zampa3=S(2)(-1)(zampapecora)
zampa4=S(2)(-1)(zampa2)
testa=COLOR(BLACK)(T([1,2,3])([0.65,0.3,0.15])(zampa4))
zampe=T([1,2])([0.25,0.2])(COLOR(BLACK)(STRUCT([zampapecora,zampa2,zampa3,zampa4])))
pecora1=STRUCT([corpopecora,zampe,testa])
pecorad=[T(1)(2),pecora1]
pecore= S([1,2,3])([2,2,2])(T(2)(20)(STRUCT(NN(15)(pecorad))))
pecore1=T(2)(10)(pecore)
pecore2=T(2)(-5)(pecore)
pecore3=T([1,2])([10,-10])(pecore)
pecore4=T([1,2])([5,-20])(pecore)
alberidivisori=[T(2)(6),albero]
alberidiv=T([1,2,3])([32,28,4])(STRUCT(NN(12)(alberidivisori)))
alberidiv2=T(1)(90)(alberidiv)
terra=T([1,2,3])([80,-110,-4.4])(STRUCT([pecore,pecore3,terraP,pecore1,pecore2,pecore4,alberidiv,alberidiv2]))
#fine recinto e pecore
urbanArea=STRUCT([terra,campetto,lampioni,panchine,alberi,exercise3.smallarea,alberisin,albericasuali])
VIEW(urbanArea)