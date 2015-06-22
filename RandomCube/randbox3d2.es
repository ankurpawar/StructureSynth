//3d rand cube 17,18
#define dis 0.5
#define diff 30
set colorpool list:white,skyblue,#0044dd,#0088ee
set background #fff
a2 

rule a2 w 3 maxdepth 6 > d {
  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} d
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
  {  s 0.5 0.5 1 x -dis y -dis  h diff} a2 
}

rule d w 2 {
{ s 1 1 0.01 h 5 } box
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


