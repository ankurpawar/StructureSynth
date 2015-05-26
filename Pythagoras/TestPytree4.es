//pytree 60 30 with consecutive rotation on each level randomly
set maxdepth 15
R1

rule R1 md 1 > R1 {
{ y 0.842  x 0.5915  s 0.5  rz -60 h 10 }R1
{ y 1.092  x -0.3415  s 0.866  rz 30 h 10 }R1
 square
}

rule R1 md 1 > R1{
{ y 0.842  z 0.5915  s 0.5  rx 60 h 10 }R1
{ y 1.092  z -0.3415  s 0.866  rx -30 h 10 }R1
 square
}

rule square w 10 {
{ color #ffffff } box
}

rule square w 5 {
{ color #0000ff } box
}

