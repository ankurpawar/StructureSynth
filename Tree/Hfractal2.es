//H Fractal
#define displace 0.25
1 * {z -0.1 s 50 50 0.1 color #bbb}box
set maxdepth 12
set background white

2 * {y -0.75 rz 180}R1

rule R1 maxdepth 7 {
{ y 0.5 x displace rz -90 s 0.707 h 40 }R1 
{ y 0.5 x -displace rz 90 s 0.707 h 40 }R1 
d
}

rule d{
{s 0.1 1 0.1 h 40}box
}


