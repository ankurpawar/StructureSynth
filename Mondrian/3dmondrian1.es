// 3D Mondrian Cube 1
 set background #fff
set colorpool list:#F00,#0404A2,#FFFE33,#FFF

mondrian

rule mondrian {
  a2 
}

rule a2 w 3 maxdepth 2 > d {
  {  s 0.3334 1 1 x -1     } a2
  {  s 0.6666 1 1 x 0.25 } a2 
}

rule a2 w 3 maxdepth 2 > d {
  {  s 1 0.3334 1 y -1     } a2
  {  s 1 0.6666 1 y 0.25 } a2 
}

rule a2 w 3 maxdepth 2 > d {
  {  s 1 1 0.3334  z -1     } a2
  {  s 1 1 0.6666  z 0.25 } a2 
}

rule a2 w 3 maxdepth 2 > d {
  {  s 0.5 1 1 x -0.5  } a2
  {  s 0.5 1 1 x 0.5   } a2
}


rule a2 w 3 maxdepth 2 > d {
  {  s 1 0.5 1 y -0.5 } a2
  {  s 1 0.5 1 y  0.5 } a2 
}

rule a2 w 3 maxdepth 2 > d {
  {  s 1 1 0.5 z -0.5 } a2
  {  s 1 1 0.5 z  0.5 } a2 
}

rule d {
  {   s 1 1 1 } square  
}

rule square {
  { s 0.95 color random }  box 
  { color #eee } frame
}

rule square {
  { s 0.95 color  random }  box 
  { color #222 } frame
}

rule frame  {

{ s 0.1 1 0.05 y 0  x 4.5 z 9.5 } box
{ s 0.1 1 0.05 y 0  x -4.5 z 9.5 } box
1 * { rz 90  s 0.1 1 0.05} 1 * { y 0  x -4.5 z 9.5 } box
1 * { rz -90} 1 * { s 0.1 1 0.05 y 0  x -4.5 z 9.5 } box

{ s 0.1 1 0.05 y 0  x 4.5 z -9.5 } box
{ s 0.1 1 0.05 y 0  x -4.5 z -9.5 } box

1 * { rz 90  s 0.1 1 0.05 } 1 * { y 0  x -4.5 z -9.5 } box
1 * { rz -90 } 1 * { s 0.1 1 0.05 y 0  x -4.5 z -9.5 } box

{ s 0.05 0.05 1 y 9.5  x -9.5 z 0 } box
{ s 0.05 0.05 1 y 9.5  x 9.5 z 0 } box

{ s 0.05 0.05 1 y -9.5  x -9.5 z 0 } box
{ s 0.05 0.05 1 y -9.5  x 9.5 z 0 } box

}





