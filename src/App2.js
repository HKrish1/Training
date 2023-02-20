import React from 'react';
import car from 'C:/Users/harik/OneDrive/Desktop/react_folder/reactfirst/src/carry.png'; // gives image path
import car_logo from 'C:/Users/harik/OneDrive/Desktop/react_folder/reactfirst/src/ferrari_logo.png';


function App2(){
    return(
        <div>
             <center><img src={car} alt="this is car image" width={500} title={'Ferrari'}/><br></br>
             </center>
        </div>

    )
}

export default App2;