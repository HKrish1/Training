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
    <div>
              {
                  this.state.show? <div><h1>A={this.state.a} B={this.state.b} C={this.state.c} D={this.state.d}</h1></div> : null
              }
              <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>
    </div>
    <h1>The Ans is {this.state.a*this.state.b*this.state.c*this.state.d}</h1>
    </>
    );
}
}

export default App;