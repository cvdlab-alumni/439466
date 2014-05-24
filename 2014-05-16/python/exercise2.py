'''
Created on 16/mag/2014

@author: Ms
'''
'''
Created on 16/mag/2014

@author: Ms
'''
from pyplasm import *
import sys
sys.path.insert(0, 'C:\Users\Ms\lar-cc\lib\py') 
from simplexn import *
from larcc import *
from lar2psm import *
from largrid import *
from scipy import sparse
from numpy import *
from morph import *
from mapper import *
from splines import *
from myfont import *
from architectural import *
from sysml import *
import exercise3
'''
Created on 16/mag/2014

@author: Ms
'''
DRAW = COMP([VIEW,STRUCT,MKPOLS])
master = assemblyDiagramInit([7,7,2])([[.3,6,.2,4,.2,20,.3],[.3,7,.2,3,.2,9,.3],[3,.3]])

V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),BLACK,2)
#VIEW(hpc) 
#rimozione celle in eccesso

toRemove = [77,73,45,49,25,21,53,17,63,35,81]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),BLACK,2)
#VIEW(hpc)
#merge unisco le due celle
toMerge = 70
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([5,1,2])([[3,.2,6.8,.2,9.8],[9],[3,.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#to merge
toMerge=90
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([1,3,2])([[6.8],[4.8,.2,4],[3,.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toMerge=82
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([1,3,2])([[.3],[4,1,4],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [102]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)
toRemove = [93,95,99,64,16,19,22,98,92,94,67,43,46,89,55,31,40,86,85,56]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)
#porte salone
toMerge=55
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([5,1,2])([[5,1,8,1,3],[.3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [86,90]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)

toMerge=36
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([3,1,2])([[2,1,1],[.3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [93]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)

toMerge=16
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([3,1,2])([[2,1,3],[.3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [97]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)
toMerge=17
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([3,1,2])([[2,1,3],[.3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [101]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)

toMerge=35
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([3,1,2])([[2,1,3],[.3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [105]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)
toMerge=52
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([11,1,2])([[1,1,1,.2,3,.8,3,.2,5,1,4],[.3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [109,117,125]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)

toMerge=68
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([1,3,2])([[.3],[6,1,1],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [127]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)

toMerge=2
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([1,3,2])([[.3],[3,1,1],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [131]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),BLACK,2)
#VIEW(hpc)
toMerge=9
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([1,5,2])([[.3],[2,1,2.5,1.5,3],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [135,139]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),BLUE,2)
#VIEW(hpc)

toMerge=47
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([7,1,3])([[6,2,1.8,.2,1.8,2,6],[.3],[1,1.3,1]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),BLACK,2)
#VIEW(hpc)

toRemove = [147,153]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)


toMerge=141
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([5,1,1])([[2,1.8,.2,1.8,2],[.3],[1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),BLACK,2)
#VIEW(hpc)

toRemove = [159,161]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
VIEW(hpc)
colar =[1.39,0.69,0.19 ] 
davanzaleP = COLOR(colar)(T([1,2,3])([18.6,-0.3,1])(CUBOID([4.2,0.3,0.2])))
davanzale2 = COLOR(colar)(T([1,2,3])([12,-0.3,1])(CUBOID([3.6,0.3,0.2])))

 
arancione =[2.55,1.40,0.0]    
appartamento1= COLOR(arancione)(STRUCT(MKPOLS(master)))
marmo= [1.39,1.39,1.22]
terrazzo =T(1)(-3)(CUBOID([0.5,7,1]))
lato1 =T(1)(-3)(CUBOID([3,0.5,1]))
lato2 =T([1,2])([-3,7])(CUBOID([3,0.5,1]))
scarlet =[1.40,0.23,0.23]    
pavterr=T(1)(-3)(CUBOID([2.9,7,0.1]))
pav =COLOR(scarlet)(pavterr)
terrazzino=STRUCT([terrazzo,lato1,lato2,pav])
terrazzino2=T(2)(11)(terrazzino)
pavimento=COLOR(marmo)(CUBOID([30.6,19.6,0.2]))
appartamento=STRUCT([pavimento,appartamento1,terrazzino,terrazzino2,davanzaleP,davanzale2])
appartamentoprova=S(2)(-1)(appartamento1)
appartamento2=T(2)(10)(appartamentoprova)
appartamenti=STRUCT([appartamento1,appartamento2])
#esercizio2
arancione =[2.55,1.40,0.0]    
appartamento1= COLOR(arancione)(STRUCT(MKPOLS(master)))
marmo= [1.39,1.39,1.22]
pavimento=COLOR(RED)(CUBOID([30.6,19.6,0.2]))
terrazzo =T(1)(-3)(CUBOID([0.5,7,1]))
lato1 =T(1)(-3)(CUBOID([3,0.5,1]))
lato2 =T([1,2])([-3,7])(CUBOID([3,0.5,1]))
scarlet =[1.40,0.23,0.23]    
pavterr=T(1)(-3)(CUBOID([2.9,7,0.1]))
pav =COLOR(scarlet)(pavterr)
 
terrazzino=COLOR(colar)(STRUCT([terrazzo,lato1,lato2,pav]))
terrazzino2=COLOR(colar)(T(2)(11)(terrazzino))
appartamento=STRUCT([pavimento,appartamento1,terrazzino,terrazzino2,davanzaleP,davanzale2])
appartamentoprova=S(2)(-1)(appartamento1)
appartamento2=T(2)(10)(appartamentoprova)
appartamenti=STRUCT([appartamento1,appartamento2])
VIEW(appartamento)
appartamentoprova=S(2)(-1)(appartamento)
appartamento2=T(2)(40)(appartamentoprova)
appartamenti=STRUCT([appartamento,appartamento2])
appartamentiFronte_1=T(1)(30)(appartamenti)
appartamentiFronte=R([1,2])(PI)(appartamentiFronte_1)
appartamenti2=T([1,2])([120,40])(appartamentiFronte)
ascensore=T([1,2])([12,18])(CUBOID([5,5,0.2]))
pavimento2=CUBOID([30,40,0.2])
piano1=T(1)(30)(DIFFERENCE([pavimento2,ascensore]))
gold=[1.47,1.12,2.19]
piano=COLOR(gold)(piano1)
muretto1=larCuboids([30,1,12])
orangeR=[1.39,0.37,0]    
muretto=COLOR(orangeR)(STRUCT(MKPOLS(muretto1)))
murettoCanc =larCuboids([1,2,2])
Cmuretto = STRUCT(MKPOLS(murettoCanc))
Cmurettoprov=T(1)(15)(Cmuretto)
murettofin = DIFFERENCE([muretto,Cmurettoprov])
murettofin2 = COLOR(arancione)(T(1)(30)(murettofin))
murettonord=COLOR(arancione)(T(2)(39)(murettofin2))
pianerottolo=STRUCT([appartamenti,appartamenti2,piano])
primopiano=T(3)(3)(pianerottolo)
secondopiano=T(3)(3)(primopiano)
terzopiano=T(3)(3)(secondopiano)
stair= spiralStair(0.2,2.,1,0.1,2.,10.,18)
scala1= T([1,2])([45,21])(STRUCT(MKPOLS(stair)))
scala=COLOR(GREEN)(scala1)
ingresso1=T([1,2,3])([30,40,-1])(CUBOID([30,30,0.3]))
ingresso=COLOR(BLACK)(ingresso1)
c = [[0,0],[1,1],[2,2], [1,4], [0,2], [-1,4],[-2,2],[-1,1],[0,0]];
k = [0,0,0,0,1,2,3,4,5,6,7,7,8]
cuoreOrigine = COLOR(RED)(NUBSPLINE(3)(k)(c))
cuore=T([1,2,3])([32,42,-9.7])(cuoreOrigine)
cuore1=T([1,2,3])([58,42,-9.7])(cuoreOrigine)
cuore2=T([1,2,3])([45,42,-9.7])(cuoreOrigine)
model = STRUCT(MKPOLS(larCylinder(.5,6.)([32,1])))
tronco=T([1,2,3])([58,55,-9.7])(model)
model1 = larSphere(4,2*PI,PI)([6,12])
foglie1=T([1,2,3])([58,55,-3.7])(STRUCT(MKPOLS(model1)))
foglie=COLOR(GREEN)(foglie1)
marrone =[1.39,0.62,0.47]
albero=COLOR(marrone)(STRUCT([tronco,foglie]))
albero2=T(1)(-25)(albero)
gradino1p = larCuboids([30,10,1])
gradino2p= larCuboids([30,8,1])
gradino3p=larCuboids([30,6,1])
gradino2 =larApply(t(0,0,1))(gradino2p)
gradino3 =larApply(t(0,0,2))(gradino3p)
gradiniP = STRUCT(MKPOLS(gradino1p)+MKPOLS(gradino2)+ MKPOLS(gradino3))
gradini = T([1,2,3])([30,40,-2])(gradiniP)

cuori =T(3)(9)(STRUCT([cuore,cuore1,cuore2]))
alberi =T(3)(8)(STRUCT([albero,albero2]))
model = larRing(2, 1.3)([36,2])
mattonell=larApply(t(57,45))(model)
mattonella = STRUCT(MKPOLS(mattonell))
base= [T(1)(5),mattonella]
matt=STRUCT(NN(8)(base))
matt2p =S(1)(-1)(matt)
matt2 = T(1)(90)(matt2p)
basem= [T(2)(5),mattonella]
mattonelleovest=(STRUCT(NN(18)(basem)))
mattonelleest =S(1)(-1)(mattonelleovest)
matt3=T([1,2])([50,-90])(mattonelleest)
matt4=T([1,2])([40,-90])(mattonelleovest)
app = T([1,2])([16,50])(STRUCT([primopiano,matt,matt2,matt4,matt3,secondopiano,terzopiano,murettofin2,murettonord,pianerottolo,ingresso,scala,alberi,cuori]))
garden = assemblyDiagramInit([4,4,2])([[1,70,50,1],[1,70,50,1],[3,5]])
V,CV = garden
hpc = SKEL_1(STRUCT(MKPOLS(garden)))
hpc = cellNumbering (garden,hpc)(range(len(CV)),BLACK,2)
#VIEW(hpc)
toRemove = [13,21,19,21,11]
garden = garden[0], [cell for k,cell in enumerate(garden[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(garden)))
hpc = cellNumbering (garden,hpc)(range(len(garden[1])),BLUE,2)
toMerge=12
cell = MKPOL([garden[0],[[v+1 for v in  garden[1][toMerge]]],None])
VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([3,1,1])([[58,4,8],[1.6],[3]])
garden = diagram2cell(diagram,garden,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(garden)))
hpc = cellNumbering (garden,hpc)(range(len(garden[1])),CYAN,2)
toRemove = [28]
garden = garden[0], [cell for k,cell in enumerate(garden[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(garden)))
hpc = cellNumbering (garden,hpc)(range(len(garden[1])),BLUE,2)
VIEW(hpc)
portone =COLOR(BLACK)(T([1,2,3])([58.5,121,-5])(CUBOID([4,0.1,3])))
knots = [0,0,0,1,1,2,2,3,3,4,4,4]
_p=math.sqrt(2)/2.0
controls = [[-1,0,1], [-_p,_p,_p], [0,1,1], [_p,_p,_p],[1,0,1], [_p,-_p,_p],
[0,-1,1], [-_p,-_p,_p], [-1,0,1]]
c1 = BEZIER(S1)([[-1,0,0,1],[-1,0,1,1]])
c2 = BEZIER(S1)([[-_p,_p,0,_p],[-_p,_p,_p,_p]])
c3 = BEZIER(S1)([[0,1,0,1],[0,1,1,1]])
c4 = BEZIER(S1)([[_p,_p,0,_p],[_p,_p,_p,_p]])
c5 = BEZIER(S1)([[1,0,0,1],[1,0,1,1]])
c6 = BEZIER(S1)([[_p,-_p,0,_p],[_p,-_p,_p,_p]])
c7 = BEZIER(S1)([[0,-1,0,1],[0,-1,1,1]])
c8 = BEZIER(S1)([[-_p,-_p,0,_p],[-_p,-_p,_p,_p]])
c9 = BEZIER(S1)([[-1,0,0,1],[-1,0,1,1]])
controls = [c1,c2,c3,c4,c5,c6,c7,c8,c9]
tnurbs = TNURBS(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
dom = larIntervals([2,36],"simplex")([1,4])
vasotrasl = larMap(tnurbs)(dom)
vasoPyp = COLOR(BROWN)(STRUCT(MKPOLS(vasotrasl)))
model1 = larBall(1)()
modelT =larApply(t(0,0,1))(model1)
cespuglio =COLOR(YELLOW)(STRUCT(MKPOLS(modelT)))
lampada = T([1,2,3])([-2,12,1])(STRUCT([vasoPyp,cespuglio]))
prato = T(3)(-1)(COLOR(GREEN)(CUBOID([120,120])))
perimetro=T(3)(-5)( COLOR(colar)(STRUCT(MKPOLS(garden))))
base= [T(1)(18),lampada]
lampade=STRUCT(NN(6)(base))
tavolo = T(3)(1)(CUBOID([1.2,1.2,0.1]))
gamba1=CUBOID([0.2,0.2,1])
gamba2 = T(1)(1)(gamba1)
gamba3 =T(2)(1)(gamba1)
gamba4 =T ([1,2])([1,1])(gamba1)
gambe = STRUCT([gamba1,gamba2,gamba3,gamba4])
tavolino =T(1)(2)(STRUCT([gambe,tavolo]))
sedile =T(3)(0.6)(CUBOID([0.5,0.5,0.1]))
schienale =T(3)(0.7)(CUBOID([0.5,0.1,0.7]))
gambasedia1 =CUBOID([0.1,0.1,0.6])
gambasedia2 =T(1)(0.4)(gambasedia1)
gambasedia3 =T(2)(0.4)(gambasedia1)
gambasedia4 =T([1,2])([0.4,0.4])(gambasedia1)
gambesedie =STRUCT([gambasedia1,gambasedia2,gambasedia3,gambasedia4])
sedia = T(1)(1)(STRUCT([sedile,schienale,gambesedie]))
sedia2 =R([1,2])(PI/2)(sedia)
sediafin =T([1,2])([4,0.5])(sedia2)
picnic =T([1,2])([15,20])(STRUCT([sedia,sediafin,tavolino]))
tetto1 =larCuboids([92,40,1])
tettotrasl=larApply(t(15,50,12))(tetto1)
tetto =COLOR(arancione)(STRUCT(MKPOLS(tettotrasl)))
puntipiramide=[[0,0,0],[0,40,0],[92,0,0],[92,40,0],[15,15,8],[15,25,8],[77,15,8],[77,25,8]]
piramide=COLOR(BROWN)(T([1,2,3])([15,50,12])((JOIN(AA(MK)(puntipiramide)))))
erba=COLOR(colar)(CUBOID([150,68]))
riga=COLOR(WHITE)(QUOTE([-75,1]))
rigacentrale=PROD([riga,Q(68)])
rete=PROD([rigacentrale,Q(2)])
rigabattuta =T([1,2])([42,34])(COLOR(WHITE)(CUBOID([68,1,0.2])))
rigaMeta1= T(1)(34)(rigacentrale)
rigaMeta2=T(1)(-34)(rigacentrale)
campoGrande =T([1,2,3])([5,5,3])(STRUCT([erba,rigacentrale,rigabattuta,rigaMeta1,rigaMeta2,rete]))
campo =S([1,2,3])([0.3,0.3,0.3])(campoGrande)
tennis =T([1,2])([35,20])(campo)

VIEW((STRUCT([app,prato,perimetro,lampade,portone,picnic,tetto,piramide,tennis])))


