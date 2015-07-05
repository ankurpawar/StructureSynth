// Tree 9
set colorpool list:#66f,#6cf,#3cf,#0cf,#39f
set maxdepth 370

10 * { y -1 color #663 } box
1 * { ry 45 color #663 } 10 * { y -1 } box

8 * { ry 45 } spiral

rule spiral w 100 md 220 > spiral2 { 
 { color #663 } box   
 { y 0.2 rz 0 rz -0.75  s 0.995 } spiral
}

rule spiral2  md 70 > leaf { 
 { color #663 } box   
{ y 0.2 rz 0.5 rx 1 s 0.995 } spiral2
}

rule spiral w 1 {  
spiral
{ ry 90 rx 0 }  spiral
} 

rule leaf {
1 * { h 50 y 0.5 s 2.25 color random } 8 * { ry 45 } leaf1
1 * { ry 22.5 y 0.45 s 1 color #0f5 } 8 * { ry 45 } petal
{ y 0.75 s 0.25 } pstem
{ y 0.75 s 0.25 } pstem
{ y 0.75 s 0.25 } pstem
}


rule petal {
{ x 0.45 rz -45 s 1 0.05 0.5 } box
}

rule leaf1 {
{ x 0.75 rz 25 s 1 0.05 0.5 } box
}

rule ball {
{ s 3.5 y 0 color #fdd } sphere
}

rule pstem { pstem1 }
rule pstem { pstem2 }
rule pstem { pstem3 }
rule pstem { pstem4 }
rule pstem { pstem5 }

rule pstem1 md 20 > ball {
{ y 0.5 rx 3 rz 4 ry 3 s 0.993 color #f60 } pstem1
 box
}

rule pstem2 md 20 > ball {
{ y 0.5 rx -2 rz 3 ry 3.5 s 0.993 color #f60 } pstem2
 box
}

rule pstem3 md 20 > ball {
{ y 0.5 rx -4 rz 2.5 ry -3 s 0.993 color #f60 } pstem3
 box
}

rule pstem4 md 20 > ball {
 { y 0.5 rx 1.5 rz -3.5 ry 1.5 s 0.993 color #f60 } pstem4
  box
}

rule pstem5 md 20 > ball {
{ y 0.5 rx 1.5 rz -1.5 ry -1.5 s 0.993 color #f60 } pstem5
 box
}