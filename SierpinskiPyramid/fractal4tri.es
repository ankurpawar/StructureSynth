#define dis 0.5
r1

rule r1 md 5 > p2{
{x 0.25 y 0.25 z 0.25 s 0.5 h 20}r1
{x 0 y 0 s 0.5  h 20}r1
{x  0.5 y 0.5 s 0.5  h 20}r1
{x 0.5 y 0 s 0.5  h 20}r1
{x 0 y 0.5 s 0.5  h 20}r1

}

rule p2{
{}pyramid
}
rule pyramid { 
	 triangle[0,0,0;1,0,0;0.5,0.5,0.5] 
	 triangle[1,0,0;1,1,0;0.5,0.5,0.5] 
	 triangle[1,1,0;0,1,0;0.5,0.5,0.5] 
	 triangle[0,1,0;0,0,0;0.5,0.5,0.5] 
} 

