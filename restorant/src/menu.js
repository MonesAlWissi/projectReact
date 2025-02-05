
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import './menu.css'
export default function Menu (){
    
  
  

    return(
        <>
      
  
        <p>____________</p>
        <p>MENU</p>
        <p>____________</p>
        <h1>Popular Dishes</h1>
        <input  type="search" placeholder="Search Here ⭐" >
        
        </input>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,border:"2px solid blue" }}
      >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Here"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton className='iconMenu'  type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>

        </>
    )
}