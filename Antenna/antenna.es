//parabolic reflector
set background #eee
set maxdepth 7000


100 * {ry 3.6 s 1  1 1}R1 

 rule R1  md 20{ 
{z 0.75 y 0 rx 1.5 s 1}R1
d
}

rule d{
{s 1 0.1 1 color #aaa}box
}

//------------
4 * {ry 90 s 1  1 1}R2 

rule R2 { 
1 * {z 7 y -7.5 rx 55 s 1} 
e
}

rule e{
{s 0.25 17 0.25 color #eee}box
}

//------------
//subreflector
1 * {y -11.5} 20 * {ry 18 s 1  1 1}R3 
1 * { y -12 s 0.25  1 0.25 color #eee}box

 rule R3  md 3{ 
{ z 0.5 y 0 rx -8 s 1}R3
d2
}

rule d2{
{s 0.5 0.025 0.5 color #00e}box
}


//-----------------base
4 * {ry 90 s 1  1 1}R4

rule R4 { 
1 * {z 7 y 2.05 rx -55 s 1} 
e2
}

rule e2{
{s 0.25 17 0.25 color #eee}box
}

R5

rule R5 { 
1 * {z 8 y 11 rx -30 s 2 2 20 color #e85} box
1 * {z 19.5 y 11 rx -30 s 1520 1520 0.1 color #886} box
}

