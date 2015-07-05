//3D Tree
set maxdepth 500

1 * { ry 90 h 30} spiral 

rule spiral w 100 md 400 > R2{ 
{ y 0.2 rx 1 ry 1 s 0.993 }spiral
 box   
}

rule spiral w 1 {  
spiral
{ ry 180 h 3  }  spiral
} 

rule R2{
{ s 2.5 h 70 } sphere
 { y -1 s 3 0.2 2 h 120 } R3
}

rule R3 md 35 {
box
{ rx 5 ry 15 } R3
}