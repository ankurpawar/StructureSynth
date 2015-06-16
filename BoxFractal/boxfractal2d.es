#define dis 1
#define siz 1/3
set colorpool list:white,gray,#ddd,#999
set background #000

a2 

rule a2 w 3 maxdepth 2 > d  {

  {  s siz x 0 y 0  z 0 h 15 } a2
  
  {  s siz x dis  y dis  z 0 h 15 } a2
  {  s siz x dis  y -dis z 0 h 15 } a2
  {  s siz x -dis y dis  z 0 h 15 } a2
  {  s siz x -dis y -dis z 0 h 15 } a2
  
}

rule a2 w 3 maxdepth 3 > d {

  {  s siz x 0 y 0  z 0 h 15 } a2
  
  {  s siz x dis y dis   z 0 h 15  } a2
  {  s siz x dis y -dis  z 0 h 15  } a2
  {  s siz x -dis y dis  z 0 h 15  } a2
  {  s siz x -dis y -dis z 0 h 15 } a2
  
}

rule d  {
 { color random } box
}


