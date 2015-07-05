// Write EisenScript code here...
set maxdepth 560
20 * { y -1} box

30 *  { x 0 } R1
30 * { ry 180 } R1 

rule R1 w 100 md 100 > R2{
box
{ y 0.9 ry  3 rz 5 rx 0.05  s 0.985 }R1 

}

rule R1 w 1 maxdepth 20{
{ ry 180  }R1
}

rule R2{
{ s 2 h 70} sphere
 {y -1 s 3 0.2 2 h 120}R3
}

rule R3 md 35{
box
{rx 5 ry 15 } R3
}