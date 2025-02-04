import './home.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import SimpleBottomNavigation from './iconHome';

export default function Home (){



    return(
        <>
      <div id="home">
        <div id='home1'>
            <h1>Welcome to </h1>
            <h1 id='h1Color'>RestoNest</h1>
            <p>Simply dummy text of the printing and typesetting</p>
            <p>industry.Lorem lpsum has been the industry's</p>
            <p>standard dummy</p>
            <button id='butoonColor'>View Menu</button>
        </div>
        <div id='homeImg'>
            <img src="restourant.png"></img>
        </div>
      </div>
      
     < SimpleBottomNavigation/>
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
      </>
    )
}