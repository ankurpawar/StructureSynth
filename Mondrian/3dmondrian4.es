//3D Mondrian Cube 4
#define dis 0.55
set colorpool list:#F00,#0404A2,#FFFE33,#FFF
 set background #fff
4 * { x 0.55 z -0.55 ry 90 }  a2 
1 * { z -0.55 y 0.55 rx 90 } 2 * { z 1.1 rx 180 } a2

rule a2 w 3 maxdepth 2 > d {
  {  s 0.5 0.5 1 x dis y dis   } a2
  {  s 0.5 0.5 1 x -dis  y dis } a2
  {  s 0.5 0.5 1 x dis y -dis  } a2
  {  s 0.5 0.5 1 x -dis y -dis } a2 
}

rule a2 w 3 maxdepth 2 > d {
  {  s 0.5 0.5 1 x dis y dis    } a2
  {  s 0.5 0.5 1 x -dis  y dis  } a2
  {  s 0.5 0.5 1 x dis y -dis   } a2
  {  s 0.5 0.5 1 x -dis y -dis } a2
 }

rule a2 w 3 maxdepth 1 > d {
  {  s 0.5 0.5 1 x dis y dis   } a2
  {  s 0.5 0.5 1 x -dis  y dis } a2
  {  s 0.5 0.5 1 x dis y -dis  } a2
  {  s 0.5 0.5 1 x -dis y -dis } a2
}

rule d w 2 {
{ s 0.9 0.9 0.01 color random } box
{ s 1 1 0.25 color #444 } frame
}

rule d w 2 {
{ s 0.9 0.9 0.01 color random } box
{ s 1 1 0.25 color #eee } frame
}

rule frame  {
{ s 1.1 0.1 0.1 y 5  x 0 } box
{ s 0.1 1 0.1    y 0  x 5 } box
{ s 1.1 0.1 0.1 y -5  x 0 } box
{ s 0.1 1 0.1    y 0  x -5 } box
}


