//pytree 3d
#define displace 0.25

set maxdepth 200
set background white

R1

rule R1 maxdepth 5 > R2{
{ y 0.75  x displace rz -45 s 0.707  h 40 }R1 
{ y 0.75  x -displace rz 45 s 0.707 h 40 }R1 

{ y 0.75  z displace rx 45 s 0.707  h 40 }R1 
{ y 0.75  z -displace rx -45 s 0.707 h 40 }R1 

{s 0.1 1 0.1 } box
}

rule R2{
{s 0.1 1 0.1 } box
{y 0.5 s 0.5 color #e87}sphere

}

rule d{
{ s 0.1 0.9 0.9 x 5 } box
{ s 0.1 0.9 0.9 x -5 } box

{ s 0.9 0.1 0.9 y 5 } box
{ s 0.9 0.1 0.9 y -5 } box

{ s 0.9 0.9 0.1 z 5 } box
{ s 0.9 0.9 0.1 z -5 } box
}

rule frame  {
{ s 0.1 1.1 0.1 x 5  z 5 } box
{ s 0.1 1.1 0.1 x 5  z -5 } box
{ s 0.1 1.1 0.1 x -5  z 5 } box
{ s 0.1 1.1 0.1 x -5  z -5 } box

{ s 1 0.1 0.1 y 5  z 5 } box
{ s 1 0.1 0.1 y 5  z -5 } box
{ s 1 0.1 0.1 y -5  z 5 } box
{ s 1 0.1 0.1 y -5  z -5 } box

{ s 0.1 0.1 1 y 5  x 5 } box
{ s 0.1 0.1 1 y 5  x -5 } box
{ s 0.1 0.1 1 y -5  x 5 } box
{ s 0.1 0.1 1 y -5  x -5 } box
}



 