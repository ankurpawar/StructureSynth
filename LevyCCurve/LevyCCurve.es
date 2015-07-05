//Levy C Curve
#define displace 0.5
set maxdepth 200
set colorpool list:white,skyblue,#0044dd,#0088ee
set background white

1 * {z  -0.0575 s 50 50 0.1 color #666}box

R1

rule R1 maxdepth 12 > R2{
{ y 0.5  x displace rz -45 s 0.707  h 40 }R1
{ y 0.5  x -displace rz 45 s 0.707 h 40 }R1 

}

rule R2{
{s 2.1 0.2 5 color random}box
}
