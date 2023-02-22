import React from 'react';
class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            a:10,
            b:2,
            c:3,
            d:12,
        };
    }
    changeA = ()=>{
        this.setState({a:1});
    }
    changeB = ()=>{
        this.setState({b:8});
    }
    changeC = ()=>{
        this.setState({c:100});
    }
    changeD = ()=>{
        this.setState({d:120});
    }
    render(){
    return(
    <>
    <button onClick={this.changeA}>Change A</button>
    <button onClick={this.changeB}>Change B</button>
    <button onClick={this.changeC}>Change C</button>
    <button onClick={this.changeD}>Change D</button>
    <h1>The Ans is {this.state.a*this.state.b*this.state.c*this.state.d}</h1>
    <button><h1> A={this.state.a} b={this.state.b} c={this.state.c} d={this.state.d}</h1></button>

    </>
    );
}
}

export default App;
