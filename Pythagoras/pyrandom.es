// Write EisenScript code here...
// Write EisenScript code here...

set maxdepth 12
1 * { rz 180} R1


rule R1 maxdepth 5 > R1{
{ z 1  y 0.5  s 0.707  rx -45 h 10 }R1 box
{ z 1  y -0.5  s 0.707  rx 45 h 10 }R1 box
}

rule R1 maxdepth 5 > R1{
{ z 1  x 0.5   s 0.707  ry -45 h 10 }R1 box
{ z 1  x -0.5  s 0.707 ry 45 h 10 }R1 box
}

