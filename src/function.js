import React from 'react';
function Square(){
    var a=9;
    return (a*a);
}
function Circle(){
    var r=2;
    return (2*3.14*r*r);
}
function Triangle(){
    var b=7;
    var h=8;
    return (0.5*b*h);
}
function Parallelogram(){
    var b=4;
        var h=2;
        return(b*h);
}
function Cube(){
    var r=25;
        return (6*r*r);
}
export {Circle,Triangle,Square,Parallelogram,Cube};