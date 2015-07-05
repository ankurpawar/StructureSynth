// Write EisenScript code here...
// Write EisenScript code here...

#define shrink s 0.999

set maxdepth 120
set background #fff

4 * {ry 90 color #f50 } hbox
4 * {rx 3 ry 90} ball
ball2
rule hbox { r}
rule r { forwardx1}
//rule r { forwardy }
//rule r { forwardz }
//rule r { turn3 }
//rule r { turn2 }
//rule r { turn4 }
//rule r { turn3 }

rule forwardx1 md 30 > turn4 { 
dbox
{ x 0.5 shrink } forwardx1
}

rule forwardx2 md 30 > turn3 {
dbox
{ x 0.5 shrink } forwardx2
}

rule forwardx3 md 30 > turn3 {
dbox
{ x 0.5 shrink } forwardx3
}

rule forwardx4 md 30 > turn4 {
dbox
{ x 0.5 shrink } forwardx4
}





rule turn md 55 > forwardx1 {
dbox
{ rz 1.5 x 0.5 shrink } turn
}

rule turn2 md 55 > forwardx2 {
dbox
{ rz -1.5 x 0.5 shrink } turn2
}

rule turn3 md 55 > forwardx3 {
dbox
{ ry 1.5 x 0.5 shrink } turn3
}

rule turn4 md 55 > forwardx4 {
dbox
{ ry -1.5 x 0.5  shrink } turn4
}


rule dbox {
 { ry 15  s 0.2 4 1 } box
}

rule ball {
 {y 5 x 13 z 13} sphere
}

rule ball2 {
 {y 50} sphere
}
// Write EisenScript code here...
