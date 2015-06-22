
set colorpool list:white,#e80,#08e,#8e0,#80e
 set background #fff
cube
1 * {z -0.1 s 50 50 0.1 color #eee}box


rule cube{
4 * {z 0.5125 y 1.5  rx 90} 4 * {x 1 rz 90}  a2 
1 * {z 1.5 x -0.5 ry 90 } 2 * {x 1 z 2 ry 180} 4 * {x 1 rz 90}  a2 
}

rule a2 w 5 maxdepth 5 > d {
  {  s 0.5 0.5 1.05 x -0.5  y 0.5} a2
  {  s 0.5 0.5 1.05 x 0.5 y -0.5} a2
  {  s 0.5 0.5 1.05 x -0.5 y -0.5 blend red 0.5} a2

}

rule d w 2 {
  {   s 1 1 0.02 } box 
}


