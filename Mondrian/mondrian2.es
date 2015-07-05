
#define dis 0.55
#define diff 30
//set colorpool list:#ddee00,#ddd
set colorpool list:#F00,#0404A2,#FFFE33,#FFF
 set background #fff
//4 * {x 0.55 z -0.55 ry 90 }  a2 
//1 * {z -0.55 y 0.55 rx 90} 2 * {z 1.1 rx 180} a2
  a2 

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} a2
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
 {  s 0.5 0.5 1 x -dis y -dis  h diff} a2
  
 
//box
}

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} a2
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
  {  s 0.5 0.5 1 x -dis y -dis  h diff} a2
  
 
//box
}



rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} a2
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
  {  s 0.5 0.5 1 x -dis y -dis  h diff} a2
  
 
//box
}



rule d w 2 {
{s 0.9 0.9 0.01 color random}box
{s 1 1 0.25 color random}frame
}

rule frame  {

{ s 1.1 0.1 0.1 y 5  x 0 } box
{ s 0.1 1 0.1 y 0  x 5 } box
{ s 1.1 0.1 0.1 y -5  x 0 } box
{ s 0.1 1 0.1 y 0  x -5 } box
}


