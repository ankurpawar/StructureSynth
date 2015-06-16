//fractaltree1
#define gap 0.5
set maxdepth 200
set background black
set colorpool list:white,#ff0,#0ff,#f0f


//1 * { s 0.01 100 100 color #eee } box
 fractal

rule fractal md 4 { 

{ x 0 z -0.5  rz 90 s 0.475 } fractal
{ x 0 z 0.5  rz 90 s 0.475} fractal

{ x 0.5  rx 90 s 0.475} fractal
{ x -0.5  rx 90 s 0.475} fractal

{ color random } frame

}

rule frame {
{ s 0.1 0.1 1.1 x -5  z 0 } box
{ s 0.1 0.1 1.1 x 5 z 0 } box
{ s 1.1 0.1 0.1 x 0  z 5 } box
{ s 1.1 0.1 0.1 x 0  z -5 } box
}




