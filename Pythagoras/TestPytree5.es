//50 40 degree tree flipped each level
set maxdepth 12

R1

rule R1 md 1 > R2{
{ y 0.9530  x 0.5396  s 0.6428  rz -50 h 10 }R1
{ y 1.04  x -0.4528  s 0.766  rz 40 h 10 }R1
 square
}

rule R2 md 1 > R1{
{ y 0.9530  x -0.5396  s 0.6428  rz 50 h 10 }R2
{ y 1.04  x 0.4528  s 0.766  rz -40 h 10 }R2
 square
}

rule square w 3{
{color #ff0000} box
}

rule square w 10{
{color #ffffff} box
}
