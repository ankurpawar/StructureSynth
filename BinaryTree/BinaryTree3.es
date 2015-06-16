//H Fractal
#define displace 0.403
set colorpool list:white,#e80,#08e,#8e0,#80e
//1 * {z -0.1 s 50 50 0.1 color #bbb}box
set maxdepth 20
set background #000


1 * {y -0.5 x 0.75 s 1.5 0.1 0.1 color random}box

1 * {s 1 1 0.3}tree
1 * { y -1 rz 180 s 1 1 0.3} tree2

rule tree maxdepth 8 {
{ y 0.465 x displace rz -90 s 0.707 0.707 1}tree
{ y 0.465 x -displace rz 90 s 0.707 0.707 1}branch

branch

// d
}

rule tree2 maxdepth 5 {
{ y 0.465 x displace rz -90 s 0.707 0.707 1}tree2
{ y 0.465 x -displace rz 90 s 0.707 0.707 1}tree
tree
branch
}

rule branch{
branch1
}

rule branch{
branch2
}

rule branch1 maxdepth 7{
{ y 0.465 x displace rz -90 s 0.707 0.707 1}branch1
d
}

rule branch2 maxdepth 8{
{ y 0.465 x -displace rz 90 s 0.707 0.707 1}branch2
d
}

rule d{
{s 0.1 1 0.1 color random}box
}







