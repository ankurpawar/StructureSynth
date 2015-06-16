//3d rand cube 17,18
#define dis 0.55
set colorpool list:white,skyblue,#0044dd,#0088ee
 set background #fff
  a2 

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h 25} a2 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h 15} a2
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h 25} a2 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h 15} a2
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h 25} a3 

}

rule a3 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h 15} a3
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h 25} a3 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h 15} a3
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h 25} a3 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h 15} a3
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h 25} a3 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h 15} a3
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h 25} a4 

}

rule a4 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x dis y dis z dis h 15} a4
  {  s 0.5 0.5 0.5 x -dis  y dis z dis h 25} a4 
  {  s 0.5 0.5 0.5 x dis y -dis z dis  h 15} a4
  {  s 0.5 0.5 0.5 x -dis y -dis z dis h 25} a4 
  
   {  s 0.5 0.5 0.5 x dis y dis z -dis h 15} a4
  {  s 0.5 0.5 0.5 x -dis  y dis z -dis h 25} a4 
  {  s 0.5 0.5 0.5 x dis y -dis z -dis  h 15} a4
  {  s 0.5 0.5 0.5 x -dis y -dis z -dis h 25} a2 

}




rule d w 2 {
{color random }box
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

// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 16

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
set raytracer::dof [0.281102,0.05]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::shiny::reflection 0.3
set raytracer::phong [0.5,0.6,0.2]
 