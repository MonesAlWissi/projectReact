import './about.css'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
const itemData = [
    {
      img: 'Screenshot_144.png',
      title: 'Bed',
    },
    {
      img: 'Screenshot_111.png',
      title: 'Kitchen',
    },
    {
      img: 'Screenshot_133.png',
      title: 'Sink',
    },
    {
      img: 'Screenshot_122.png',
      title: 'Books',
    },
    {
      img: 'https://liveloveqatar.com/wp-content/uploads/2024/07/13-scaled.webp',
      title: 'Chairs',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Doors',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2X1ACKjiTJmEld756mDxTDB_OjItZKytXEQ&s',
      title: 'Coffee',
    },
    {
      img: 'https://wallpapers.com/images/hd/food-4k-opb2kr9in782lc78.jpg',
      title: 'Storage',
    },
    {
      img: 'Screenshot_155.png',
      title: 'Coffee table',
    },
    {
        img: 'https://cdn.arabsstock.com/uploads/images/57114/image-57114-close-up-healthy-useful-food-dish-healthy-dish-meat-vegeta-thumbnail.webp',
        title: 'Coffee table',
      },
 
  ];

export default function About (){
    return(
        <>
        <div className='sboutGrid'>
        <div className='aboutP'>
        <p className='aboutP1'>_________</p>
        <p className='aboutP2'>ABOUT US</p>
        <p className='aboutP1'>_________</p>
        <h1>Quality and Tradition</h1>
        <p className='aboutpColar'>Lorem lpsum is that it has a more-or-less normal distribution of</p>
        <p className='aboutpColar'>letters, as opposed to using  Content here, content gfshere</p>
        <p className='aboutpColar'>making look like readable English. Many desktop publishing</p>
        <p className='aboutpColar'>Packages</p>
        <button className='aboutButton'>See More</button>
        </div>
        <div>
            <img src="Screenshot_20.png"/>
        </div>
        </div>
        <div className='imgAbout'>
            <img src='Screenshot_21.png'/>
        </div>
        <div id='homeEnd'>
      <div>
      <img src="Screenshot_12.png"></img>
        
      </div>
      <div id='HomeH'>
       <h1>The Story</h1>
       <p>Lorem lpsum is that it has a more-or-less normal distribution of letters,as
         opposed to using Content here, content gfshere',
         makinlook like readable English.Many desktop publishing packages.</p>
         <div id='Home3'>
          <div>
       <h1>1966</h1>
       <p>Lorem lpsum is that it has a 
        <br/>more-or-less normal <br/>distributio</p>
        </div>
        <div id='HomeH2'>
       <h1>2021</h1>
       <p>Lorem lpsum is that it has<br/> a more-or-less normal<br/> Content content</p>

       </div>
      </div>
     </div>
     </div>
       <p className='aboutP11' >_______</p>
       <p className='aboutP22'>T E A M</p>
       <p className='aboutP11'>_______</p>
       <h1 className='aboutP222'>Meet Our Professional Chefs</h1>
       <div className='aboutTeam'>
        <div>
            <img src='Screenshot_22.png'/>
            <h3 className='teamh3' >Avroko</h3>
            <p className='teamhp'>Master Chef</p>
        </div>
        <div>
            <img src='Screenshot_23.png'/>
            <h3 className='teamh3'>Evan Mattew</h3>
            <p  className='teamhp'>Master Chef</p>
        </div>
        <div>
            <img src='Screenshot_24.png'/>
            <h3 className='teamh3'>Diane Clarkson</h3>
            <p  className='teamhp'>Master Chef</p>
        </div>
        <div>
            <img src='Screenshot_25.png'/>
            <h3 className='teamh3'>Dan Rafalin</h3>
            <p className='teamhp'>Assistant Chef</p>
        </div>
        
       </div>
       <p className='aboutP11'>___________</p>
       <p className='aboutP22'>G A L A R Y</p>
       <p className='aboutP11'>___________</p>
       <h1 className='aboutP222'>What We Make</h1>
       <div className='listImg'>
       <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
 

       </div>
       <div className='endAbout'>
         <div className='aboutform'>
            <p className='endTablep' >__________________</p>
            <p className='endTablepp' >R E S E R V A T I O N</p>
            <p className='endTablep' >__________________</p>
            <h1 className='endTableh'>Book your table now</h1>
           <input className='inputAbout' type='text' placeholder='Name'/>
           <input className='inputAbout'  type='text' placeholder='Email'/>
            <div>
                <input className='inputAbout1' type='number' placeholder='Person'/>
                <input className='inputAbout1' type='time' placeholder='Timing'/>
                <input className='inputAbout1' type='date' placeholder='Date'/>
            </div>
            <button className='buttonAbout' >Book a Table</button>

         </div>
       </div>
        </>
        
    )
}