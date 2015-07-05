//Tree 6
set maxdepth 500

10 * { y -0.5 sat 1  color #ccc} box
4 * { ry 90 sat 1 } spiral 

rule spiral w 100 md 300 > spiral2 { 
{ color #ccc } box   
{ y 0.2 ry 1 rz 1 rx 1.5 s 0.993 } spiral
}

rule spiral2  md 50 > flower { 
{ color #ccc } box   
{ y 0.5  rx 2.5 s 0.993 } spiral2
}

rule spiral w 1 {  
 spiral
{ ry 180  z 0.5 rx 45 rz 0 }  spiral
} 

rule flower {
1 * {  y 0.75 s 4 } 8 * { ry 45 } petal
ball
}

rule petal {
{ x 0.45 rz 25 s 1 0.05 0.35 color #f09 } box
}

rule ball {
{ s 1.75 y 0.5 sat 1 color #f60 } sphere
}

