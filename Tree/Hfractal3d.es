//h Fractal 3d
#define displace 0.25

set maxdepth 200
set background white

R1

rule R1 maxdepth 5  > d{
{ y 0.5 x displace rz -90 s 0.707 h 40 }R1 
{ y 0.5 x -displace rz 90 s 0.707 h 40 }R1 

{ y 0.5 x 0 z displace rx 90 s 0.707 h 40 }R1 
{ y 0.5 x 0 z -displace rx -90 s 0.707 h 40 }R1 
{s 0.1 1 0.1  h 40}box
}

rule d{
{s 0.1 1 0.1  h 40}box
{y 0.5 s 0.3 color #ee3}sphere
}


