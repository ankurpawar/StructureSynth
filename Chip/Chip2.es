// chip
 set background #fff

1 * {z -0.085 s 10 10 0.025 color #bbb} box

1 * {z -0.015 s 1.3 1.3 0.025 color #777} box
1 * {z -0.025 s 3 3 0.025 color #235} box

//inner connecting wires
1 * {x -0.525 y 0.5 } 20 * { x 0.05 color #eee} inpins
1 * {y -0.525 x 0.5 rz 90} 20 * {x 0.05 color #eee} inpins
1 * {y -0.525 x -0.5 rz 90} 20 * { x 0.05 color #eee} inpins
1 * {x -0.525 y -0.5} 20 * { x 0.05 color #eee} inpins

rule inpins{
{s 0.005 0.35 0.005} box
}


1 * {x 0 y 1.075 } cover
1 * {x 1.075  y 0 rz 90} cover
1 * {x 0  y -1.075 } cover
1 * {x -1.075  y 0 rz 90} cover

rule cover{
{s 3 0.85 0.025 color #235} box
}

//outer pins
1 * { x -1.565 y 1.5 z -0.015} 20 * { x 0.15 color #eee} opins
1 * { x -1.5 y -1.565 z -0.015 rz 90} 20 * { x 0.15 color #eee} opins
1 * { x 1.565 y -1.5 z -0.015 rz 180} 20 * { x 0.15 color #eee} opins
1 * { x 1.5 y 1.565 z -0.015 rz 270} 20 * { x 0.15 color #eee} opins

rule opins{
{s 0.05 0.1 0.01} box
{y 0.045  z -0.015 rx 90 s 0.05 0.02 0.01}box
{y 0.045  z -0.045 ry 90 s 0.05 0.01 0.01}box
}




//core

a2

rule a2 w 1 maxdepth 2 > d {
  {  s 0.3334 1 1 x -1   h 5} a2
  {  s 0.6666 1 1 x 0.25  h 25} a2 
}


rule a2 w 10 maxdepth 4 > d {
  {  s 0.5 1 1.09 x -0.5  h 25} a2
  {  s 0.5 1 1.05 x 0.5  h 35} a2
}


rule a2 w 8 maxdepth 5 > d {
  {  s 1 0.5 1.075 y -0.5 h 5 } a2
  {  s 1 0.5 1.065 y  0.5 h 35} a2 
}

rule a2 w 0 maxdepth 2 > d {
  {  s 1 0.3334 1 y -1   h 15} a2
  {  s 1 0.6666 1 y 0.25  h 5} a2 
}

rule d {
  {   s 1 1 0.02 } box 
}




