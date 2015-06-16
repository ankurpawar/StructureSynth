//Box Fractal 3D
#define dis 1
#define siz 1/3
set colorpool list:white,skyblue,#0044dd,#0088ee
set background #000

a2 

rule a2 w 5 maxdepth 3 > d {

  {  s siz x 0 y 0  z 0 h 15 } a2
  
  {  s siz x dis y dis  z dis h 15 } a2
  {  s siz x dis y -dis z dis h 15 } a2
  {  s siz x -dis y dis z dis h 15 } a2
  {  s siz x -dis y -dis z dis h 15 } a2
  
  {  s siz x dis y dis  z -dis h 15 } a2
  {  s siz x dis y -dis z -dis h 15 } a2
  {  s siz x -dis y dis z -dis h 15 } a2
  {  s siz x -dis y -dis z -dis h 15 } a2

}


rule d {
 { color random } box //::mymat
}

/*set raytracer::light [10,10,19]
set raytracer::shadows false
set raytracer::ambient-occlusion-samples 1
set raytracer::samples 6
//set raytracer::dof [0.23,0.07] 
//set raytracer::shiny::reflection 0.2
set raytracer::mymat::phong [0.6,0.6,0.3]*/
