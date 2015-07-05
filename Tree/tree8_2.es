// Write EisenScript code here...
// Write EisenScript code here...
set maxdepth 500
set colorpool list:#af3,#de3,#ec2,#fa6,#df6

10 * {x 35 ry 36} tree

rule tree{
4 * { y -1 color #804000} box
4 * { ry 90 color #804000} spiral
}
rule spiral w 100 md 50 > bunch{ 
 box   
{ y 0.5  s 0.995 color #804000} spiral
}

rule spiral w 2 { 
{ ry 180 rx 45 z 0.27} spiral
}

rule spiral w 1 { 
{x -0.25 rz 45 } spiral
}

//ball

rule bunch{
{s 15 color #4f4}sphere
{s 15 }flowers
}

//tree
rule flowers{

{rx -45 s 0.05 color #bb5} ball1
{rx -90 s 0.05 color #bb5} ball1
{rx -135 s 0.05 color #bb5} ball1
{rx 0 s 0.05 color #bb5} ball1
{rx 45 s 0.05 color #bb5} ball1
{rx 90 s 0.05 color #bb5} ball1
{rx 135 s 0.05 color #bb5} ball1

{rz -45 s 0.05 color #bb5} ball1
{rz 45 s 0.05 color #bb5} ball1
{rz 90 s 0.05 color #bb5} ball1
{rz 135 s 0.05 color #bb5} ball1
{rz -90 s 0.05 color #bb5} ball1
{rz -135 s 0.05 color #bb5} ball1

{ry -45 s 0.05 color #bb5} ball2
{ry 45 s 0.05 color #bb5} ball2
{ry -135 s 0.05 color #bb5} ball2
{ry 135 s 0.05 color #bb5} ball2
}

rule ball1{
{ s 1.5 y 7 color #fdd} sphere
pettle
}

rule pettle{
1 * {y 10.5 s 2.25 color random} 10 * { ry 36 } leaf1
}

rule leaf1{
{ x 0.75  rz 25 s 1 0.05 0.5} box
}

rule ball2{
pettle2
{ s 1.5 z 7 color #fdd} sphere
}

rule pettle2{
1 * {rx 90 y 10.5  s 2.25 color random} 10 * { ry 36 } leaf2
}

rule leaf2{
{x 0.75  rz 25 s 1 0.05 0.5} box
}



