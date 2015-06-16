//H Fractal
#define displace 0.403
set colorpool list:white,#e80,#08e,#8e0
//1 * {z -0.1 s 50 50 0.1 color #bbb}box
set maxdepth 20
set background #000

//2 * {y -1 rz 180}tree


tree
1 * { y -1 rz 180 } tree2

rule tree maxdepth 7 {
{ y 0.465 x displace rz -90 s 0.707 0.707 1}branch
{ y 0.465 x -displace rz 90 s 0.707 0.707 1}tree
branch
}

rule tree2 maxdepth 5 {
{ y 0.465 x displace rz -90 s 0.707 0.707 1}tree
{ y 0.465 x -displace rz 90 s 0.707 0.707 1}tree2
tree
}

rule branch maxdepth 4 {
{ y 0.465 x -displace rz 90 s 0.707 0.707 1}branch
d
}

rule d{
{s 0.1 1 0.1 color random}box
}





