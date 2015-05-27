//chip board 2
 set background #fff
#define off 0.9
#define dis 0.9
//green base
1 * {z -0.085 s 4 4 0.025 color #999} box

board

rule board w 1 md 1 > flatchip{
  {x off y off s 0.5 0.5 1 } board
 {x -off y -off s 0.5 0.5 1 } board
 {x off y -off s 0.5 0.5 1 } board
 {x -off y off s 0.5 0.5 1 } board
}

rule board w 1 md 1 > r2{
  {x dis y off s 0.5 0.5 1 } board
 {x -dis y -off s 0.5 0.5 1 } board
 {x dis y -off s 0.5 0.5 1 } board
 {x -dis y off s 0.5 0.5 1 } board
}

rule r2{
{x 0 y -1 s 0.5 }dipchip
{x 0 y 0.0 s 0.5 }dipchip
{x 0 y 1 s 0.5 }dipchip
}

rule dipchip{
1 * {z -0.01 s 6 1.5 0.025 color #235} box
1 * {z -0.025 s 6 1.5 0.025 color #235} box

//outer pins
1 * { x -3.075 y 0.75 z -0.015} 40 * { x 0.15 color #eee} opins
1 * { x 3.075 y -0.75 z -0.015 rz 180} 40 * { x 0.15 color #eee} opins
}

//flat pack chip
//flatchip


rule flatchip{
1 * {z -0.01 s 3 3 0.025 color #235} box
1 * {z -0.025 s 3 3 0.025 color #235} box

//outer pins
1 * { x -1.565 y 1.5 z -0.015} 20 * { x 0.15 color #eee} opins
1 * { x -1.5 y -1.565 z -0.015 rz 90} 20 * { x 0.15 color #eee} opins
1 * { x 1.565 y -1.5 z -0.015 rz 180} 20 * { x 0.15 color #eee} opins
1 * { x 1.5 y 1.565 z -0.015 rz 270} 20 * { x 0.15 color #eee} opins
}

rule opins{
{s 0.05 0.1 0.01} box
{y 0.045  z -0.015 rx 90 s 0.05 0.02 0.01}box
{y 0.045  z -0.045 ry 90 s 0.05 0.01 0.01}box
}

