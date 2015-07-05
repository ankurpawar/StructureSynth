//Pythagoras Tree 2
#define displace 0.51
set maxdepth 200
set background white

1 * {y -0.6 s 150 0.1 150 color #999}box
R1

rule R1 maxdepth 9 {
{ y 1.1  x  displace rz -45 s 0.707  h 40 } R1 
{ y 1.1  x -displace rz 45 s 0.707 h 40 } R1 
{ color #fff } frame
{ } d
}

rule R2 {
 { s 1.5 h 140 } sphere
}

rule d{
{ s 0.1 0.9 0.9 x 5 } box
{ s 0.1 0.9 0.9 x -5 } box

{ s 0.9 0.1 0.9 y 5 } box
{ s 0.9 0.1 0.9 y -5 } box

{ s 0.9 0.9 0.1 z 5 } box
{ s 0.9 0.9 0.1 z -5 } box
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