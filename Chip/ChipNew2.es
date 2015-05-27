// Write EisenScript code here...12
 set background #fff
  a2 

rule a2 w 3 maxdepth 3 > d {

  {  s 0.5 0.5 0.5 x 0.5 y 0.5  h 45} a2
  {  s 0.5 0.5 0.5 x -0.5  y 0.5 h 10} a2 
  {  s 0.5 0.5 0.5 x 0.5 y -0.5   h 60} a2
  {  s 0.5 0.5 0.5 x -0.5 y -0.5  h 30} a2 

}

rule a2 w 3 maxdepth 3 > d {

  {  s 0.5 0.5 0.5 x 0.5 y 0.5  h 5} a2
  {  s 0.5 0.5 0.5 x -0.5  y 0.5 h 15} a2 
  {  s 0.5 0.5 0.5 x 0.5 y -0.5   h 45} a2
  {  s 0.5 0.5 0.5 x -0.5 y -0.5  h 45} a2 

} 

rule a2 w 1 maxdepth 1 > d {

  {  s 0.5 1 0.5 x 0.5 y 0  h 5} a2
  {  s 0.5 1 0.5 x -0.5  y 0 h 15} a2 

}

rule a2 w 1 maxdepth 1 > d {

  {  s 1 0.5 0.5 x 0 y 0.5  h 5} a2
  {  s 1 0.5 0.5 x 0  y -0.5 h 15} a2 

}




rule d w 2 {
{s 1 1 0.25} box
}