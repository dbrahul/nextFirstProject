"use client"

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const ProjectCollapse = () => {
  const [open, setOpen] = useState(true); // State to control collapse open/close
  const pathname = usePathname()
  return (
    <List>
      {/* ListItemButton to toggle collapse */}
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          {/* Using next/image for optimized image rendering */}
          <Image src="/Project.svg" alt="Project Icon" width={24} height={24} />
        </ListItemIcon>
        <ListItemText primary="Project" />
        {/* Conditional rendering of expand/collapse icons */}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* Collapsible list items */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Add Projects button */}

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Image src="/AddProject.svg" alt="Add Projects Icon" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="Add Projects" />
          </ListItemButton>

          {/* Project Table button */}
          <Link href={"/project"} className={`override-defaultLink`}>
            <ListItemButton sx={{ pl: 4 }} className={`navLik ${pathname === "/project" ? "active" : ""}`}>
              <ListItemIcon>
                <Image src="/Project.svg" alt="Project Table Icon" width={24} height={24} />
              </ListItemIcon>
              <ListItemText primary="Project Table" />
            </ListItemButton>
          </Link>

          {/* Deleted Projects button */}
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <Image src="/Delete.svg" alt="Deleted Projects Icon" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="Deleted" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default ProjectCollapse;
