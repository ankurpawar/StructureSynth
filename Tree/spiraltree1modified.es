//Spiral Tree 2 , use seed 11,6,470,37,43
set colorpool list:red,#f0f,#80f,#f08
set maxdepth 520

{ h 100 sat 0.8 } stem

rule stem md 20 {
 {color #fff}box
{ y -1 } stem 
}

{ h 100 sat 0.8 } spiral
{ ry 180 h 100 sat 0.8 } spiral


rule spiral w 1 {  
 spiral
{ ry 180 h 3  }  spiral
} 

rule spiral w 50 md 100 > leaf { 
{ y 0.4 rz 3 s 0.993 } spiral
 {color #fff } box   
}

 
rule spiral w 100 md 300 > leaf { 
{ y 0.4 rz 3 s 0.995 } spiral
 {color #fff } box   
}

rule leaf {
{ s 3.5 3.5 0.75  rz 30 color random } box
}