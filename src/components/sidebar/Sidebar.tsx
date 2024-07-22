import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

interface SidebarProps {
    open: boolean;
    toggleSidebar: () => void;
    
}

const Sidebar = ({ open, toggleSidebar }:SidebarProps) => {
  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

//   const navigateTo = (path: string) => {
//     router.push(path);
//     toggleSidebar();
//   };

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <List>
        <ListItem >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem  onClick={handleSettingsClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem >
              <ListItemText inset primary="Profile" />
            </ListItem>
            <ListItem >
              <ListItemText inset primary="Account" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
