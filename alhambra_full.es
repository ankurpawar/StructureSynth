//tile
1 * {x 10 z 10 s 40 0.1 40 color #538}box
10 * {z 2.8 } 10 * {x 2.8}tile
//tile
rule tile md 8{
 frame
 star
 {ry 45}tile
}

rule frame{
{y 0.06 x 0.7 z 0.425 s 1.05 0.02 0.02 color #ee0 }box
{y 0.06 x 0.7 z -0.425 s 1.05 0.02 0.02 color #ee0}box

{ry -112.5 y 0.06 x -0.305 z -1.29 s 0.465 0.02 0.02 color #ee0}box
{ry -67.5 y 0.06 x 0.305 z -1.29 s 0.465 0.02 0.02 color #ee0}box
}

rule star{
{y 0.065 s 0.85 0.03 0.85 color #eee}box
}
