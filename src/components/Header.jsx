import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Switch from '@mui/material/Switch';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h" component="div" sx={{ flexGrow: 1 ,fontFamily:'sans-serif' ,display:'flex',alignItems:'center',gap:1}}>
          <WbSunnyIcon/> Whether App
        </Typography>
        <Link href="/" color="inherit" underline="none" style={{ marginRight: 16 }}>
          <HomeRoundedIcon />
        </Link>
        <Link href="/fav" color="inherit" underline="none">
          <StarRoundedIcon />
        </Link>
        <Switch defaultChecked color="default" />

      </Toolbar>
    </AppBar>
  );
};

export default Header;
