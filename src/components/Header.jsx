import { useState } from 'react'
import { AppBar, Toolbar, Typography, Link,} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';


const Header = () => {
  const [mode, setMode] = useState(false)
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark"
    }

  })
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h" component="div" sx={{ flexGrow: 1, fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', gap: 1, }}>
            <WbSunnyIcon /> Weather App
          </Typography>
          <Link href="/" color="inherit" underline="none" style={{ marginRight: 16 }}>
            <HomeRoundedIcon />
          </Link>
          <Link href="/fav" color="inherit" underline="none" style={{ marginRight: 16 }}>
            <StarRoundedIcon />
          </Link>
          <Link >
            <AutoAwesomeOutlinedIcon sx={{ color: 'white' }} onClick={() => setMode(!mode)} />
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
