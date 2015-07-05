// 3d pytree rand flip
set md 16
set colorpool list:#4f9,#ff0,#0f9,#9f0,#8f3,#4f6

R1

// 45 degree
rule R1 md 1 > R1{
{ y 1  x 0.5  s 0.707  rz -45 h 10 }R1
{ y 1  x -0.5  s 0.707  rz 45 h 10 }R1
 square
}

 rule R1 md 1 > R1{
{ y 1  z 0.5   s 0.707   rx 45 h 10 }R1
{ y 1  z -0.5  s 0.707  rx -45 h 10 }R1 
square
}

// 60 and 30 pythagoras tree with flipping on each level
rule R1 md 1 > R2{
{ y 0.842  x 0.5915  s 0.5  rz -60 h 10 }R1
{ y 1.092  x -0.3415  s 0.866  rz 30 h 10 }R1
 square
}

rule R2 md 1 > R1{
{ y 0.842  x -0.5915  s 0.5  rz 60 h 10 }R2
{ y 1.092  x 0.3415  s 0.866  rz -30 h 10 }R2
 square
}

//60 30 3d
rule R1 md 1 > R2 {
{ y 0.842  z -0.5915  s 0.5  rx -60 h 10 }R1
{ y 1.092  z 0.3415  s 0.866  rx 30 h 10 }R1
 square
}

rule R2 md 1 > R1{
{ y 0.842  z 0.5915  s 0.5  rx 60 h 10 }R2
{ y 1.092  z -0.3415  s 0.866  rx -30 h 10 }R2
 square
}


//50 40 degree tree flipped each level
rule R1  md 1 > R2{
{ y 0.9530  x 0.5396  s 0.6428  rz -50 h 10 }R1
{ y 1.04  x -0.4528  s 0.766  rz 40 h 10 }R1
square
}

rule R2  md 1 > R1{
{ y 0.9530  x -0.5396  s 0.6428  rz 50 h 10 }R2
{ y 1.04  x 0.4528  s 0.766  rz -40 h 10 }R2
square
}

//50 40 3d degree tree flipped each level
rule R1  md 1 > R2{
{ y 0.9530  z -0.5396  s 0.6428  rx -50 }R1
{ y 1.04  z 0.4528  s 0.766  rx 40}R1
square
}

rule R2  md 1 > R1{
{ y 0.9530  z 0.5396  s 0.6428  rx 50 }R2
{ y 1.04  z -0.4528  s 0.766  rx -40 }R2
square
}

//70 20 degree tree flipped each level
rule R1 md 1 > R2 {
{ y 0.719  x 0.6022  s 0.3420  rz -70 } R1
{ y 1.102  x -0.2192  s 0.9397  rz 20 } R1
 square
}

rule R2 md 1 > R1 {
{ y 0.719  x -0.6022  s 0.3420  rz 70 } R2
{ y 1.102  x 0.2192  s 0.9397  rz -20 } R2
 square
}

//70 20 3d degree tree flipped each level
rule R1 md 1 > R2 {
{ y 0.719  z -0.6022  s 0.3420  rx -70 } R1
{ y 1.102  z 0.2192  s 0.9397  rx 20 } R1
 square
}

rule R2 md 1 > R1 {
{ y 0.719  z 0.6022  s 0.3420  rx 70 } R2
{ y 1.102  z -0.2192  s 0.9397  rx -20 } R2
 square
}

rule square w 10 {
{ color random } box
}
