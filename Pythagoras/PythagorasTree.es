// Pythagoras Tree
#define displace 0.5
set maxdepth 12
set background white

R1

rule R1 maxdepth 11 {
{ y 1  x displace rz -45 s 0.707  h 40 } R1
{ y 1  x -displace rz 45 s 0.707 h 40 }  R1
box
}

