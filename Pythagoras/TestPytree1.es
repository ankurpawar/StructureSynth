// 3d pythagoras tree with random placement
set maxdepth 12

R1

rule R1 md 1 > R1{
{ y 1  x 0.5  s 0.707  rz -45 h 10 }R1
{ y 1  x -0.5  s 0.707  rz 45 h 10 }R1
 box
}

 rule R1 md 1 > R1{
{ y 1  z 0.5   s 0.707   rx 45 h 10 }R1
{ y 1  z -0.5  s 0.707  rx -45 h 10 }R1 
box
} 

