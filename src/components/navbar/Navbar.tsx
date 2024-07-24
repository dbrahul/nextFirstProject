"use client"

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Settings, LogoutSharp, CropFreeSharp } from '@mui/icons-material';
import Image from 'next/image';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import { Avatar } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  border: '1px solid black',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',

  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge sx={{
            backgroundColor: "#DAE7F9",
            borderRadius: "10px",
            padding: "10px"
          }}>
            <Image src="./network.svg" alt="Project Icon" width={20} height={20} />
          </Badge>
        </IconButton>
        <p>Network</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" aria-label="show 4 new mails" color="inherit">
          <Badge sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            padding: "10px",
            color: "#6290CB"
          }}>
            EN
          </Badge>
        </IconButton>
        <p>Language</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={9} color="info"
            sx={{
              backgroundColor: "#DAE7F9",
              borderRadius: "10px",
              padding: "10px",
              color: "#6290CB"
            }}
          >
            <NotificationsNoneSharpIcon />
          </Badge>
        </IconButton>
        <p>Notification</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge color="error" sx={{
            backgroundColor: "#DAE7F9",
            borderRadius: "10px",
            padding: "9px",
            color: "#6290CB"
          }}>
            <LogoutSharp />
          </Badge>
        </IconButton>
        <p>logout</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge sx={{
            backgroundColor: "#DAE7F9",
            borderRadius: "10px",
            padding: "10px",
            color: "#6290CB"
          }}>

            <AccountCircle />
          </Badge>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <>
      <AppBar position="static" color="inherit">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 1,
              
              backgroundColor: "#DAE7F9",
              borderRadius: "10px"
            }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge sx={{
                backgroundColor: "#DAE7F9",
                borderRadius: "10px",
                padding: "10px"
              }}>
                <Image src="./network.svg" alt="Project Icon" width={20} height={20} />
              </Badge>
            </IconButton>
            {/* icons for language  */}
            <IconButton size="small" aria-label="show 4 new mails" color="inherit">
              <Badge sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                padding: "9px",
                color: "#6290CB"
              }}>
                EN
              </Badge>
            </IconButton>
            {/* icons for notifications */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              >
              <Badge badgeContent={9} color="info"
                sx={{
                  backgroundColor: "#DAE7F9",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "#6290CB"
                }}
              >
                <NotificationsNoneSharpIcon />
              </Badge>
            </IconButton>

            {/* icon for logout  */}
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge color="error" sx={{
                backgroundColor: "#DAE7F9",
                borderRadius: "10px",
                padding: "9px",
                color: "#6290CB"
              }}>
                <LogoutSharp />
              </Badge>
            </IconButton>
            {/* icon for Zoom  */}
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge color="error" sx={{
                backgroundColor: "#DAE7F9",
                borderRadius: "10px",
                padding: "9px",
                color: "#6290CB"
                
              }}>
                <CropFreeSharp />
              </Badge>
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '50px', padding: '3px 13px 3px 7px', margin: "9px 0px" }}>
              <Avatar sx={{ bgcolor: '#d0e2ff', color: '#1976d2' }}>S</Avatar>

              <IconButton edge="end" color="inherit">
                <Badge sx={{
                  
                  color: "#6290CB"
                  
                }}>


                  <Settings />
                </Badge>
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      </>
    // </Box>
  );
}
