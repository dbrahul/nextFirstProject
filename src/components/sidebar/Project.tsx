"use client"

import { Analytics, ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'

const ProjectCollapse = () => {
    const [open, setOpen] = useState(true)
  return (
    <List>
    <ListItemButton
      onClick={()=> setOpen(!open)}
    >
      <ListItemIcon>
      <Image src="./Project.svg" alt="Project Icon" width={24} height={24} />

      {/* {project} */}
      </ListItemIcon>
      <ListItemText primary="Project" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
          <Image src="./AddProject.svg" alt="Add Projects" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Add Projects" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
          <Image src="./Project.svg" alt="Project Icon" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Project Table" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
          <Image src="./Delete.svg" alt="Project Icon" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Deleted" />
        </ListItemButton>

      </List>
    </Collapse>
  </List>
  )
}

export default ProjectCollapse