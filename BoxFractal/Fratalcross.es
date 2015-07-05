#define dis 1
#define siz 1/3
set colorpool list:white,#e00,#0e0,#00e
set background #000

a2 

rule a2 md 4 > d  {

  {  s siz x 0 y 0  z 0 h 15 } a2
  
  {  s siz x dis  y 0  z 0 } a2
  {  s siz x -dis  y 0 z 0 } a2
  {  s siz x 0 y dis  z 0  } a2
  {  s siz x 0 y -dis z 0  } a2
  {  s siz x 0 y 0 z dis   } a2
  {  s siz x 0 y 0 z -dis  } a2
  
}


rule d  {
 { color random } box
}



