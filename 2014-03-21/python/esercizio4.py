'''
Created on 22/mar/2014

@author: Ms
'''
from pyplasm import *
import esercizio3

dom1D = INTERVALS(1)(1)
dom3D = INSR(PROD)([INTERVALS(11*PI)(64), dom1D, dom1D])
def scala1(p):
    alpha,r,h = p
    return [r*COS(alpha), r*SIN(alpha), alpha/(2*PI)]
def scala2(p):
    alpha,r,h = p
    return [2*r*COS(alpha), 2*r*SIN(alpha), alpha/(2*PI) + 0.01]
obj1 = STRUCT([MAP(scala1)(dom3D), MAP(scala2)(dom3D)])
obj2 = MAP(BEZIER(S3)([scala1,scala2]))(dom3D)
scala=T([1,2,3])([6,14.5,2.5])(STRUCT([obj1,obj2]))
chocolate=[1.39,0.69,0.1 ]  
scalac=COLOR(chocolate)(scala)



VIEW((STRUCT([scalac,esercizio3.solid_model_3D])))