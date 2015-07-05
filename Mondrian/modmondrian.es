// Write EisenScript code here...
// Mondrian Cube.
 set background #fff

mondrian

rule mondrian {
  //  The six faces of the cube  
  a2 
  { x -0.5 z -0.5 ry  90 } a2
  { x +0.5 z -0.5 ry  90 } a2
  { z -1 } a2
  { y +0.5  z -0.5 rx  90 } a2
  { y -0.5  z -0.5 rx  90 } a2
}

rule a2 w 2 maxdepth 2 > d {
  // Split into two halves in x direction
  {  s 0.333 1 1 x -1   } a2
  {  s 0.666  1 1 x 0.26  } a2 
}

rule a2 w 2 maxdepth 2 > d {
  // Split into two halves in y direction
  {  s 1  0.333 1 y  -1   } a2
  {  s 1 0.666   1 y 0.26  } a2
}


rule a2 {  d }

// This rule chooses a random color.
rule d {  {   s 1 1 0.02 color #F00 } square  }
rule d {  {   s 1 1 0.02 color #0404A2  } square  }
rule d {  {   s 1 1 0.02 color #FFFE33 } square  }
rule d w 2 {  {   s 1 1 0.02 color #FFF  } square  }

// Draws a framed square
rule square {
  { s 0.95 0.95 1  }  box 
  { s 0.05 1 1 b 0 x -10} box 
  { s 0.05 1 1 b 0 x 10 } box 
  { s 1.05  0.05  1 b 0 y -10 } box 
  { s 1.05  0.05  1 b 0 y 10 } box 
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