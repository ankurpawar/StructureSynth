// Frame Frame
set colorpool list:blue,#0088ff,magenta,white
set background #fff
#define size 0.25
#define offset 0.3125
set maxdepth 7

1 *{x 0 y -0.6 s 50 0.1 50 color #eee}box

R1

rule R1 md 4 {
{ x offset y offset z offset s size } R1 
{ x offset y -offset z offset s size } R1
{ x -offset y -offset z offset s size } R1
{ x -offset y offset z offset s size } R1 

{ x offset y offset z -offset s size } R1 
{ x offset y -offset z -offset s size } R1
{ x -offset y -offset z -offset s size } R1
{ x -offset y offset z -offset s size } R1 
{ color random } frame
}

rule frame {
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