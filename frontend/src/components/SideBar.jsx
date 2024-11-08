import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

const SideBar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
    <Toolbar />
    <List>
      {['Dashboard', 'Users', 'Settings'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index === 0 ? <DashboardIcon /> : index === 1 ? <PeopleIcon /> : <SettingsIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}

export default SideBar