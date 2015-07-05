// Mondrian Cube.
 set background #fff

mondrian
set colorpool list:#F00,#0404A2,#FFFE33,#FFF

rule mondrian {
  //  The six faces of the cube  
  a2 
 
}

rule a2 w 3 maxdepth 3 > d {
  // Split into two halves in x direction
  {  s 0.3334 1 1 x -1  h 15} a2
  {  s 0.6666 1 1 x 0.25  h 25} a2 
}

rule a2 w 5 maxdepth 3 > d {
  // Split into two halves in x direction
  {  s 0.5 1 1 x -0.5   h 15} a2
  {  s 0.5 1 1 x 0.5   h 30} a2
}


rule a2 w 6 maxdepth 3 > d {
 // Split into two halves in x direction
  {  s 1 0.5 1 y -0.5  h 15 } a2
  {  s 1 0.5 1 y  0.5  h 20} a2 
}

rule a2 w 2 maxdepth 2 > d {
  // Split into two halves in x direction
  {  s 1 0.3334 1 y -1   h 5} a2
  {  s 1 0.6666 1 y 0.25  h 15} a2 
}




rule d w 2 {
  {   s 1 1 1 } square  
}

// Draws a framed square
rule square {
  { s 0.9 0.9 0.02 color random}  box 
 {color #222}frame
}

rule frame  {

//{ s 1 0.05 0.05 y 10  x 0 } box
//{ s 1 0.05 0.05 y -10  x 0 } box


{ s 0.1 1 0.05 y 0  x 4.5 } box
{ s 0.1 1 0.05 y 0  x -4.5 } box
1 * {rz 90  s 0.1 1 0.05} 1 * { y 0  x -4.5 } box
1 * {rz -90} 1 * { s 0.1 1 0.05 y 0  x -4.5 } box
}




