import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './iconHome.css'
import { colors } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div id='iconHome'>
    <Box sx={{ width: 1150 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="Locate Us" icon={<LocationOnIcon style={{color:"orange"}} />} />
        <BottomNavigationAction label="Open Hours" icon={<RestoreIcon style={{color:"orange"}} />} />
        <BottomNavigationAction label="Reservation" icon={<FavoriteIcon style={{color:"orange"}} />} />
        
      </BottomNavigation>
    </Box>
    </div>
  );
}