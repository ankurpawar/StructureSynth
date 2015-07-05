// Write EisenScript code here...
#define shrink s 0.999

set maxdepth 3000
set background #888

2 * { ry 180 color #a6f } hbox


rule hbox { r}
//rule r { forwardx }
//rule r { forwardy }
//rule r { forwardz }
rule r { turn }
//rule r { turn2 }
//rule r { turn4 }
//rule r { turn3 }

rule forwardx1 md 20 > turn4 { 
dbox
{ x 0.2 shrink } forwardx1
}

rule forwardx2 md 20 > turn3 {
dbox
{ x 0.2 shrink } forwardx2
}

rule forwardx3 md 20 > turn2 {
dbox
{ x 0.2 shrink } forwardx3
}

rule forwardx4 md 20 > turn {
dbox
{ x 0.2 shrink } forwardx4
}





rule turn md 45 > forwardx1 {
dbox
{ rz 2 x 0.1 shrink } turn
}

rule turn2 md 45 > forwardx2 {
dbox
{ rz -2 x 0.1 shrink } turn2
}

rule turn3 md 45 > forwardx3 {
dbox
{ ry 2 x 0.1 shrink } turn3
}

rule turn4 md 45 > forwardx4 {
dbox
{ ry -2 x 0.1 shrink } turn4
}


rule dbox {
 {s 0.2 1 1 } box
}

