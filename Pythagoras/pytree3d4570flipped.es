// 3d pytree rand flip 120 154 seed 50
set md 14
//set colorpool list:#4f9,#ff0,#0f9,#9f0,#8f3,#4f6
set colorpool list:white,#f9b,#fb9,#b9f,#9bf,#bf9,#9fb

R1

// 45 degree
rule R1 w 2 md 1 > R1{
{ y 1  x 0.5  s 0.707  rz -45 h 10 }R1
{ y 1  x -0.5  s 0.707  rz 45 h 10 }R1
 square
}

 rule R1 w 2 md 1 > R1{
{ y 1  z 0.5   s 0.707   rx 45 h 10 }R1
{ y 1  z -0.5  s 0.707  rx -45 h 10 }R1 
square
}

//70 20 degree tree flipped each level
rule R1 w 15 md 5 > R2 {
{ y 0.719  x 0.6022  s 0.3420  rz -70 } R1
{ y 1.102  x -0.2192  s 0.9397  rz 20 } R1
 square
}

rule R2 w 15 md 2 > R1 {
{ y 0.719  x -0.6022  s 0.3420  rz 70 } R2
{ y 1.102  x 0.2192  s 0.9397  rz -20 } R2
 square
}

//70 20 3d degree tree flipped each level
rule R1 w 15 md 2 > R2 {
{ y 0.719  z -0.6022  s 0.3420  rx -70 } R1
{ y 1.102  z 0.2192  s 0.9397  rx 20 } R1
 square
}

rule R2 w 15 md 3 > R1 {
{ y 0.719  z 0.6022  s 0.3420  rx 70 } R2
{ y 1.102  z -0.2192  s 0.9397  rx -20 } R2
 square
}

rule square w 10 {
{ color random } box
}