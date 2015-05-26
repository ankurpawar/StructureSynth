//tic tac toe seed 101

#define dis 0.7
#define off 2.75
tictactoe

//1 * {y -3 s 10 0.1 10}box

rule tictactoe md 2 > cross {
{ z -1.3  s 0.3}cross

{x 2 y 2  z -1.3 s 0.3}cross
{x -2 y -2 z -1.3 s 0.3}tictactoe

{x 2 y -2 z -1.3 s 0.3}cross
{x -2 y 2 z -1.3 s 0.3}cross


{x -2 y 0 z -1.3 s 0.3}tictactoe
{x 2 y 0 z -1.3 s 0.3}cross

{x 0 y 2 z -1.3 s 0.3}cross
{x 0 y -2 z -1.3 s 0.3}cross

//------------------------//
{ z off  s 0.3}cross

{x -2 y 0 z off s 0.3}cross
{x 2 y 0 z off s 0.3}tictactoe

{x 0 y 2 z off s 0.3}cross
{x 0 y -2 z off s 0.3}tictactoe

{x 2 y 2  z off s 0.3}cross
{x -2 y -2 z off s 0.3}cross

{x 2 y -2 z off s 0.3}cross
{x -2 y 2 z off s 0.3}tictactoe

//---------------------------//
{ z dis  s 0.3}tictactoe

{x -2 y 0 z dis s 0.3}cross
{x 2 y 0 z dis s 0.3}cross

{x 0 y 2 z dis s 0.3}tictactoe
{x 0 y -2 z dis s 0.3}cross

{x 2 y 2  z dis s 0.3}cross
{x -2 y -2 z dis s 0.3}tictactoe

{x 2 y -2 z dis s 0.3}cross
{x -2 y 2 z dis s 0.3}cross

lines
}

//==================//
rule tictactoe md 1 > cross {
{ z -1.3  s 0.3}tictactoe

{x 2 y 2  z -1.3 s 0.3}cross
{x -2 y -2 z -1.3 s 0.3}cross

{x 2 y -2 z -1.3 s 0.3}cross
{x -2 y 2 z -1.3 s 0.3}tictactoe


{x -2 y 0 z -1.3 s 0.3}cross
{x 2 y 0 z -1.3 s 0.3}cross

{x 0 y 2 z -1.3 s 0.3}tictactoe
{x 0 y -2 z -1.3 s 0.3}cross

//------------------------//
{ z off  s 0.3}cross

{x -2 y 0 z off s 0.3}cross
{x 2 y 0 z off s 0.3}cross

{x 0 y 2 z off s 0.3}tictactoe
{x 0 y -2 z off s 0.3}cross

{x 2 y 2  z off s 0.3}cross
{x -2 y -2 z off s 0.3}tictactoe

{x 2 y -2 z off s 0.3}cross
{x -2 y 2 z off s 0.3}cross

//---------------------------//
{ z dis  s 0.3}cross

{x -2 y 0 z dis s 0.3}cross
{x 2 y 0 z dis s 0.3}tictactoe

{x 0 y 2 z dis s 0.3}cross
{x 0 y -2 z dis s 0.3}cross

{x 2 y 2  z dis s 0.3}cross
{x -2 y -2 z dis s 0.3}cross

{x 2 y -2 z dis s 0.3}tictactoe
{x -2 y 2 z dis s 0.3}cross

lines
}

rule lines{
1 * {y  -3 s 6 0.1 0.1} 2 * { y 20 color #aaa} box
1 * {x -3 s 0.1 6 0.1} 2 * { x 20 color #aaa} box

1 * {y  -3 z 2 s 6 0.1 0.1} 2 * { y 20 color #aaa} box
1 * {x -3 z 2 s 0.1 6 0.1} 2 * { x 20 color #aaa} box

1 * {y  -3 x -1 z 1 s 0.1 0.1 6} 2 * { y 20 color #aaa} box
1 * {y  -3 x 1 z 1 s 0.1 0.1 6} 2 * { y 20 color #aaa} box

}

rule cross{}

rule cross{}

rule cross{
{ x 0 y -0 z 1 rz 45 rx 45  s 3}xx
}

rule cross{
{z 1 s 0.3}oo
}

//cross
rule xx{
1 * {s 1.5 0.1 0.1 color #00f} box
1 * {s 0.1 1.5 0.1  color #00f} box
1 * {s 0.1 0.1 1.5  color #00f} box
}

//sphere
rule oo md 1 {
{s 15 color #f00}sphere
}
