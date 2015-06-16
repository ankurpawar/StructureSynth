//fractaltree1
#define gap 0.5
set maxdepth 200
set background white
set colorpool list:white,#fda,#fd6,#acf,#cfa


//1 * { s 0.01 100 100 color #eee } box
2 * {x 1.2 z -1.2 ry 180} 4 * {z -0.6 y -0.6 x 0 rx 90 } fractal

rule fractal md 20 { 

{ x 0.5 y 0.5  z 0.05 rz 90 ry 90 s 0.9 } fractal
//{ x -0.41 y 0.4  rz -90 s 0.82 } fractal
//{ x 0 z 0  rx -90 s 0.475} fractal

//{ x 0  rx 90 s 0.475} fractal
//{ x 0  rx 0 s 0.475} fractal

{ color random } frame

}

rule frame {
{ s 0.1 0.1 1.1 x -5  z 0 } box
//{ s 0.1 0.1 1.1 x 5 z 0 } box
{ s 1.1 0.1 0.1 x 0  z 5 } box
//{ s 1.1 0.1 0.1 x 0  z -5 } box
}



