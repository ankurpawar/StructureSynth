//Fractal Box 2
set colorpool list:white,white,blue,#ee0000,#00ee00
set background #fff
set maxObjects 100000
set recursion 8
#define size 0.5
#define offset 0.825
#define dist 0.275
#define deep 5

1 * {x 0.95 y 0.95 z -0.575 s 3 3 0.05 color #ddd} box
1 * {x 0.95 y -0.575 z 0.95   s 3 0.05 3 color #ddd} box
1 * {x -0.575 y 0.95 z 0.95  s 0.05 3 3 color #ddd} box

R1

rule R1{
{ x -dist y -dist z offset s size } front 
{ x -dist y offset z -dist s size } up
{ x offset y -dist z -dist s size } right
//{ x offset s size} right

{ color random } frame
}

rule up md deep{
{ x -dist y offset z -dist s size } up
{ x -dist y -dist z offset s size } up
{ x offset y -dist z -dist s size } up

{ color random } frame
}


rule right md deep{

{ x -dist y -dist z offset s size } right
{ x -dist y offset z -dist s size } right
{ x offset y -dist z -dist s size } right

{ color random } frame
}


rule front md deep{
{ x -dist y -dist z offset s size } front
{ x -dist y offset z -dist s size } front
{ x offset y -dist z -dist s size } front

{ color random } frame
}

rule frame  {
{ s 0.1 1.1 0.1 x 5  z 5 } box
{ s 0.1 1.1 0.1 x 5  z -5 } box
{ s 0.1 1.1 0.1 x -5  z 5 } box
{ s 0.1 1.1 0.1 x -5  z -5 } box

{ s 1 0.1 0.1 y 5  z 5 } box
{ s 1 0.1 0.1 y 5  z -5 } box
{ s 1 0.1 0.1 y -5  z 5 } box
{ s 1 0.1 0.1 y -5  z -5 } box

{ s 0.1 0.1 1 y 5  x 5 } box
{ s 0.1 0.1 1 y 5  x -5 } box
{ s 0.1 0.1 1 y -5  x 5 } box
{ s 0.1 0.1 1 y -5  x -5 } box
}