//Seven Segment
#define dist 1.6
#define gap 4.75
#define big 1

{ x 20 y -11.25 z -2.5 s 500 1 500 color #04e} box
clock


rule clock{
{ x 20 y -3.25 z -2.5  color #eee } frame
{color #229}display
}

rule frame{
{ s 40 15 5 } box
{ y 6.5 z 3 s 40 2 1 } box
{ y -6.5 z 3 s 40 2 1 } box
{ x -19 z 3 s 2 15 1 } box
{ x  19 z 3 s 2 15 1 } box
}


rule display {
1 * { s big} 1 * { x 5 } digit1
1 * { s big} 1 * { x 10  } digit2
1 * { s big} 1 * { x 17  } digit0
1 * { s big} 1 * { x 22  } digit0
1 * { s big} 1 * { x 29  } digit0
1 * { s big} 1 * { x 35  } digit1

1 * { s big} 1 * { x 13.5 color #850} separate
1 * { s big} 1 * { x 25.5 color #850 } separate

}

rule separate{
 { x 0 y -1.75 s 0.5 1.5 0.2 } box
 { x 0 y -4.75 s 0.5 1.5 0.2 } box
}

rule digi { digit0 }
rule digi { digit1 }
rule digi { digit2 }
rule digi { digit3 }
rule digi { digit4 }
rule digi { digit5 }
rule digi { digit6 }
rule digi { digit7 }
rule digi { digit8 }
rule digi { digit9 }


rule digit9 {
segment
{ x dist y -dist rz 90  } segment
{ x -dist y -dist rz 90 } segment
{ x dist y -gap rz 90  } segment
{ y -3.16  } segment
{ y -6.35 } segment
}

rule digit8 {
segment
{ x dist y -dist rz 90  } segment
{ x -dist y -dist rz 90 } segment
{ x dist y -gap rz 90  } segment
{ x -dist y -gap rz 90 } segment
{ y -3.16  } segment
{ y -6.35 } segment
}

rule digit7 {
segment
{ x dist y -dist rz 90 } segment
{ x dist y -gap rz 90 } segment
}

rule digit6 {
segment
{ x -dist y -dist rz 90 } segment
{ x dist y -gap rz 90  } segment
{ x -dist y -gap rz 90 } segment
{ y -3.16  } segment
{ y -6.35 } segment
}

rule digit5 {
segment
{ x -dist y -dist rz 90 } segment
{ x dist y -gap rz 90  } segment
{ y -3.16  } segment
{ y -6.35 } segment
}

rule digit4 {
{ x dist y -dist rz 90  } segment
{ x -dist y -dist rz 90 } segment
{ x dist y -gap rz 90  } segment
{ y -3.16  } segment
}

rule digit3 {
segment
{ x dist y -dist rz 90  } segment
{ x dist y -gap rz 90  } segment
{ y -3.16  } segment
{ y -6.35 } segment
}

rule digit2 {
segment
{ x dist y -dist rz 90  } segment
{ y -3.16  } segment
{ x -dist y -gap rz 90 } segment
{ y -6.35 } segment
}

rule digit1 {
{ x dist y -dist rz 90 } segment
{ x dist y -gap rz 90 } segment
}

rule digit0 {
segment
{ x dist y -dist rz 90  } segment
{ x -dist y -dist rz 90 } segment
{ x dist y -gap rz 90  } segment
{ x -dist y -gap rz 90 } segment
{ y -6.35 } segment
}

rule segment {
{ s 2 1 1 } box
{ x 1 y 0 rz 45  s 0.707 0.707 1 } box
{ x -1 y 0 rz 45  s 0.707 0.707 1 } box
}