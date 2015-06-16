//3d rand cube 17,18
#define dis 0.55
set colorpool list:white,skyblue,#0044dd,#0088ee
 set background #fff


//1 * {z -0.6 s 50 50 0.1 color #bbb}box
 
 a2 

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h 25} a2 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h 25} a2 

}

rule a2 w 3 maxdepth 1 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h 25} a2 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h 25} a2 

}

rule a2 w 3 maxdepth 1 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h 25} a2 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h 25} a2 

}




rule d w 2 {
{color random }frame
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

set raytracer::samples 16

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
//set raytracer::dof [0.2041,0.05]

set raytracer::shiny::reflection 0.3
set raytracer::phong [0.5,0.6,0.2]
 