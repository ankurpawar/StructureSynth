// 60 and 30 pythagoras tree with flipping on each level
set maxdepth 13

R1

rule R1 md 1 > R2{
{ y 0.842  x 0.5915  s 0.5  rz -60 h 10 }R1
{ y 1.092  x -0.3415  s 0.866  rz 30 h 10 }R1
 box
}

rule R2 md 1 > R1{
{ y 0.842  x -0.5915  s 0.5  rz 60 h 10 }R2
{ y 1.092  x 0.3415  s 0.866  rz -30 h 10 }R2
 box
}

