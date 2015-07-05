// Write EisenScript code here...
// Write EisenScript code here...
set maxdepth 100
#define offset 9.55
#define gap 4.775
#define shrink s 1
1 * { y 0} 5 * { z 9.75 } 5 * {x 9.75 s 1 color #ddd} R
1 * { y 10 z 9.75 x 9.75} 3 * {z 9.75 } 3 * {x 9.75 s 1 color #ddd} R
1 * { y 20 z 19.5 x 19.5} 1 * {z 9.75 } 1 * {x 9.75 s 1 color #ddd} R

rule R { pillar 
              R1
               {x offset}pillar
              {ry -90}R1
              {z offset}pillar
              {x offset  ry -90}R1
               {x offset z offset}pillar
              {z offset x offset ry 180}R1
              roof
           }

rule R1 md 60 { 
   { y 0.25  rz -3  shrink} R1 dbox
}

rule  pillar md 5 > star{
 { y -1}pillar box
}

rule star {
{y 0.5 s 1.5 0.5 1.5} box
 {y 0.5 ry 45 s 1.5 0.5 1.5} box
}

rule roof {
 {x gap z gap  y 5.05 s 10.5 0.05 10.5} box
}

rule dbox {
{ s 0.2 1 1} box
}