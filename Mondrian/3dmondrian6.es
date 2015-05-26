// 3D Mondrian Cube 6
set background white
set colorpool list:#F00,#0404A2,#FFFE33,#FFF

4 * { x 0.5 z -0.5 ry 90 } a2
1 * { z -0.5 y 0.5 rx 90 } 2 * { z 1 rx 180 } a2
{ z -0.5 s 1.09 color #555 } frame
 

rule a2 w 2 maxdepth 2 > d {
 {  s 0.3334 1 1 x -1   } a2
 {  s 0.3334 1 1 x 0.0  } a2 
 {  s 0.3334  1 1 x 1.0  } a2 
}

rule a2 w 2 maxdepth 2 > d {
 {  s 1  0.3334 1 y  -1 } a2
 {  s 1  0.3334 1 y  1  } a2
 {  s 1 0.3334  1 y 0  } a2
}

 rule d {
 { s 1 1 0.1 } square
 }

 rule square {
 { s 0.95 color random } box
 { color #eee } frame
 }

 rule square {
 { s 0.95 color random } box
 { color #222 } frame
 }

 rule frame {

 { s 0.1 1 0.05 y 0 x 4.5 z 9.5 } box
 { s 0.1 1 0.05 y 0 x -4.5 z 9.5 } box
 1 * { rz 90 s 0.1 1 0.05} 1 * { y 0 x -4.5 z 9.5 } box
 1 * { rz -90} 1 * { s 0.1 1 0.05 y 0 x -4.5 z 9.5 } box

 { s 0.1 1 0.05 y 0 x 4.5 z -9.5 } box
 { s 0.1 1 0.05 y 0 x -4.5 z -9.5 } box

 1 * { rz 90 s 0.1 1 0.05 } 1 * { y 0 x -4.5 z -9.5 } box
 1 * { rz -90 } 1 * { s 0.1 1 0.05 y 0 x -4.5 z -9.5 } box

 { s 0.05 0.05 1 y 9.5 x -9.5 z 0 } box
 { s 0.05 0.05 1 y 9.5 x 9.5 z 0 } box

 { s 0.05 0.05 1 y -9.5 x -9.5 z 0 } box
 { s 0.05 0.05 1 y -9.5 x 9.5 z 0 } box

 }
