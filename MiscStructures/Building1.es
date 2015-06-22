// Write EisenScript code here...
set background white
//tower
10 * {y 1.414 } 10 * {z 0.4 x -1.25 ry 36} square

rule square{
 {s 1 1 0.1 rz 45 color #24e }box
1 * {x -0.75 s 0.05 1.414 0.05} 10 * { x 2.75 color #888}box
}

//base
//1 * {y 0.650 s 1 0.1 1}box
1 * {y 0.21 } 10 * {z 0.4 x -1.25 ry 36} panel

1 * {y -0.3 z 2.125 x -0 s 37.25 0.1 37.25 color #555} box

//roof
1 * {y 15.34 } 10 * {z 0.4 x -1.25 ry 36} panel
1 * {y 15.89 z 2.125 x -0 s 3.25 0.1 3.25} 80 * {ry 1.125 color #aaa}box
rule panel{
 {s 1.414 1 0.1  color #24e }box
}
