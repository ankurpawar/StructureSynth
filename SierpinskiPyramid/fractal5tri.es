set background #fff
#define dis 0.5
#define off 0.866
r1

rule r1 md 4 > p2{
{x 0.25 y 0.25 z 0.433 s 0.5 h 20}r1
{x 0      y 0                  s 0.5  h 20}r1
{x  0.5  y 0.5              s 0.5  h 20}r1
{x 0.5   y 0                 s 0.5  h 20}r1
{x 0      y 0.5              s 0.5  h 20}r1

}

rule p2{
{h 120}pyramid
}
rule pyramid { 
	 triangle[0,0,0;1,0,0;0.5,0.5,off] 
	 triangle[1,0,0;1,1,0;0.5,0.5,off] 
	 triangle[1,1,0;0,1,0;0.5,0.5,off] 
	 triangle[0,1,0;0,0,0;0.5,0.5,off] 
} 

set raytracer::shadows false

// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 10

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
//set raytracer::dof [0.23,0.07]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::shiny::reflection 0.3
set raytracer::phong [0.5,0.6,0.2]
 
