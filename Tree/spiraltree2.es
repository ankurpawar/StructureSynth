//Spiral Tree 2 , use seed 11,6
set maxdepth 520

{ h 100 sat 0.8 } stem

rule stem md 20 {
 box
{ y -1 } stem 
}

{ h 100 sat 0.8 } spiral
{ ry 180 h 100 sat 0.8 } spiral

rule spiral w 1 {  
 spiral
{ ry 180 h 3  }  spiral
} 

rule spiral w 100 md 400 > leaf { 
{ y 0.4 rz 2.5 s 0.995 } spiral
 box   
}

rule leaf {
{ s 7.5 7.5 1 rz 45 h 60 } box
}
