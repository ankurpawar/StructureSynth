// Write EisenScript code here...

 set background #fff

cube 

rule cube md 3 > a2{
//1 * {s 0.5} 2 * {z 2 x 2 ry 180 } 4 * { x 2 rz 90 } cube

1 * {s 0.5} 2 * { x 1 z -1  rz 0 } cube
1 * {s 0.5} 1 * {x 1.0 y 1.0  z -2 rz 0 } cube
1 * {s 0.5} 1 * {x 1.0 y 0  z -2 rz 0 } cube
}

rule a2 {
  // Split into two halves in x direction
  {  s 1 0.1 0.1 x 0.5 y 0 z 0} d
  {  s 0.1 1 0.1 x 0 y 0.5 z 0} d
  {  s 0.1 0.1 1 x 0 y 0 z 0.5} d
 1 * {rz -45 y 0.75} 1 * {  s 1.5 0.1 0.1} d
 1 * {ry 45 z 0.75} 1 * {  s 1.5 0.1 0.1} d
 1 * {rx 45 y 0.75} 1 * {  s 0.1 0.1 1.5} d

}

rule d w 2 {
  {    } box 
}



