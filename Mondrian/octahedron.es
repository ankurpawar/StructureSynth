// Write EisenScript code here...

#define dis 0.55
#define diff 30
//set colorpool list:#ddee00,#ddd
set colorpool list:#F00,#0404A2,#FFFE33,#FFF
 set background #fff
//4 * {x 0.55 z -0.55 ry 90 }  a2 
//1 * {z -0.55 y 0.55 rx 90} 2 * {z 1.1 rx 180} a2
1 * {z -0.77 y 0.77 rx 90} 2 * {z 1.54 rx 180} a1
4 * {x 0.77 z -0.77 rz 0 ry 90 }  a1


rule a1{
{s 1 rz 45 }a2

} 

rule t1{
{s 1 rx 45 rz 45}tri

} 

rule a2 w 3 maxdepth 1 > d {
  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} a2
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
 {  s 0.5 0.5 1 x -dis y -dis  h diff} a2
}

rule a2 w 3 maxdepth 1 > d {
  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} a2
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
 {  s 0.5 0.5 1 x -dis y -dis  h diff} a2
}

rule a2 w 3 maxdepth 1 > d {
  {  s 0.5 0.5 1 x dis y dis  h diff} a2
  {  s 0.5 0.5 1 x -dis  y dis  h diff} a2
  {  s 0.5 0.5 1 x dis y -dis  h diff} a2
 {  s 0.5 0.5 1 x -dis y -dis  h diff} a2
}




rule d w 2 {
{s 0.9 0.9 0.01 color random}box
{s 1 1 0.25 color random}frame
}

rule d w 2 {
{s 0.9 0.9 0.01 color random}box
{s 1 1 0.25 color #222}frame
}

rule d w 2 {
{s 0.9 0.9 0.01 color random}box
{s 1 1 0.25 color #eee}frame
}


rule frame  {

{ s 1.1 0.1 0.1 y 5  x 0 } box
{ s 0.1 1 0.1 y 0  x 5 } box
{ s 1.1 0.1 0.1 y -5  x 0 } box
{ s 0.1 1 0.1 y 0  x -5 } box
}

rule tri { 
	 triangle[-0.5,0.1,0;0.5,0.1,0;0,0.1,0.866] 
	 triangle[-0.5,-0.1,0;0.5,-0.1,0;0,-0.1,0.866] 
} 

