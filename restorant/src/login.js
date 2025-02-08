import './login.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Login(){

    return(
        <>
        <div className='divLogin'>
        <div>
            <p className="pLogin">______</p>
                <p className='pLogin1'>LOGIN</p>
            <p className="pLogin">______</p>
            <p className='pLogin2'>Let's Start Your Dinner With Us</p>
            <div className='inputLogin'>
            <Box sx={{ width: 500, maxWidth: '100%' ,  }}>
      <TextField fullWidth label="Name" id="fullWidth" />
    </Box>
    <br></br>
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Email" id="fullWidth" />
    </Box>
    <br></br>
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Password" id="fullWidth" />
    </Box>
    <br></br>
    </div>

    <button className='buttonLogin'>LOGIN</button>
        </div>
        <p className='orLogin'>OR</p>
        <button className='buttonLogin12'>Login With Google Account</button>
        <p className='orLogin'>Don't have an account ? <span className='colorSpan' >SignUp</span></p>
        </div>
        </>
    )
}