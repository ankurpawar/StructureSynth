//3d rand cube 17,18
#define dis 0.55
#define diff 45
set colorpool list:white,skyblue,#0044dd,#0088ee
 set background #fff
  a2 

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h diff} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h diff} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h diff} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h diff} a2 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h diff} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h diff} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h diff} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h diff} a3 

}

rule a3 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h diff} a3
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h diff} a3 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h diff} a3
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h diff} a3 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h diff} a3
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h diff} a3 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h diff} a3
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h diff} a4 

}

rule a4 w 3 maxdepth 1 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h diff} a4
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h diff} a4 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h diff} a4
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h diff} a4 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h diff} a4
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h diff} a4 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h diff} a4
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h diff} a2 

}




rule d w 2 {
{h 5}frame
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


