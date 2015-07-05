set background #eee
//1 * {y -0.25 s 50 0.1 50 color #eee}box

spiral
rule spiral md 7{
{x -0.03334 z 0.06 y -0.25 s 0.5 0.5 0.5  ry 60 } spiral
sq
}


rule sq {
   1 * {x 0 z 0 color #e49} tri
   1 * {x 1 z 0 color #49e} tri
  1 * {x 0.5 z 0.866 color #9e4} tri
}

rule square{
box

}
rule tri { 
	 triangle[-0.5,0.1,0;0.5,0.1,0;0,0.1,0.866] 
	 triangle[-0.5,-0.1,0;0.5,-0.1,0;0,-0.1,0.866] 
} 
