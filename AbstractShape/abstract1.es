// Write EisenScript code here...

#define skin #fd5
#define leafc #df0
#define basec #804000

set maxdepth 100
set background #888

10 * {x 2.5 ry 36}r1
1 * { x  0 z 5} 20 * {x 2.75 ry 18} r1
1 * { x 0 z 10} 30 * {x 2.75 ry 12}r1

rule r1{
{ry 70}man
}

rule man {
 {  s 1  y 1.65 color skin} sphere //head
 {y 1.2  s 0.25 color skin} box //neck
 {y 0.5  s 0.5 1.2 0.9 color random} box //chest
 {z -0.25 y -0.5  s 0.25 1.25 0.25 color skin} box  //leg2
{z 0.25 y -0.5  s 0.25 1.25 0.25 color skin} box //leg1
 {x 0.2 z -0.25 y -1.075  s 0.5 0.1 0.25 color skin} box  //feet
{x 0.2 z 0.25 y -1.075  s 0.5 0.1 0.25 color skin} box //feet

{z 0.5 y 0.8  s 0.5  color random}sphere //arm1
{z -0.5 y 0.8  s 0.5 color random}sphere //arm2

{z 0.7 y 0.8  s 0.25 0.25 1.25 color skin} box //arm1
{z -0.7 y 0.8  s 0.25 0.25 1.25 color skin} box //arm2
}

//tree
1 * {x 1.5 z -3.5 s 0.35} 4 * { y -1 color basec} box
1 * {x 1.5 z -3.5 s 0.35} 4 * { ry 90 color basec} spiral

rule spiral w 100 md 50 > bunch{ 
 box   
{ y 0.5  s 0.995 color basec} spiral
}

rule spiral w 2 { 
{ ry 180 rx 45 z 0.27 color basec} spiral
}

rule spiral w 1 { 
{x -0.25 rz 45 color basec} spiral
}

//ball

rule bunch{
{s 15 color #4f4} sphere
{s 15 }flowers
}

//tree
rule flowers{

{rx -45 s 0.05 } ball1
{rx -90 s 0.05 } ball1
{rx -135 s 0.05 } ball1
{rx 0 s 0.05 } ball1
{rx 45 s 0.05 } ball1
{rx 90 s 0.05 } ball1
{rx 135 s 0.05 } ball1

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
1 * {y 10.5 s 2.25 color leafc} 10 * { ry 36 } leaf1
}

rule leaf1{
{ x 0.75  rz 25 s 1 0.05 0.5} box
}

rule ball2{
pettle2
{ s 1.5 z 7 color #fdd} sphere
}

rule pettle2{
1 * {rx 90 y 10.5  s 2.25 color leafc} 10 * { ry 36 } leaf2
}

rule leaf2{
{x 0.75  rz 25 s 1 0.05 0.5} box
}






