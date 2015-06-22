
// Write EisenScript code here...12
 set background #000
set colorpool list:gray,#aaa,#666,white
4 * {x 0.5 z -0.5 ry 90 }  a2 
1 * {z -0.5 y 0.5 rx 90} 2 * {z 1 rx 180} a2
rule a2 w 3 maxdepth 3 > d {

  {  s 0.5 0.5 0.5 x 0.5 y 0.5  h 45} a2
  {  s 0.5 0.5 0.5 x -0.5  y 0.5 h 10} a2 
  {  s 0.5 0.5 0.5 x 0.5 y -0.5   h 60} a2
  {  s 0.5 0.5 0.5 x -0.5 y -0.5  h 30} a2 

}

rule a2 w 3 maxdepth 2 > d {

  {  s 0.5 0.5 0.5 x 0.5 y 0.5  h 5} a2
  {  s 0.5 0.5 0.5 x -0.5  y 0.5 h 15} a2 
  {  s 0.5 0.5 0.5 x 0.5 y -0.5   h 45} a2
  {  s 0.5 0.5 0.5 x -0.5 y -0.5  h 45} a2 

} 

rule a2 w 1 maxdepth 2 > d {

  {  s 0.5 1 1.75 x 0.5 y 0  h 5} a2
  {  s 0.5 1 1.75 x -0.5  y 0 h 15} a2 

}

rule a2 w 1 maxdepth 2 > d {

 {  s 1 0.5 1.75 x 0 y 0.5  h 5} a2
 {  s 1 0.5 1.75 x 0  y -0.5 h 15} a2 

}




rule d w 2 {
{s 1 1 0.25 color random} box
}

set raytracer::shadows false
set raytracer::ambient-occlusion-samples 1 
// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 16
set raytracer::dof [0.307608,0.05]