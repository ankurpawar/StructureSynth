//tile

//5 * {z 2.4136 } 5 * {x 2.4136}tile
tile
rule tile md 4{
 rect
 frame
 star
 {ry 45}tile
}

rule rect{
{s 2.4136 0.1 1 color #0e0}box
}

rule frame{
{y 0.06 z 0.49 s 2.4136 0.02 0.02 color #ee0 }box
{y 0.06 z -0.49 s 2.4136 0.02 0.02 color #ee0}box
}

rule star{
{y 0.065 s 0.96 0.03 0.96 color #eee}box
}