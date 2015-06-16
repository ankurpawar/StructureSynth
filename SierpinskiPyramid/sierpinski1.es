//sierpinski
#define size 1
{ s 1 } sierpinski // scales our starting size

sierpinski
3 * { rz 90} sierpinski

rule sierpinski maxdepth 5 > spongeunit {
{ s 0.5 } sierpinski
{ s 0.5 x size } sierpinski
{ s 0.5 y size } sierpinski
{ s 0.5 z size } sierpinski
}

rule spongeunit { { s 1} box}