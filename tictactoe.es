// Tic Tac Toe seed 112

1 * {z -0.1 s 20 20 0.1 color #eee } box

tictactoe

rule tictactoe md 2 > mark {
{ z -0.03  s 0.3 } tictactoe

{ x 2 y 2  z -0.03 s 0.3 } tictactoe
{ x -2 y -2 z -0.03 s 0.3 } mark

{ x 2 y -2 z -0.03 s 0.3 } tictactoe
{ x -2 y 2 z -0.03 s 0.3 } mark

{ x -2 y 0 z -0.03 s 0.3 } tictactoe
{ x 2 y 0 z -0.03 s 0.3 } tictactoe

{ x 0 y 2 z -0.03 s 0.3 } mark
{ x 0 y -2 z -0.03 s 0.3 } tictactoe 

lines
}

rule tictactoe md 1 > mark {
{ z -0.03  s 0.3 }tictactoe

{ x 2 y 2  z -0.03 s 0.3 } tictactoe
{ x -2 y -2 z -0.03 s 0.3 } mark

{ x 2 y -2 z -0.03 s 0.3 } tictactoe
{ x -2 y 2 z -0.03 s 0.3 } mark

{ x -2 y 0 z -0.03 s 0.3 } tictactoe
{ x 2 y 0 z -0.03 s 0.3 } tictactoe

{ x 0 y 2 z -0.03 s 0.3 } mark
{ x 0 y -2 z -0.03 s 0.3 } tictactoe 

lines
}

rule lines{
1 * { y  -3 s 6 0.1 0.1} 2 * { y 20 color #aa4 } box
1 * { x -3 s 0.1 6 0.1} 2 * { x 20 color #aa4 } box
}

rule mark{}
rule mark{}

rule mark{
 { rz 45 s 3 } xx
}

rule mark{
 { x 2 s 0.3 } oo
}

rule xx{
{ y  -0 s 1.5 0.1 0.1 color #48e } box
{ x -0 s 0.1 1.5 0.1  color #48e } box
}

rule oo md 50 {
{ x 0.06 y 0.85 rz 7.5  } oo
{ s 0.75 1 0.75 } box
}
