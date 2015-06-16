// Frame Frame 2

set colorpool list:yellow,orange,white,red
set background #fff
#define size 0.4
#define offset 0.5
set maxdepth 6
1 *{x 0 y 1 s 50 0.1 50 color #eee}box
R1

rule R1 {
{x offset y offset z offset s size color random} R1 
{x offset y -offset z offset s size color random} R1
{x -offset y -offset z offset s size color random} R1
{x -offset y offset z offset s size color random} R1 

{x offset y offset z -offset s size color random} R1 
{x offset y -offset z -offset s size color random} R1
{x -offset y -offset z -offset s size color random} R1
{x -offset y offset z -offset s size color random} R1 
frame
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
set raytracer::samples 12

// dof is depth-of-field.
// Use 'Edit | Show 3D Object Information' to find the correct plane 
// comment the line below to disable this.
set raytracer::dof [0.373275,0.06]

// Set materials either globally,
// or for a selected tag (e.g. 'shiny')
set raytracer::shiny::reflection 0.3
set raytracer::phong [0.5,0.6,0.2]