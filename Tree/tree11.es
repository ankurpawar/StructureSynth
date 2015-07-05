// Write EisenScript code here...
set colorpool list:#6f6,#6fc,#3fc,#0fc,#3f9


5 * {z -2} 5 * {x -4} tree
5 * {z 2}  5 * {x -4} tree

signboard
rule signboard{
{x -1.5  y -1 z -1.5 s 0.1 1.5 0.1 color #aa0 }box
1 * {x -1.5  y -0.4 z -1.5 s 0.25 0.2 0.25} 4 * {ry 90 color #0d2} direction
}

rule direction{
{x 1.414 rz 45 s 1 1 0.1}box
{x 0.707  s 1.414 1.414 0.1}box
}
//floor
{ y -1.5  s 1250 0.1 1250 color #333 }box

//roadside
{ z -1.5 y -1.45 x -26.45 s 50 0.1 0.1 color #aaa }box
{ z 1.5 y -1.45 x -26.45 s 50 0.1 0.1 color #aaa}box
{ z -1.5 y -1.45 x 26.45 s 50 0.1 0.1 color #aaa }box
{ z 1.5 y -1.45 x 26.45 s 50 0.1 0.1 color #aaa}box

{ x -1.5 y -1.45 z -26.45 s 0.1 0.1 50 color #aaa }box
{ x 1.5 y -1.45 z -26.45 s 0.1 0.1 50 color #aaa}box
{ x -1.5 y -1.45 z 26.45 s 0.1 0.1 50 color #aaa }box
{ x 1.5 y -1.45 z 26.45 s 0.1 0.1 50 color #aaa}box

//tree
rule tree{
{y -1 s 0.05 1 0.05 color #bb5} box

4 * { rx 45} 1 * { s 0.05 0.05 1 color #bb5} box
3 * { ry 45} 1 * { s 0.05 0.05 1 color #bb5} box
3 * { rz 45} 1 * { s 0.05 1 0.05 color #bb5} box


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
