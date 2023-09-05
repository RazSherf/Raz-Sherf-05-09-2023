import { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Switch from '@mui/material/Switch';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeProvider, createTheme,styled } from '@mui/material/styles';




const Header = () => {
  const[mode,setMode] = useState(false)
  const theme = createTheme({
    palette:{
      mode: mode ? "light":"dark"
    }
    
  })
  return (
    <ThemeProvider theme={theme}>
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
        <Switch defaultChecked color="default"  onClick={()=>setMode(!mode)}/>

      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
