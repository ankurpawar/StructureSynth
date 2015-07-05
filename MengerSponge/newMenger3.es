// Write EisenScript code here...

//template::difference-begin
//template::union-begin
//{color #fff}menger
//template::union-end
//{ y 0.5 s 5 1 1 color white } box
//template::difference-end

set colorpool list:#4f9,#ff0,#0f9,#9f0,#8f3,#4f6

{ color #cdf} menger

rule menger md 1 > c2 {
	{ s 1/3 x -1 y -1  color random} menger 
	{ s 1/3 x -1 y -1  z -1  color random} menger 
	{ s 1/3 x -1 y -1  z +1  color random} menger 
	{ s 1/3 x 1 y -1   color random} menger 
	{ s 1/3 x 1 y -1  z -1  color random} menger 
	{ s 1/3 x 1 y -1  z +1  color random} menger 
	{ s 1/3  y -1  z -1  color random} menger  
	{ s 1/3  y -1  z +1  color random} menger 
       { s 1/3 x -1 y 1   color random} menger 
	{ s 1/3 x -1 y 1  z -1  color random} menger 
	{ s 1/3 x -1 y 1  z +1  color random} menger 
	{ s 1/3 x 1 y 1   color random} menger 
	{ s 1/3 x 1 y 1  z -1  color random} menger 
	{ s 1/3 x 1 y 1  z +1  color random} menger 
	{ s 1/3  y 1  z -1  color random} menger  
	{ s 1/3  y 1  z +1  color random} menger 
	{ s 1/3 x -1   z -1  color random} menger 
	{ s 1/3 x -1   z +1 color random } menger 
	{ s 1/3 x 1    z -1  color random} menger 
	{ s 1/3 x 1    z +1  color random} menger 
	
}

rule c2{
R1
R2
R3
R4
R5
R6
R7
R8
R9
R10
}

rule R1 md 2 > box{
      { s  1/3 1/3 1 x -1 y -1  } R1 
	{ s 1/3  1/3 1 x -1 y 1  z 0 } R1 
      { s 1/3 1/3 1 x 1 y 1 z 0 } R1 
	{ s 1/3 1/3 1 x 1 y -1  } R1 
}


rule R2 md 2 > box{
      { s  1/3 1 1/3  x -1 z -1  } R2
	{ s 1/3 1 1/3  x -1 z 1  z 0 } R2
      { s 1/3 1 1/3  x 1 z 1 z 0 } R2
	{ s 1/3 1 1/3  x 1 z -1  } R2
}

rule R3 md 2 > box{
      { s  1 1/3 1/3  y -1 z -1  } R3
	{ s 1 1/3  1/3  y -1 z 1  z 0 } R3
      { s 1 1/3  1/3  y 1 z 1 z 0 } R3
	{ s 1 1/3  1/3  y 1 z -1  } R3
}

rule R4 md 1 > box{
      { s  1/9  x 3 y 1 z 4  } R4
      { s  1/9  x 3 y 1 z -4  } R4
      { s  1/9  x 3 y -1 z 4  } R4
      { s  1/9  x 3 y -1 z -4  } R4

      { s  1/9  x 3 y 1 z 2  } R4
      { s  1/9  x 3 y 1 z -2  } R4
       { s  1/9  x 3 y -1 z 2  } R4
       { s  1/9  x 3 y -1 z -2  } R4
/////       
       { s  1/9  x -3 y 1 z 4  } R4
       { s  1/9  x -3 y 1 z -4  } R4
      { s  1/9  x -3 y -1 z 4  } R4
      { s  1/9  x -3 y -1 z -4  } R4

      { s  1/9  x -3 y 1 z 2  } R4
      { s  1/9  x -3 y 1 z -2  } R4
       { s  1/9  x -3 y -1 z 2  } R4
       { s  1/9  x -3 y -1 z -2  } R4
}

rule R5 md 1 > box{
      { s  1/9  x 3 z 1 y 4  } R5
      { s  1/9  x 3 z 1 y -4  } R5
      { s  1/9  x 3 z -1 y 4  } R5
      { s  1/9  x 3 z -1 y -4  } R5

      { s  1/9  x 3 z 1 y 2  } R5
      { s  1/9  x 3 z 1 y -2  } R5
       { s  1/9  x 3 z -1 y 2  } R5
       { s  1/9  x 3 z -1 y -2  } R5
/////       
       { s  1/9  x -3 z 1 y 4  } R5
       { s  1/9  x -3 z 1 y -4  } R5
      { s  1/9  x -3 z -1 y 4  } R5
      { s  1/9  x -3 z -1 y -4  } R5

      { s  1/9  x -3 z 1 y 2  } R5
      { s  1/9  x -3 z 1 y -2  } R5
       { s  1/9  x -3 z -1 y 2  } R5
       { s  1/9  x -3 z -1 y -2  } R5
}

rule R6 md 1 > box{
      { s  1/9  x 1 z 3 y 4  } R6
      { s  1/9  x 1 z 3 y -4  } R6
      { s  1/9  x 1 z -3 y 4  } R6
      { s  1/9  x 1 z -3 y -4  } R6

      { s  1/9  x 1 z 3 y 2  } R6
      { s  1/9  x 1 z 3 y -2  } R6
       { s  1/9  x 1 z -3 y 2  } R6
       { s  1/9  x 1 z -3 y -2  } R6
/////       
       { s  1/9  x -1 z 3 y 4  } R6
       { s  1/9  x -1 z 3 y -4  } R6
      { s  1/9  x -1 z -3 y 4  } R6
      { s  1/9  x -1 z -3 y -4  } R6

      { s  1/9  x -1 z 3 y 2  } R6
      { s  1/9  x -1 z 3 y -2  } R6
       { s  1/9  x -1 z -3 y 2  } R6
       { s  1/9  x -1 z -3 y -2  } R6
}


rule R7 md 1 > box{
      { s  1/9  x 1 z 4 y 3  } R7
      { s  1/9  x 1 z 4 y -3  } R7
      { s  1/9  x 1 z -4 y 3  } R7
      { s  1/9  x 1 z -4 y -3  } R7

       { s  1/9  x 1 z 2 y 3  } R7
       { s  1/9  x 1 z 2 y -3  } R7
       { s  1/9  x 1 z -2 y 3  } R7
       { s  1/9  x 1 z -2 y -3  } R7
/////       
      { s  1/9  x -1 z 4 y 3  } R7
       { s  1/9  x -1 z 4 y -3  } R7
      { s  1/9  x -1 z -4 y 3  } R7
      { s  1/9  x -1 z -4 y -3  } R7

      { s  1/9  x -1 z 2 y 3  } R7
      { s  1/9  x -1 z 2 y -3  } R7
       { s  1/9  x -1 z -2 y 3  } R7
       { s  1/9  x -1 z -2 y -3  } R7 
}

rule R9 md 1 > box{
      { s  1/9  x -1 z 2 y 3  } R9
      { s  1/9  x -1 z 2 y -3  } R9
      { s  1/9  x -1 z -2 y 3  } R9
      { s  1/9  x -1 z -2 y -3  } R9

       { s  1/9  x 1 z 2 y 3  } R9
       { s  1/9  x 1 z 2 y -3  } R9
       { s  1/9  x 1 z -2 y 3  } R9
       { s  1/9  x 1 z -2 y -3  } R9
/////       
       { s  1/9  x -2 z -3 y 1  } R9
       { s  1/9  x -2 z 3 y -1  } R9
      { s  1/9  x -2 z -3 y 1  } R9
      { s  1/9  x -2 z -3 y -1  } R9

      { s  1/9  x 2 z -3 y -1  } R9
     { s  1/9  x 2 z 3 y -1  } R9
      { s  1/9  x 2 z -3 y 1  } R9
      { s  1/9  x 2 z -3 y -1  } R9 
}



rule R8 md 1 > box{
      { s  1/9  y 1 z 3 x 4  } R8
      { s  1/9  y 1 z 3 x -4  } R8
      { s  1/9  y 1 z -3 x 4  } R8
      { s  1/9  y 1 z -3 x -4  } R8

       { s  1/9  y -1 z 3 x 4  } R8
       { s  1/9  y -1 z 3 x -4  } R8
      { s  1/9  y -1 z -3 x 4  } R8
      { s  1/9  y -1 z -3 x -4  } R8
/////
      { s  1/9  y 3 z 1 x 4  } R8
      { s  1/9  y 3 z 1 x -4  } R8
      { s  1/9  y 3 z -1 x 4  } R8
      { s  1/9  y 3 z -1 x -4  } R8
      
       { s  1/9  y -3 z 1 x 4  } R8
      { s  1/9  y -3 z 1 x -4  } R8
      { s  1/9  y -3 z -1 x 4  } R8
      { s  1/9  y -3 z -1 x -4  } R8
}

rule R10 md 1 > box{
      { s  1/9  y 1 z 3 x 2  } R10
      { s  1/9  y 1 z 3 x -2  } R10
      { s  1/9  y 1 z -3 x 2  } R10
      { s  1/9  y 1 z -3 x -2  } R10

       { s  1/9  y -1 z 3 x 2  } R10
       { s  1/9  y -1 z 3 x -2  } R10
      { s  1/9  y -1 z -3 x 2 } R10
      { s  1/9  y -1 z -3 x -2  } R10
/////
      { s  1/9  y 3 z 1 x 2  } R10
      { s  1/9  y 3 z 1 x -2  } R10
      { s  1/9  y 3 z -1 x 2  } R10
      { s  1/9  y 3 z -1 x -2  } R10
      
       { s  1/9  y -3 z 1 x 2  } R10
      { s  1/9  y -3 z 1 x -2  } R10
      { s  1/9  y -3 z -1 x 2  } R10
      { s  1/9  y -3 z -1 x -2  } R10
}