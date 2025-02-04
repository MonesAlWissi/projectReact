import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './nav';
import HOME from './home';
import RestaurantFooter from './footer';
import { Link } from 'react-router-dom';
import Menu from './menu';
function App() {
  return (
    
     <>
    
           <DrawerAppBar></DrawerAppBar>
           <HOME></HOME>
           <Menu></Menu>
            <RestaurantFooter></RestaurantFooter>  
     </>
     
    
  );
}

export default App;








