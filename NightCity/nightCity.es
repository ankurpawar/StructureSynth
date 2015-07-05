
// Write EisenScript code here...seed=35
 set background #000
set colorpool list:gray,#aaa,#999,#ddd,#ccc

{ z 0.01 s 1 1 0.01 color #f00 } box

{ z 0.01 x 1 s 1 1 0.01 color #00f } box
{ z 0.01 x -1 s 1 1 0.01 color #00f } box
{ z 0.01 y 1 s 1 1 0.01 color #00f } box
{ z 0.01 y -1 s 1 1 0.01 color #00f } box

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

rule a2 w 2 maxdepth 2 > d {

  {  s 0.5 1 1.75 x 0.5 y 0  h 5} a2
  {  s 0.5 1 1.75 x -0.5  y 0 h 15} a2 

}

rule a2 w 2 maxdepth 2 > d {

 {  s 1 0.5 1.75 x 0 y 0.5  h 5} a2
 {  s 1 0.5 1.75 x 0  y -0.5 h 15} a2 

}




rule d w 2 {
{ s 0.9 0.9 0.25 color random} box
}


