//h Fractal
#define displace 0.25

set maxdepth 200
set background white

R1

rule R1 maxdepth 9 {
{ y 0.5 x displace rz -90 s 0.707 h 40 }R1 
{ y 0.5 x -displace rz 90 s 0.707 h 40 }R1 
d

}

rule d{
{s 0.1 1 0.1  h 40}box
}

