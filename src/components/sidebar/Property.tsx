"use client"

import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const PropertyCollapse = () => {
    const [open, setOpen] = useState(false)
  return (
    <List>


    <ListItemButton
      onClick={()=> setOpen(!open)}
    >
      <ListItemIcon>
      <Image src="./property.svg" alt="Project Icon" width={23} height={23} />
      </ListItemIcon>
      <ListItemText primary="Property" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
          <Image src="./property.svg" alt="Project Icon" width={23} height={23} />
          </ListItemIcon>
          <ListItemText primary="Property" />
        </ListItemButton>
      </List>
    </Collapse>
  </List>
  )
}

export default PropertyCollapse