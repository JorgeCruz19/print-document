import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';

import Logo from '../assets/logo.png'
const style = {
    flexGrow: 1,
    marginLeft: 10
}
const NavBar = () => {
    return (
      <AppBar position="static">
          <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="Menu">
                <img width={60} src={Logo} alt="Logo" />
              </IconButton>
              <Typography variant="h6" style={style}>
                  IT Broadcast
              </Typography>
              
          </Toolbar>
      </AppBar>
    )
}

export default NavBar;