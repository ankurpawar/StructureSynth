// Rotation of cube
set background #fff

//{ x 1 y 3 } //sphere for lighting
{ x 0 } r1
{ x 1.5 z 1.5 rz 45} r2
{ x 3 rz 45 rx 45} r3

rule r2 md 100 {

{ rx 0 rz 45 color #ead } box
{ ry 4.5 } r2

}

rule r3 md 50 {

{ rx 35.25 rz 45 color #cd7 } box
{ ry 9 } r3

}

rule r1 md 100 {

{ rx 0 rz 0 color #7df} box
{ ry 4.5 }r1

}