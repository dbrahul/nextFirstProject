"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import AnalyticsCollapse from './Analytics';
import ProjectCollapse from './Project';
import SettingCollapse from './Settings';
import PropertyCollapse from './Property';
import ProblemReportsCollapse from './ProblemReports';

const drawerWidth = 240; // Width of the sidebar drawer

// DrawerHeader styled component to align items and ensure content is below the app bar
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

export default function Sidebar() {
  const [open, setOpen] = React.useState(true); // State to control drawer open/close

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: 'none',
        },
      }}
      variant="persistent" // Persistent drawer type
      anchor="left" // Drawer anchored to the left
      open={open} // Control the open state
    >
      <DrawerHeader>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          LOGO
        </Typography>
      </DrawerHeader>
      <AnalyticsCollapse />
      <Divider />
      <ProjectCollapse />
      <Divider />
      <PropertyCollapse />
      <Divider />
      <ProblemReportsCollapse />
      <Divider />
      <SettingCollapse />
    </Drawer>
  );
}
