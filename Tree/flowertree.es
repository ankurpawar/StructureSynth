//pytree 3d
#define displace 0.25


set maxdepth 200
set background white
//1 * {y -0.5 s 150 0.1 150 color #bbb}box
R1

rule R1 maxdepth 5 > R2{
{ y 0.75  x displace rz -45 s 0.707  h 40 }R1 
{ y 0.75  x -displace rz 45 s 0.707 h 40 }R1 

{ y 0.75  z displace rx 45 s 0.707  h 40 }R1 
{ y 0.75  z -displace rx -45 s 0.707 h 40 }R1 


{s 0.1 1 0.1 color #4e7} box
}

rule R2{
{s 0.1 1 0.1 color #4e7} box
//{y 0.5 s 0.5 color #e80}sphere
{y 0.5 s 0.5}leaf
}

rule leaf { 
1 * { h 210 y 0.02 } 8 * { ry 45 }leaf1
ball
}
rule leaf1{
{ x 0.5 rz 25 s 1 0.05 0.5 } box
}

rule ball{
{ s 0.5 sat 1 h 90 } sphere
}

