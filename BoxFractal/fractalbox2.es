//Fractal Box 2
set colorpool list:white,white,blue,#ee0000,#00ee00
set background #fff
set maxObjects 100000
set recursion 8
#define size 0.5
#define offset 0.5
#define deep 3

R1

rule R1{
{ z offset s size } front 
{ y offset s size } up
{ x offset s size} right

{ z -offset s size } back
{ y -offset s size } down
{ x -offset s size } left

{ color random } box
}

rule up md deep{
{z offset s size } up
{y offset s size } up
{x offset s size} up

{z -offset s size } up
//{y -offset s size } up
{x -offset s size } up 

{color random}box
}

rule down md deep{
{z offset s size } down
//{y offset s size } down
{x offset s size} down

{z -offset s size } down
{y -offset s size } down
{x -offset s size } down

{color random}box
}

rule right md deep{
{z offset s size } right
{y offset s size } right
{x offset s size} right

{z -offset s size } right
{y -offset s size } right
//{x -offset s size } right

{color random}box
}

rule left md deep{
{z offset s size }left
{y offset s size } left
//{x offset s size} left

{z -offset s size } left
{y -offset s size } left
{x -offset s size } left

{color random}box
}

rule front md deep{
{z offset s size }front
{y offset s size } front
{x offset s size} front

//{z -offset s size } front
{y -offset s size } front
{x -offset s size } front

{color random}box
}

rule back md deep{
//{z offset s size }back
{y offset s size } back
{x offset s size} back

{z -offset s size } back
{y -offset s size } back
{x -offset s size } back

{color random}box
}