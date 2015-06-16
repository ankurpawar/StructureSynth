// Write EisenScript code here...
#define displace 0.5
set maxdepth 12
set background white

R1

rule R1 maxdepth 3 {
{ y 0.85  x 0 ry 45 s 0.707  h 40 } R1
{ x 0.85  x 0 rx 45 s 0.707 h 40 }  R1
{ z 0.85  x 0 rz 45 s 0.707 h 40 }  R1

{ y -0.85  x 0 ry 45 s 0.707  h 40 } R1
{ x -0.85  x 0 rx 45 s 0.707 h 40 }  R1
{ z -0.85  x 0 rz 45 s 0.707 h 40 }  R1

box

}

