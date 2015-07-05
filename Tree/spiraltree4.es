set maxdepth 370

10 * { y -1 color #069} box


4 * { ry 90 color #069} spiral

rule spiral w 100 md 300 > spiral2{ 
 box   
{ y 0.2 rx 2.5 ry 1.5 s 0.995 color #069} spiral
}

rule spiral2  md 50 > leaf{ 
 box   
{ y 0.2 rx -2.5 s 0.995 color #069} spiral2
}

rule leaf {
1 * { h 50 y 0.5 s 2.25} 8 * { ry 45 color #6f0}leaf1
ball
}
rule leaf1{
{ x 0.75 rz 25 s 1 0.05 0.5} box
}

rule ball{
{ s 1.75 y 0.35 color #f6c} sphere
}

rule spiral w 1 {  
spiral
{ ry 90 rx 90  h 3  color #069}  spiral
} 
