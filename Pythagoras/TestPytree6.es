//pytree 70,20 with consecutive rotation on each level randomly
set maxdepth 13

tree1

rule tree1 md 1 > tree2 {
{ y 0.719  x 0.6022  s 0.3420  rz -70 } tree1
{ y 1.102  x -0.2192  s 0.9397  rz 20 } tree1
 square
}

rule tree2 md 1 > tree1 {
{ y 0.719  x -0.6022  s 0.3420  rz 70 } tree2
{ y 1.102  x 0.2192  s 0.9397  rz -20 } tree2
 square
}

rule square w 2 {
{ color #ff0000 } box
}

rule square w 10 {
{ color #eeeeee } box
}
