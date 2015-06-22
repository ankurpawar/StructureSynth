//Seven Segment
#define dist 1.6
#define gap 4.75

1 * {x 27.5 y -3.25 z -2.5 s 55 11 5 color #eee} box
display


rule display {
1 * { s 1 1 1} 10 * { x 5 color #111 } digi
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