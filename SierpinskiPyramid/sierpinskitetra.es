//tetrahedron
set background #fff
//set colorpool list:white,#ee0,#e0e,#0ee
set colorpool list:white,#e80,#08e,#8e0
#define dis 1
#define const 0.2886
#define off 0.866
//1 * {z -0.05 s 50 50 0.1 color #e99}box
r1

rule r1 md 5 > p2{
{x 0 y 0 s 0.5 h 72}r1
{x 0.5 y 0 s 0.5 h 72}r1
{x 0.25 y 0.433 s 0.5 h 72}r1
{x 0.25 y 0.1443 z 0.433 s 0.5 h 72}r1
}

rule p2{
{color random}pyramid
}
rule pyramid { 
	
        triangle[0,0,0;1,0,0;0.5,off,0]
        triangle[0,0,0;1,0,0;0.5,const,off]
        triangle[1,0,0;0.5,off,0;0.5,const,off]
        triangle[0,0,0;0.5,off,0;0.5,const,off]
 } 

