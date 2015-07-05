//Inverted Sierpinki Pyramid
set background #fff
#define dis 0.5
#define off 0.866
#define gap 1

r1

rule r1 md 5 {

 { x 0   z 0.433 s 0.5 h 40 } r1

{ x 0.25    y 0.25   s 0.5  h 40 } r1
{ x -0.25  y -0.25  s 0.5  h 40 } r1
{ x -0.25  y 0.25   s 0.5  h 40 } r1
{ x 0.25   y -0.25  s 0.5  h 40 } r1
{ z 0.25 } p2

}

rule p2 {

 { s 0.5 } pyramid2

}

rule pyramid2 { 

	 triangle[0.5,0.5,0 ;0,0,off;1,0,off] 
	 triangle[0.5,0.5,0 ;1,0,off;1,1,off] 
	 triangle[0.5,0.5,0 ;1,1,off;0,1,off] 
	 triangle[0.5,0.5,0 ;0,1,off;0,0,off] 
      
     	 triangle[0,0,off;1,0,off;1,1,off] 
	 triangle[1,1,off;0,1,off;0,0,off] 

} 

