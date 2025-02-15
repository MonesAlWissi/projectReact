
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { colors, IconButton } from '@mui/material';
import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import './menu.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function Menu (){
    
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
 


    return(
        <>
      
  
        <p className='munuColor1' >______</p>
       
        <p id='menu'>MENU</p>
        <p className='munuColor2'>______</p>
        <h1 className='menu2'>Popular Dishes</h1>
        
        
      
        <Paper id='search'
      component="form"
      sx={  { p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,border:"2px solid orange" }}
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
   

<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://btech.au.dk/fileadmin/_processed_/a/f/csm_likemeat-isjszWvbI_E-unsplash_c9d6f08159.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <span></span>  <p className='pCard'>13$</p>
        </Typography>
       
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
      
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/premium-photo/juicy-triple-decker-burger-with-extra-cheese_1283844-5580.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>
        </Typography>
       
        
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
      
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://collinsfoodthefreshway.com/wp-content/uploads/2024/02/Layer-16.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>        </Typography>
        
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
  
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>

</div>
<button className='menuButton' hr >See all dishes</button>
<img className='menuImg' src='Screenshot_16.png'></img>
<div>
   
<p className='munuColor1' >______</p>
       
       <p id='menu'>MENU</p>
       <p className='munuColor2'>______</p>
       <h1 className='menu2'>Popular Dishes</h1>
       <p className='pMune' >Lorem ipsum is that it has a more-or-less distribution of letters,as</p>
       <p className='pMune'>opposed to using Content here.content making</p>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://btech.au.dk/fileadmin/_processed_/a/f/csm_likemeat-isjszWvbI_E-unsplash_c9d6f08159.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>        </Typography>
        
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/premium-photo/juicy-triple-decker-burger-with-extra-cheese_1283844-5580.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>
        </Typography>
     
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://collinsfoodthefreshway.com/wp-content/uploads/2024/02/Layer-16.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>
        </Typography>
        
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>


</div>
<button className='menuButton' >See all dishes</button>
<img className='menuImg' src='Screenshot_17.png'></img>

       
       

       <div>
   
<p className='munuColor1' >______</p>
       
       <p id='menu'>MENU</p>
       <p className='munuColor2'>______</p>
       <h1 className='menu2'>Popular Dishes</h1>
       <p className='pMune' >Lorem ipsum is that it has a more-or-less distribution of letters,as</p>
       <p className='pMune'>opposed to using Content here.content making</p>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://btech.au.dk/fileadmin/_processed_/a/f/csm_likemeat-isjszWvbI_E-unsplash_c9d6f08159.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>
        </Typography>
       
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/premium-photo/juicy-triple-decker-burger-with-extra-cheese_1283844-5580.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>
        </Typography>
      
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://collinsfoodthefreshway.com/wp-content/uploads/2024/02/Layer-16.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lorem Epsum <p className='pCard'>13$</p>
        </Typography>
      
      </CardContent>
      <div className='CardDawn'>
      <p className='starMenu'>5.0 ⭐ ⭐ ⭐ ⭐ ⭐</p>
      <button className='buttonCard'  >Order Now</button>
      </div>
    </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>


</div>
<button className='menuButton' >See all dishes</button>
        </>
        
    )
}