set background #fff
#define dis 1
#define off 0.866
1 * {z -0.05 s 50 50 0.1 color #e99}box
r1

rule r1 md 6{
{x dis y dis s 0.5 h 72}r1
{x dis y 0 s 0.5 h 72}r1
{x 0 y dis s 0.5 h 72}r1
{x 0 y 0 s 0.5 h 72}r1
{x 0.5 y 0.5 z off s 0.5 h 72}r1
{x 1 y 1 z 0.5 }box
}

rule p2{
{h 0}pyramid
}
rule pyramid { 
	 triangle[0.5,0.5,0 ;0,0,off;1,0,off] 
	 triangle[0.5,0.5,0 ;1,0,off;1,1,off] 
	 triangle[0.5,0.5,0 ;1,1,off;0,1,off] 
	 triangle[0.5,0.5,0 ;0,1,off;0,0,off] 
      
     	 triangle[0,0,off;1,0,off;1,1,off] 
	 triangle[1,1,off;0,1,off;0,0,off] 

} 

set raytracer::shadows false

// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 16

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
//set raytracer::dof [0.23,0.07]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::shiny::reflection 0.3
set raytracer::phong [0.5,0.6,0.2]
 

