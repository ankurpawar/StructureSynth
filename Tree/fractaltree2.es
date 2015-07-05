//fractaltree1
#define gap 0.5
#define scaf 0.6
//scale factor
#define rot 45
set maxdepth 200
set background white
set colorpool list:white,#0f5,#8f0,#091

//1 * { s 0.01 100 100 color #eee } box
tree

rule tree md  5  {

{ x gap s scaf } tree
{ x gap y 0 s scaf rz rot } tree
{ x gap y 0 s scaf rz -rot } tree

{ x gap y 0 s scaf ry -rot } tree
{ x gap y 0 s scaf ry rot } tree
//{ x -0.5 y 0 s scaf rz 180} tree
plus
}

rule plus {
{ x 0.25 s 0.25 1 1 rz 90 } d
}

rule d {
{ s 0.05 2 0.05  color random } box
}

