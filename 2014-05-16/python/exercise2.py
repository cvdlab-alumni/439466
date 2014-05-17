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

'''
Created on 16/mag/2014

@author: Ms
'''
DRAW = COMP([VIEW,STRUCT,MKPOLS])
master = assemblyDiagramInit([7,7,2])([[.3,6,.2,4,.2,20,.3],[.3,7,.2,3,.2,9,.3],[3,.3]])

V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),BLACK,2)
VIEW(hpc) 
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
VIEW(hpc)

toMerge=2
cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([1,3,2])([[.3],[3,1,1],[2,1.3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)
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
diagram = assemblyDiagramInit([5,1,3])([[6,2,4,2,6],[.3],[1,1.3,1]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [144,150]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),BLUE,2)
VIEW(hpc)
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
appartamento=STRUCT([pavimento,appartamento1,terrazzino,terrazzino2])




appartamentoprova=S(2)(-1)(appartamento1)
appartamento2=T(2)(10)(appartamentoprova)
appartamenti=STRUCT([appartamento1,appartamento2])

VIEW(appartamento)

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
colar =[0,0,1.56]

terrazzino=COLOR(colar)(STRUCT([terrazzo,lato1,lato2,pav]))
terrazzino2=COLOR(colar)(T(2)(11)(terrazzino))


appartamento=STRUCT([pavimento,appartamento1,terrazzino,terrazzino2])





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
muretto1=T(1)(30)(CUBOID([30,1,1]))
orangeR=[1.39,0.37,0]    
muretto=COLOR(orangeR)(muretto1)
murettonord=T(2)(40)(muretto)
pianerottolo=STRUCT([appartamenti,appartamenti2,piano,muretto,murettonord])
primopiano=T(3)(3)(pianerottolo)
secondopiano=T(3)(3)(primopiano)
terzopiano=T(3)(3)(secondopiano)
stair= spiralStair(0.2,2.,1,0.1,2.,10.,18)
scala1= T([1,2])([45,21])(STRUCT(MKPOLS(stair)))
scala=COLOR(GREEN)(scala1)
ingresso1=T([1,2])([30,40])(CUBOID([30,30,0.3]))
ingresso=COLOR(BLACK)(ingresso1)
c = [[0,0],[1,1],[2,2], [1,4], [0,2], [-1,4],[-2,2],[-1,1],[0,0]];
k = [0,0,0,0,1,2,3,4,5,6,7,7,8]
cuoreOrigine = COLOR(RED)(NUBSPLINE(3)(k)(c))
cuore=T([1,2,3])([32,42,0.3])(cuoreOrigine)
cuore1=T([1,2,3])([58,42,0.3])(cuoreOrigine)
cuore2=T([1,2,3])([45,42,0.3])(cuoreOrigine)
model = STRUCT(MKPOLS(larCylinder(.5,6.)([32,1])))
tronco=T([1,2,3])([58,55,0.3])(model)
model1 = larSphere(1,2*PI,PI)([6,12])
foglie1=T([1,2,3])([58,55,6.3])(STRUCT(MKPOLS(model1)))
foglie=COLOR(GREEN)(foglie1)
marrone =[1.39,0.62,0.47]
albero=COLOR(marrone)(STRUCT([tronco,foglie]))
albero2=T(1)(-25)(albero)

VIEW((STRUCT([primopiano,secondopiano,terzopiano,pianerottolo,scala,ingresso,cuore,cuore1,cuore2,albero,albero2])))




