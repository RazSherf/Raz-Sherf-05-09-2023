import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Spinomenal Whether App
        </Typography>
        <Link href="#" color="inherit" underline="none" style={{ marginRight: 16 }}>
          <HomeRoundedIcon/>
        </Link>
        <Link href="#" color="inherit" underline="none">
         <StarRoundedIcon/>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
