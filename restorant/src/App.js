import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import PrimarySearchAppBar from './nav';
import Menu from './menu';
import RestaurantFooter from './footer'
import DrawerAppBar from './nav';
import Home from './home';
// import React, { useRef } from 'react';


function App() {

  return (
    // <Router>
    <div className="App">
    <DrawerAppBar/>
    <Home/>
      {/* <Routes> */}
    {/* <Route path='/' element={<Home/>} /> */}
   
    
    {/* </Routes> */}
      
  
     
    <RestaurantFooter/>
    
    </div>
    // </Router>

  );
 
}

export default App;










// import logo from './logo.svg';
// import './App.css';
// import DrawerAppBar from './nav';
// import HOME from './home';
// import RestaurantFooter from './footer';
// import { Link } from 'react-router-dom';
// import Menu from './menu';
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import { styled } from '@mui/material';
// import React, { useRef } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import PrimarySearchAppBar from './nav';
// function App() {
//   return (
//     <Router>
//     <div className="App">
//      <PrimarySearchAppBar></PrimarySearchAppBar>
//      {/* <Table></Table> */}
//       <Routes>
//       {/* <Route path='/' element={<Home/>}/> */}
//       <Route path='/Menu' element={<Menu/>}/>
//       {/* <Route path='/table' element={<TableNew/>}/>
//       <Route path='/tableTask' element={<TableTask/>}/>
//       <Route path='/tableTask2' element={<TableTask2/>}/>
//       <Route path='/Card' element={<Card/>}/>
//       <Route path='/Timer' element={<Timer/>}/> */}
//       </Routes>
//     {/* <DataTable></DataTable>
//     <TableTest></TableTest>
//     <DataTablee></DataTablee>
//     <TableNew></TableNew>
//     <DataTableee></DataTableee> */}
//     <RestaurantFooter></RestaurantFooter>  
//     </div>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   return (


//     <div className='App'>
//     <PrimarySearchAppBar></PrimarySearchAppBar>
//            {/* <DrawerAppBar></DrawerAppBar> */}
  
//            <HOME></HOME>
//            <Menu></Menu>
           
     
//             <RestaurantFooter></RestaurantFooter>  
//             </div>
     
          
//   );
// }

// export default App;


