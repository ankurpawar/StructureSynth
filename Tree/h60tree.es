//h 60 tree
#define displace 0.3
#define up 0.6
set maxdepth 200
set background white

R1

rule R1 maxdepth 8 {
{ y up x displace rz -60 s 0.6667 h 40 }R1 d
{ y up x -displace rz 60 s 0.6667 h 40 }R1 d
}

rule d{
{s 0.1 1 0.1  h 40}box
}


