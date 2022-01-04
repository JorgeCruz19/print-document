import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Button component={NavLink} to="/">
              <img width={60} src={Logo} alt="Logo" />
            </Button>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button component={NavLink} to="/entrega" onClick={handleCloseNavMenu} sx={{ display: 'block', textAlign: 'center', color: 'black' }}>
                Entrega
              </Button>
              <Button component={NavLink} to="/prestamo" onClick={handleCloseNavMenu} sx={{ display: 'block', textAlign: 'center', color: 'black' }}>
                Prestamo
              </Button>
            </Menu>
          </Box>
          {/* Desktop */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img width={60} src={Logo} alt="Logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            <Button component={NavLink} 
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FFFFFF" : "",
                  color: isActive ? "#1976d2" : ""
                };
              }} 
              to="/entrega" sx={{ color: "white" }}>
              Entrega
            </Button>
            <Button component={NavLink} 
            style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#FFFFFF" : "",
                  color: isActive ? "#1976d2" : ""
                };
              }} 
              to="/prestamo" sx={{ color: "white" }}>
              Prestamo
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
