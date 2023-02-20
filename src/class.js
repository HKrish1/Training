import React from 'react';
class Square1 extends React.Component{
    render(){
        var a=9;
        return (a*a);
}
}
class Circle1 extends React.Component{
    render(){
    var r=2;
    return (2*3.14*r*r);
}
}
class Triangle1 extends React.Component{
    render(){
        var b=7;
        var h=8;
        return (0.5*b*h);
}
}
class Parallelogram1 extends React.Component{
    render(){
        var b=4;
        var h=2;
        return(b*h);
}
}
class Cube1 extends React.Component{
    render(){
        var r=25;
        return (6*r*r);
}
}
export {Circle1,Triangle1,Square1,Parallelogram1,Cube1};