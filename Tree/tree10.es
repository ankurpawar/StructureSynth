// Write EisenScript code here...
#define siz 0.979
set colorpool list:#66f,#6cf,#3cf,#0cf,#39f
set maxdepth 200
4 * { y -1 color #ffee11} frame

4 * { ry 90 color #ffee11} spiral 

rule spiral w 100 md 30 > R2{ 
frame
{ y 1 rx 3.5 ry 1.5 rz 0 s 0.995 color #ffee11}spiral
}

rule spiral w 1 {  
spiral
{ ry 180 color #ffee11}  spiral
} 

rule R2{
//{ s 2.5 h 70} sphere
{color #ffee11}leaf
 
}


rule leaf {
pstem
pstem
pstem
pstem
pstem
pstem
}


rule pettle{
1 * {y 0.25 s 2.25 color random} 10 * { ry 36 } leaf1
}

rule leaf1{
{ x 0.75  rz 25 s 1 0.05 0.5} box
}

rule ball{
{ s 1.5 y 0.1 color #fdd} sphere
pettle
}

rule pstem{pstem1}
rule pstem{pstem2}
rule pstem{pstem3}
rule pstem{pstem4}
rule pstem{pstem5}
rule pstem{pstem6}
rule pstem{pstem7}
rule pstem{pstem8}
rule pstem{pstem9}

rule pstem1 md 30 > ball{
{y 0.5 rx 3 rz 4 ry 3 s siz color #ffee11}pstem1
frame
}

rule pstem2 md 30 > ball{
{y 0.5 rx -2 rz 3 ry 3.5 s siz color #ffee11}pstem2
frame
}

rule pstem3 md 30 > ball{
{y 0.5 rx -4 rz 2.5 ry -3 s siz color #ffee11}pstem3
frame
}

rule pstem4 md 30 > ball{
{y 0.5 rx 1.5 rz -3.5 ry 1.5 s siz color #ffee11}pstem4
frame
}

rule pstem5 md 30 > ball{
{y 0.5 rx 1.5 rz -1.5 ry -1.5 s siz color #ffee11}pstem5
frame
}

rule pstem6 md 30 > ball{
{y 0.5 rx -1.5 rz -3.5 ry 1.5 s siz color #ffee11}pstem4
frame
}

rule pstem7 md 30 > ball{
{y 0.5 rx 3 rz 1.5 ry -2.5 s siz color #ffee11}pstem5
frame
}

rule pstem8 md 30 > ball{
{y 0.5 rx -0.5 rz 2 ry -1.5 s siz color #ffee11}pstem4
frame
}

rule pstem9 md 30 > ball{
{y 0.5 rx 2 rz -2 ry 3 s siz color #ffee11}pstem5
frame
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
