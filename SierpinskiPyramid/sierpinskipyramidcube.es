//Sierpinski Pyramid Cube
#define dis 1
#define off 0.866
set background #fff

1 * {z -0.1 s 50 50 0.1 color #ad6 } box
2 * {x 2 z 2  ry 180 } 4 * {y 2 rx 90 } r1

rule r1 md 3 > p2 {
{s 0.5   x 0 y 0  } r1
{ s 0.5  x 1 } r1
{ s 0.5  x 0 y 1  z 0 } r1
{ s 0.5  x 0 y 0  z 1 } r1
}

rule r1 md 1 > p2 {
{s 0.5   x 0 y 0  } r1
{ s 0.5  x 1 } r1
{ s 0.5  x 0 y 1  z 0 } r1
{ s 0.5  x 0 y 0  z 1 } r1
}

rule r1 md 1 > p2 {
{s 0.5   x 0 y 0  }r1
{ s 0.5  x 1 }r1
{ s 0.5  x 0 y 1  z 0 }r1
{ s 0.5  x 0 y 0  z 1 }r1
}

rule p2{
//{x 0.5 y 0.5 z 0.5 color #b9c}box
{ x 0.5 y 0.5 z 0.5 color #b9c } pyramid
}
rule pyramid { 

	 triangle[0,0,0;0,1,0;1,0,0] 

        triangle[0,0,0;0,1,0;0,0,1] 

       triangle[0,0,0;1,0,0;0,0,1] 

       triangle[1,0,0;0,1,0;0,0,1] 

} 