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
      </>
    )
}