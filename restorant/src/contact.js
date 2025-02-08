import './contact.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function Contact (){
    return(
        <>
        <p className='pContact' >____________</p>
       <p className='pContact1'>CONTACT US</p>
       <p className='pContact'>____________</p>
       <h4 className='pContact2'>  Send Valuable Feedback To US </h4>
       <div id='contactItem'>
       <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        helperText=" Please enter your Email"
        id="demo-helper-text-aligned-no-helper"
        label="Email"
      />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <TextField
        helperText="Please enter your Subject"
        id="demo-helper-text-aligned"
        label="Subject"
      />
      <TextField
        helperText="Please enter your Phone "
        id="demo-helper-text-aligned-no-helper"
        label="Phone"
      />
    </Box>
    <Box sx={{ width: 470, maxWidth: '100%' }}>
      <TextField fullWidth label="Message" id="fullWidth" />
    </Box>
    <br></br>
    <Button className='buttonContact' variant="contained"  >
      Send
    </Button>
    </div>
        </>
    )
}