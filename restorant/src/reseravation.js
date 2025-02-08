import  './reseravation.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Reserav(){
    return(
        <>
        <p className="pReserv">_____________</p>
        <p className='pReserv1' >RESERVATION</p>
        <p p className="pReserv">_____________</p>
        <h1 className='hReserv'>Book The Seat Now Here Easily</h1>
        <div id='reservGrid'>
            <div id='imgReserv' >
             <img id='imgReserv' src='Screenshot_18.png'></img>
            </div>
            <div id='dataReserv'>
                <p className="pReserv2"  >_____________</p>
                <p>RESERVATION</p>
                <p className="pReserv2">_____________</p>
                 <h1>Book The Seat Now Here Easily</h1>
                 <p className='colorReserv' >The people,food and the prime locations make Rodich the</p>
                 <p className='colorReserv'>Perfect place good friends & family to come together and</p>
                 <p className='colorReserv'>have great time</p>
                 <TextField
 
  id="demo-helper-text-aligned"
  label="Name"
  
/>
<TextField
  // helperText="Please enter your Email "
  id="demo-helper-text-aligned-no-helper"
  label="Email"
/>
<br></br>
<TextField

  // helperText="Please enter your Phone"
  id="demo-helper-text-aligned"
  label="Phone"
/>
<TextField

  // helperText=" Please enter your Date"
  id="demo-helper-text-aligned-no-helper"
  label="Date"
/>
<br></br>
<TextField

  // helperText="Please enter your Time"
  id="demo-helper-text-aligned"
  label="Time"
/>
<TextField

  // helperText=" Please enter your Person"
  id="demo-helper-text-aligned-no-helper"
  label="Person"

/>
<button id='buttonReserv' >Book a Table</button>             
              
                
            </div>
           
        </div  >
        <div id='imgR'>
        <p className="pReserv">________</p>
        <p className='pReserv1' >GALARY</p>
        <p p className="pReserv">________</p>
        <h1 className='hReserv'>What You Can Expect From US</h1>
        <img  src='Screenshot_19.png'/>
        </div>
        </>
    )
}