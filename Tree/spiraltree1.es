//Spiral Tree 1 
set maxdepth 520

{ h 30 sat 0.7 } stem

rule stem md 20 {
 box
{ y -1 } stem 
}

{ h 30 sat 0.7 } spiral
{ ry 180 h 30 sat 0.7 } spiral

rule spiral w 1 {  
spiral
{ ry 180 h 3  }  spiral
} 

rule spiral w 100 md 500 > leaf{ 
  box   
 { y 0.4 rz 1 s 0.995 } spiral
}

rule leaf {
 { s 10.5 10.5 1 rz 45 h 60 } box
}
