//3D Mondrian Cube 3
#define dis 0.5
set background #000
set colorpool list:#F00,#0404A2,#FFFE33,#FFF

4 * { x 0.5 z -0.5 ry 90 }  a2 
1 * { z -0.5 y 0.5 rx 90 } 2 * { z 1 rx 180 } a2
{ z -0.5 s 1.1 color #eee } frame

rule a2 w 3 maxdepth 2 > d {
  {  s 0.5 x dis y dis   } a2
  {  s 0.5 x -dis  y dis } a2 
  {  s 0.5 x dis y -dis  } a2
  {  s 0.5 x -dis y -dis } a2 
}

rule a2 w 3 maxdepth 1 > d {
  {  s 0.5 x dis y dis } a2
  {  s 0.5 x -dis  y dis} a2 
  {  s 0.5 x dis y -dis } a2
  {  s 0.5 x -dis y -dis } a2 

} 

rule a2 w 1 maxdepth 2 > d {
  {  s 0.5 1 1.25 x dis } a2
  {  s 0.5 1 1.25 x -dis } a2 
}

rule a2 w 1 maxdepth 1 > d {
 {  s 1 0.5 1.25 y dis } a2
 {  s 1 0.5 1.25 y -dis } a2 
}

rule d {
{ s 0.95 color random } box
{ color #eee } frame
}

rule d {
{ s 0.95 color random } box
{ color #222 } frame
}

rule frame  {

{ s 0.1 1 0.05 y 0  x 4.5 z 9.5 } box
{ s 0.1 1 0.05 y 0  x -4.5 z 9.5 } box
1 * { rz 90  s 0.1 1 0.05 } 1 * { y 0  x -4.5 z 9.5 } box
1 * { rz -90 } 1 * { s 0.1 1 0.05 y 0  x -4.5 z 9.5 } box

{ s 0.1 1 0.05 y 0  x 4.5 z -9.5 } box
{ s 0.1 1 0.05 y 0  x -4.5 z -9.5 } box
1 * { rz 90  s 0.1 1 0.05 } 1 * { y 0  x -4.5 z -9.5 } box
1 * { rz -90} 1 * { s 0.1 1 0.05 y 0  x -4.5 z -9.5 } box

{ s 0.05 0.05 1 y 9.5  x -9.5 z 0 } box
{ s 0.05 0.05 1 y 9.5  x 9.5 z 0 } box

{ s 0.05 0.05 1 y -9.5  x -9.5 z 0 } box
{ s 0.05 0.05 1 y -9.5  x 9.5 z 0 } box

}





