// Dragon Factal
#define displace 0.5
set colorpool list:white,skyblue,#0044dd,#0088ee
set maxdepth 200
set background black

1 * {z -1 s 20 20 1 color #999}box

R1

rule R1 md 10 > R2 {
{s 0.707 y 1  x displace rz 45   }R1
{s 0.707 y 1  x -displace rz 45   }R1

}

rule R2{
{s 0.707 0.707 1 color random}box
}

 