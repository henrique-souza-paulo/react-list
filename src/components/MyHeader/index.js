import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link } from "react-router-dom";

const menumobile = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/primeiralista',
    name: 'Lista 1'
  },
  {
    to: '/segundalista',
    name: 'Lista 2'
  },
  {
    to: '/terceiralista',
    name: 'Lista 3'
  },
  {
    to: '/quartalista',
    name: 'Lista 4'
  },
  {
    to: '/quintalista',
    name: 'Lista 5'
  }
];

const menuItens = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/primeiralista',
    name: 'Primeira Lista'
  },
  {
    to: '/segundalista',
    name: 'Segunda Lista'
  },
  {
    to: '/terceiralista',
    name: 'Terceira Lista'
  },
  {
    to: '/quartalista',
    name: 'Quarta Lista'
  },
  {
    to: '/quintalista',
    name: 'Quinta Lista'
  }
];

const settings = [
  {
    to: 'https://www.instagram.com/henri_santosz021/',
    name: 'Profile'
  },
  {
    to: '/primeiralista',
    name: 'Account'
  },
  {
    to: '/segundalista',
    name: 'Dashboard'
  },
  {
    to: '/terceiralista',
    name: 'Logout'
  }
];

function MyHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: "#4F4F4F"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

                {menumobile.map((option, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Link to={option.to} style={{ textDecoration: 'none' }}>
                      <Typography textAlign="center" color="black">{option.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItens.map((option, index) => (
              <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to={option.to} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center" color="white">{option.name}</Typography>
                </Link>
              </Button>
            ))}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>H</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Link to={setting.to} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </Link>
                </MenuItem>
              ))}

            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyHeader;