import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList() {
     const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width:'default', maxWidth:198 , bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"><div className='border rounded border-solid border-black-500 w-full'></div>
          Notification
        </ListSubheader>
      }
    > 
    <div className='border rounded border-solid border-black-500 w-full'></div>
     <ListItemButton>
      <span style={{ color: 'black' ,  fontWeight: 'bold'}}>
        <ListItemText primary="Java test has started!" /></span>
      </ListItemButton><div className='border rounded border-solid border-black-500 w-full'></div>
        <ListItemButton>
       <span style={{ color: 'black' }}>
      <ListItemText primary="Java test has started!" /></span> 
      </ListItemButton><div className='border rounded border-solid border-black-500 w-full'></div>
      <ListItemButton>
       <span style={{ color: 'black' }}>
        <ListItemText primary="Java test has started!" /></span>
      </ListItemButton><div className='border rounded border-solid border-black-500 w-full'></div>
        <ListItemButton onClick={handleClick}><span style={{ color: 'black' }}>
        <ListItemText primary="View more" /></span>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton><div className='border rounded border-solid border-black-500 w-full'></div>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          <span style={{ color: 'black' }}>
            <ListItemText primary="Java test has started" /></span>
          </ListItemButton><div className='border rounded border-solid border-black-500 w-full'></div>
        </List>
      </Collapse>
    </List>
    );
   
}