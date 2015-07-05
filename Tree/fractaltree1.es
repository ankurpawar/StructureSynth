//fractaltree1
#define gap 0.5
set maxdepth 200
set background white
set colorpool list:white,#f00,#f80,#ff0

//1 * { s 0.01 100 100 color #eee } box
tree

rule tree md  6  {

{ x gap s 0.49 } tree
{ x gap y 0 s 0.49 rz 90 } tree
{ x gap y 0 s 0.49 rz -90 } tree

{ x gap y 0 s 0.49 ry -90 } tree
{ x gap y 0 s 0.49 ry 90 } tree
//{ x -0.5 y 0 s 0.49 rz 180} tree
plus
}

rule plus {
{ x 0.25 s 0.25 1 1 rz 90 } d
}

rule d {
{ s 0.05 2 0.05  color random } box
}



