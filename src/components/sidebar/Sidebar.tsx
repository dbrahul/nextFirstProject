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

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

export default function Sidebar() { 
  const [open, setOpen] = React.useState(true);



  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: 'none'
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader >
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          LOGO
        </Typography>

      </DrawerHeader>

        <AnalyticsCollapse/>
        <Divider />
        <ProjectCollapse/>
        <Divider />
        <PropertyCollapse/>
        <Divider />
        <ProblemReportsCollapse/>
        <Divider />
        <SettingCollapse/>
    </Drawer>
  );
}
