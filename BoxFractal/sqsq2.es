// Write EisenScript code here...
// Write EisenScript code here...
set colorpool list:red,blue,green,white,white
set background #fff
#define size 0.33
#define offset 0.6
set maxdepth 7
//1 *{x 0 y -0.5 s 50 0.1 50 color #eee}box
R1

rule R1 md 4{
{z offset s size } R1 
{y offset s size } R1
{x offset s size} R1 

{z -offset s size } R1 
{y -offset s size } R1
{x -offset s size } R1 

{color random }box
}


set raytracer::shadows false

// the number of samples controls the quality
// '6' means 6x6 samples per pixels, and is the default.
set raytracer::samples 16

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
set raytracer::dof [0.2728,0.05]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::ambient-occlusion-samples 1
//set raytracer::shiny::reflection 0.3
//set raytracer::phong [0.5,0.6,0.2]