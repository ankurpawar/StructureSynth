#define dis 1
#define siz 1/3
set colorpool list:white,skyblue,#0044dd,#0088ee
//set colorpool list:white,gray,#eee,#aaa,#888,#666
 set background #000
  a2 

rule a2 w 5 maxdepth 3 > d {

  {  s siz x 0 y 0  z 0 h 15} a2
  
  {  s siz x dis y dis  z dis h 15} a2
  {  s siz x dis y -dis z dis h 15} a2
  {  s siz x -dis y dis z dis h 15} a2
  {  s siz x -dis y -dis z dis h 15} a2
  
  {  s siz x dis y dis  z -dis h 15} a2
  {  s siz x dis y -dis z -dis h 15} a2
  {  s siz x -dis y dis z -dis h 15} a2
  {  s siz x -dis y -dis z -dis h 15} a2

}

rule a2 w 3 maxdepth 1 > d {

  {  s siz x 0 y 0  z 0 h 15} a2
  
  {  s siz x dis y dis  z dis h 15} a2
  {  s siz x dis y -dis z dis h 15} a2
  {  s siz x -dis y dis z dis h 15} a2
  {  s siz x -dis y -dis z dis h 15} a2
  
  {  s siz x dis y dis  z -dis h 15} a2
  {  s siz x dis y -dis z -dis h 15} a2
  {  s siz x -dis y dis z -dis h 15} a2
  {  s siz x -dis y -dis z -dis h 15} a2

}
rule d w 2 {
{color random}box
}

set raytracer::shadows true
set raytracer::ambient-occlusion-samples 1
set raytracer::samples 16
 