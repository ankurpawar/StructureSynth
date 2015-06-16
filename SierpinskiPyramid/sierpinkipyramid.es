//Sierpinki Pyramid
set background #fff
#define dis 0.5
#define off 0.866
#define gap 1

r1

rule r1 md 4 > p1 {

{ x 0   z 0.433 s 0.5 h 40 } r1

{ x 0.25    y 0.25   s 0.5  h 40 } r1
{ x -0.25  y -0.25  s 0.5  h 40 } r1
{ x -0.25  y 0.25   s 0.5  h 40 } r1
{ x 0.25   y -0.25  s 0.5  h 40 } r1

}

rule p1 {
 { z 0.5 h 50 } pyramid1
}
rule pyramid1 { 
	 triangle[0,0,0;1,0,0;0.5,0.5,off] 
	 triangle[1,0,0;1,1,0;0.5,0.5,off] 
	 triangle[1,1,0;0,1,0;0.5,0.5,off] 
	 triangle[0,1,0;0,0,0;0.5,0.5,off] 
}