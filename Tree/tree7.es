//Tree 7 
set maxdepth 280

1 * { h 200 } 10 *{ ry 10 y -0.5 sat 1 } box
1 * { h 200 } 4 * { ry 90 sat 1} spiral 

rule spiral w 100 md 60 > flower { 
 box   
{ y 0.55 ry 10 rz 1.5 rx 1.5 s 0.99 } spiral
}

rule spiral w 5 {  
 spiral
{ ry 180  z 0.5 rx 45 h 3  }  spiral
} 

rule flower {
1 * { h 210 y 0.2 } 8 * { ry 45 } petal
ball
}

rule petal {
{ x 0.75 rz 25 s 1 0.05 0.5} box
}

rule ball {
{ s 0.65 sat 1 h 90 } sphere
}
