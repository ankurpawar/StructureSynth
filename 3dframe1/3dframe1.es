//3D Frame
#define dis 0.55
set colorpool list:white,#ee0,#e0e,#0ee
set background #000

a2 

rule a2 w 3 maxdepth 6 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis  } d
  {  s 0.5 0.5 0.5 x dis y -dis z dis  } d
  {  s 0.5 0.5 0.5 x -dis y -dis z dis } d
  
  {  s 0.5 0.5 0.5 x dis y dis z -dis  } d
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis  } d
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  } d
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis  } a2
 
}

rule d w 2 {
{ s 1 1 1 color random } frame
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



