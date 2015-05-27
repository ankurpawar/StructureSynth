//H Fractal
#define displace 0.403
//set colorpool list:white,#f00,#f80,#ff0
set colorpool list:white,#088,#00f,#08f
//set colorpool list:white,#0ee,#ee0,#e0e
//set maxdepth 20
set background #000

//uncomment to make a grey floor
//1 * {y 0 x 1.5 s 0.1 155 155 color #ddd}box

2 * {y 3.5} 1 * {z 3.5}completeTree

rule completeTree{
1 * {y -0.5 x 0.75 s 1.5 0.15 0.15 color random}box
1 * {s 1 1 1 color random}tree
1 * { y -1 rz 180 s 1 1 1 color random} tree2
}
rule tree maxdepth 3 {
{ y 0.465 x displace rz -90 s 0.707 color random}tree
{ y 0.465 x -displace rz 90 s 0.707 color random}branch

{ y 0.465 z -displace rx -90 ry 90 s 0.707 color random}tree
{ y 0.465 z displace rx 90 ry 90 s 0.707 color random}branch
branch

// d
}

rule tree2 maxdepth 3 {
{ y 0.465 x displace rz -90 s 0.707 color random}tree2
{ y 0.465 x -displace rz 90 s 0.707 color random}tree

{ y 0.465 z -displace rx -90 ry 90 s 0.707 color random}tree
{ y 0.465 z displace rx 90 ry 90 s 0.707 color random}branch


tree
branch
}

rule branch{
branch1
}

rule branch{
branch2
}

rule branch1 maxdepth 6{
{ y 0.465 x displace rz -90 s 0.707}branch1
d
}

rule branch2 maxdepth 7{
{ y 0.465 x -displace rz 90 s 0.707}branch2
d
}

rule d{
{s 0.1 1 0.1}box
}
