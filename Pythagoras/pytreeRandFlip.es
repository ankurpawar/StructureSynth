//Pytree with random angle and flipped at each level
//seed number 64


set background #fff

set colorpool list:#fff,#ff0,#f0f,#0ff,#fff
set maxdepth 19

R1

rule R1{  tree70 }
rule R1{  tree50 }
rule R1{  tree60 }
rule R1{  tree45 }

//70 20 flipped pytree

rule tree70 w 2 md 1 > tree20 {
{ y 0.719  x 0.6022  s 0.3420  rz -70 } tree70
{ y 1.102  x -0.2192  s 0.9397  rz 20 } tree70
{ blend #ff0 0.4 sat 0.5} box
//{ color random } box
}

rule tree20 w 2 md 1 > R1 {
{ y 0.719  x -0.6022  s 0.3420  rz 70 } tree20
{ y 1.102  x 0.2192  s 0.9397  rz -20 } tree20
{ blend #ff0 0.4 sat 0.5} box
//{ color random } box
}


//50 40 flipped pytree

rule tree50 md 1 > tree40 {
{ y 0.9530  x 0.5396  s 0.6428  rz -50 }tree50
{ y 1.04  x -0.4528  s 0.766  rz 40 }tree50
{ blend #f0f 0.4 } box
//{ color random} box
}

rule tree40 md 1 > R1 {
{ y 0.9530  x -0.5396  s 0.6428  rz 50 }tree40
{ y 1.04  x 0.4528  s 0.766  rz -40 }tree40
{ blend #f0f 0.4 } box
//{ color random } box
}


//60 30 flipped pytree

rule tree60 md 1 > tree30 {
{ y 0.842  x 0.5915  s 0.5  rz -60 }tree60
{ y 1.092  x -0.3415  s 0.866  rz 30 }tree60
{ blend #0ff 0.4 } box
//{ color random } box
}

rule tree30 md 1 > R1{
{ y 0.842  x -0.5915  s 0.5  rz 60 }tree30
{ y 1.092  x 0.3415  s 0.866  rz -30 }tree30
{ blend #0ff 0.4  } box
//{ color random } box
}

//45 pytree

rule tree45 md 1 > R1{
{ y 1  x 0.5  s 0.707  rz -45 }tree45
{ y 1  x -0.5  s 0.707  rz 45 }tree45
{ color #fff } box
//{ color random } box
}

//rule for coloring box

rule square w 2 {
{ color #ff0000 } box
}

rule square w 10 {
{ color #eeeeee } box
}
