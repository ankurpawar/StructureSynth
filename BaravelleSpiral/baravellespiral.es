// Write EisenScript code here...

//1 * {y -0.7 s 50 0.1 50 color #eee}box
3 * {ry 90 h 90} spiral
rule spiral md 2{
{x 0 z 0 y -0.3 ry 45 s 0.707 0.5 0.707 } spiral
tri
//square
}

rule square{
box
}
rule tri { 
	 triangle[0,0.1,0;0.5,0.1,0;0,0.1,0.5] 
       triangle[0,-0.1,0;0.5,-0.1,0;0,-0.1,0.5] 

       triangle[0,0.1,0;0,0.1,0.5;0,-0.1,0] 
       triangle[0,-0.1,0.5;0,-0.1,0;0,0.1,0.5] 
       
       triangle[0,0.1,0;0.5,0.1,0;0,-0.1,0] 
       triangle[0.5,-0.1,0;0.5,0.1,0;0,-0.1,0] 

       triangle[0,-0.1,0.5;0,0.1,0.5;0.5,0.1,0] 
       triangle[0.5,0.1,0;0.5,-0.1,0;0,-0.1,0.5] 
 
} 
