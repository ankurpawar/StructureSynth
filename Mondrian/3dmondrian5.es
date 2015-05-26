//3D Mondrian Cube 5
#define dis 0.55
set colorpool list:#F00,#0404A2,#FFFE33,#FFF
set background #000

a2 

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis   } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis } a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  } a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis } a2 
  
  {  s 0.5 0.5 0.5 x dis y dis z -dis   } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis } a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  } a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis } a2 

}

rule a2 w 3 maxdepth 1 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis   } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis } a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  } a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis } a2 
  
  {  s 0.5 0.5 0.5 x dis y dis z -dis   } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis } a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  } a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis } a2 

}

rule a2 w 3 maxdepth 1 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis   } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis } a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  } a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis } a2 
  
  {  s 0.5 0.5 0.5 x dis y dis z -dis   } a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis } a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  } a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis } a2 

}

rule d w 2 {
{ color #eee } frame
{ color random } box
}

rule d w 2 {
{ color #222 } frame
{ color random } box
}


rule frame  {
{ s 0.1 1.1 0.1 x 5  z 5 } box
{ s 0.1 1.1 0.1 x 5  z -5 } box
{ s 0.1 1.1 0.1 x -5  z 5 } box
{ s 0.1 1.1 0.1 x -5  z -5 } box

{ s 1 0.1 0.1 y 5  z 5  } box
{ s 1 0.1 0.1 y 5  z -5 } box
{ s 1 0.1 0.1 y -5  z 5 } box
{ s 1 0.1 0.1 y -5  z -5 } box

{ s 0.1 0.1 1 y 5  x 5 } box
{ s 0.1 0.1 1 y 5  x -5 } box
{ s 0.1 0.1 1 y -5  x 5 } box
{ s 0.1 0.1 1 y -5  x -5 } box
}