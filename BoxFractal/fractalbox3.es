//Fractal Box 3
set colorpool list:white,#ee0,#e0e,#0ee
set background #fff
#define size 0.4
#define offset 0.5
set maxdepth 7

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
{ color random } box
}