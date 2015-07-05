// Write EisenScript code here...
1 * { s 0.5 x 60 y 30.1} 5 * {x 57.65 color #c30} roof
1 * { s 0.5} 5 * {x 57.65 color #c30} arc
side1
25  * {x -60} side1
{ x 214.75}side1



rule arc md 62{
  { y 1.5  rz -3} arc dbox
}

rule roof md 22{
  { x -3} roof dbox2
}
rule dbox{
{ s 0.5 5 30 }box
}

rule dbox2{
{s 5 2 30}box
}

rule side1{
{y 7 x  -6.25 s 70 17 30 color #aaa}box
}

//lamp
1 * { y 15 z -7  x -150} 7 * {x 50 color #730}lamp
1 * { y 15 z 7 x 225 ry 180} 10 * {x 50 color #730}lamp


rule lamp md 15 > lampside{
{ y 0.5 s 0.999}lamp box
}

rule lampside md 6 > lampdown{
{z 0.5 s 0.999}lampside box
}

rule lampdown md 5 > reflector{
{y -0.25 s 0.99}lampdown box
}

rule reflector {
1 * { h 50  s 1.5} 20 * { ry 18 color #993}leaf1
{ s 1.5  y -0.1  color #fff} sphere
}

rule leaf1{
{ x 0.75 rz -25 s 1 0.05 0.5} box
}

//road and boundary
1 * { y 16 z -7  s 485 1 1.2 color #630} box
1 * { y 16 z 7  s 485 1 1.2 color #630} box
1 * { y 15.5 z 0  s 485 0.5 14 color #222} box

//ground an river
1 * {x -220 y -1 s 500 0.3 1000 color #960} box
1 * {x 100 y -2 s 200 0.1 1000 color #05f} box
1 * {x 270 y -1 s 200 0.3 1000 color #960} box