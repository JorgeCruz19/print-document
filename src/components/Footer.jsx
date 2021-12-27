import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Typography } from "@mui/material"

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{textAlign: 'center', display: 'block', width:'100%'}}>
            © 2021 IT Broadcast
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
