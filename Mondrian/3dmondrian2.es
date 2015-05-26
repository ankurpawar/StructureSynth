//3D Mondrian Cube 2
 set background #fff
set colorpool list:#F00,#0404A2,#FFFE33,#FFF
mondrian

rule mondrian {
  a2 
}

rule a2 w 3 maxdepth 3 > d {
  {  s 0.3334 1 1 x -1     } a2
  {  s 0.6666 1 1 x 0.25 } a2 
}

rule a2 w 3 maxdepth 3 > d {
  {  s 1 0.3334 1 y -1      } a2
  {  s 1 0.6666 1 y 0.25  } a2 
}

rule a2 w 3 maxdepth 3 > d {
  {  s 1 1 0.3334  z -1     } a2
  {  s 1 1 0.6666  z 0.25 } a2 
}

rule a2 w 3 maxdepth 3 > d {
  {  s 0.5 1 1 x -0.5 } a2
  {  s 0.5 1 1 x 0.5  } a2
}


rule a2 w 3 maxdepth 3 > d {
  {  s 1 0.5 1 y -0.5 } a2
  {  s 1 0.5 1 y  0.5 } a2 
}

rule a2 w 3 maxdepth 3 > d {
  {  s 1 1 0.5 z -0.5 } a2
  {  s 1 1 0.5 z  0.5 } a2 
}

rule d {
    { s 1 color random}  box 
}






