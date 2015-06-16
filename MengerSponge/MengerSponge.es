#define dis 1
#define siz 1/3
set colorpool list:white,skyblue,#0044dd,#0088ee
 set background #000
  a2 

rule a2 w 3 maxdepth 3 > d {

  {  s siz x dis y dis  z 0 h 15} a2
  {  s siz x dis y -dis z 0 h 15} a2
  {  s siz x -dis y dis z 0 h 15} a2
  {  s siz x -dis y -dis z 0 h 15} a2  

  {  s siz x dis y dis  z dis h 15} a2
  {  s siz x dis y -dis z dis h 15} a2
  {  s siz x -dis y dis z dis h 15} a2
  {  s siz x -dis y -dis z dis h 15} a2
  
  {  s siz x dis y dis  z -dis h 15} a2
  {  s siz x dis y -dis z -dis h 15} a2
  {  s siz x -dis y dis z -dis h 15} a2
  {  s siz x -dis y -dis z -dis h 15} a2

  {  s siz x 0 y dis  z  dis h 15} a2
  {  s siz x 0 y -dis z dis h 15} a2
  {  s siz x -dis y 0 z dis h 15} a2
  {  s siz x dis y 0 z dis h 15} a2

  {  s siz x 0 y dis  z  -dis h 15} a2
  {  s siz x 0 y -dis z -dis h 15} a2
  {  s siz x -dis y 0 z -dis h 15} a2
  {  s siz x dis y 0 z -dis h 15} a2


}


rule d w 2 {
{color #07e}box
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

set raytracer::shadows false
set raytracer::ambient-occlusion-samples 1 
// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 16
//set raytracer::dof [0.141542,0.05]
