//set maxobjects 20
set maxdepth 11 
branch  
rule branch {   
{ y 1 x -0.5 s 0.707 rz 45 ry -90 } branch   
{ y 1 x 0.5 s 0.707 rz -45 ry -90 } branch   
box 
}
