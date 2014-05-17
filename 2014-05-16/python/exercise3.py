'''
Created on 17/mag/2014

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

DRAW = COMP([VIEW,STRUCT,MKPOLS])
master = assemblyDiagramInit([7,7,2])([[.3,6,.2,4,.2,20,.3],[.3,7,.2,3,.2,9,.3],[3,.3]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),BLACK,2)

VIEW(hpc)

toRemove = [80]
toMerge = 80
diagram = assemblyDiagramInit([5,1,2])([[3,.2,6.8,.2,9.8],[9],[3,.3]])


#funzione rimuovi
def Remove(toRemove,master):
    master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
    hpc = SKEL_1(STRUCT(MKPOLS(master)))
    hpc=Enumerate(master,hpc)
    return hpc

def Enumerate(master,hpc):
    hpc = cellNumbering (master,hpc)(range(len(master[1])),BLACK,2)
    VIEW(hpc)
    return hpc


def Merge(diagram,toMerge,master):
    cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
    master = diagram2cell(diagram,master,toMerge)
    hpc = SKEL_1(STRUCT(MKPOLS(master)))
    hpc=Enumerate(master,hpc)
    return hpc

hpc= Remove(toRemove,master)
hpc=Merge(diagram,toMerge,master)

base= [T(1)(30),hpc]
master=STRUCT(NN(3)(base))
VIEW(master)