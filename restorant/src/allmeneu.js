
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
import './allmeneu.css'

export default function Allmeneu (){
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
   <div className='allMenua'>
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
<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg?semt=ais_hybrid"
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
        image="https://res.cloudinary.com/enchanting/q_70,f_auto,w_765,h_433,c_fit/exodus-web/2021/12/iceland-food.jpg"
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
        image="https://hungerstation.pt/images/2020/11/10/port4.jpg"
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
<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://www.shutterstock.com/shutterstock/videos/1019476954/thumb/1.jpg?ip=x480"
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
        image="https://images.deliveryhero.io/image/talabat/MenuItems/21B146A190407F824CFE9A0CB1A027BA"
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
        image="https://images.crexi.com/assets/1662961/8a5a2cf095684f239a2d7b5ec1665f4f_716x444.jpg"
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
<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://m.media-amazon.com/images/I/81iuURETnSL.jpg"
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
        image="https://131261430.cdn6.editmysite.com/uploads/1/3/1/2/131261430/s302396296173071593_p234_i1_w1165.jpeg"
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
        image="https://static.wixstatic.com/media/32bf26_b35a5017c54d462f85274c46015e13fc~mv2.jpg/v1/crop/x_268,y_1032,w_3732,h_4968/fill/w_390,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/32bf26_b35a5017c54d462f85274c46015e13fc~mv2.jpg"
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
<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://p4.wallpaperbetter.com/wallpaper/364/794/528/colorful-food-sweets-dessert-wallpaper-preview.jpg"
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
        image="https://img.freepik.com/premium-photo/pizza-4k-wallpaper-hd-wallpaper_1262886-8471.jpg"
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
        image="https://www.explorerides.com/wp-content/uploads/2024/10/pasta-jpg.webp"
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
</div>
   
        </>
    )
}