// Write EisenScript code here...
set maxdepth 400

4 * { ry 90 h 100 sat 0.85} spiral 

rule spiral w 100 md 350 > Rin{ 
box   
{ y 0.2 rx 1 ry 1 s 0.993 }spiral
}

rule spiral w 1 {  
spiral
{ ry 180 h 3  }  spiral
} 

rule Rin  md 8 > leaf{ 
box   
{ y 0.5 rx 1 ry 1 s 0.993 }Rin
}

rule leaf md 30 > R2 {
box
{ ry 10 x 0.5 z 0.5  y 0.5 h -3 s 1 1 0.95} leaf 
}

rule R2{
{s 15 h 170 sat 1} sphere
}

