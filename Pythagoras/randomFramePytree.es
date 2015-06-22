// 3d pytree rand flip 120 154 seed 50
set md 12
set colorpool list:white,#f00,#0f0,#00f,#ff0,#0ff,#f0f
set background #fff

{color random}R1


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
{a 0.5 color random s 0.91 } d
{ color #fff s 0.91} frame
//sphere
}


//{ color #fff } frame
//{ } d




rule d{
{ s 0.1 0.9 0.9 x 5 a 0.5} box
{ s 0.1 0.9 0.9 x -5 a 0.5} box

{ s 0.9 0.1 0.9 y 5 a 0.5} box
{ s 0.9 0.1 0.9 y -5 a 0.5} box

{ s 0.9 0.9 0.1 z 5 a 0.5} box
{ s 0.9 0.9 0.1 z -5 a 0.5} box
}

rule frame  {
{ s 0.1 1.1 0.1 x 5  z 5 } box
{ s 0.1 1.1 0.1 x 5  z -5 } box
{ s 0.1 1.1 0.1 x -5  z 5 } box
{ s 0.1 1.1 0.1 x -5  z -5 } box

{ s 1 0.1 0.1 y 5  z 5 } box
{ s 1 0.1 0.1 y 5  z -5 } box
{ s 1 0.1 0.1 y -5  z 5 } box
{ s 1 0.1 0.1 y -5  z -5 } box

{ s 0.1 0.1 1 y 5  x 5 } box
{ s 0.1 0.1 1 y 5  x -5 } box
{ s 0.1 0.1 1 y -5  x 5 } box
{ s 0.1 0.1 1 y -5  x -5 } box
}