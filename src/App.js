import logo from './logo.svg';
//import './App.css';
import background from 'C:/Users/harik/OneDrive/Desktop/react_folder/reactfirst/src/background.jpg';
import {Circle,Triangle,Square,Parallelogram,Cube} from './function.js';
import {Circle1,Triangle1,Square1,Parallelogram1,Cube1} from './class.js';

function App() {
  return (
    <center>
    <div className="area">
      <div class="inner_area">
      <h1>FUNCTION</h1>
       <h1>Area of Circle</h1> 
      <h3><Circle /></h3>
      <h1>Area of Triangle</h1>
<h3><Triangle /></h3>
<h1>Area of Square</h1>
<h3><Square /></h3>
<h1>Area of Parallelogram</h1>
 <h3><Parallelogram /></h3>
 <h1>Area of Cube</h1>
 <h3><Cube /></h3>
 </div>
 <div class="cls">
  <h1> CLASS</h1>
<h1>Area of Circle</h1>
<h3><Circle1 /></h3>
      <h1>Area of Triangle</h1>
<h3><Triangle1 /></h3>
<h1>Area of Square</h1>
<h3><Square1 /></h3>
<h1>Area of Parallelogram</h1>
 <h3><Parallelogram1 /></h3>
 <h1>Area of Cube</h1>
 <h3><Cube1 /></h3></div>
 </div><br></br><h1>Ferrari Superior</h1></center>
  );
}

export default App;
