import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/router';
export default function NativeDrawer({open, setOpen}) {
  
  // const [state, setState] = useState(false);
  const router = useRouter();
  console.log('router', router);
  const menuItems = [
      {text: 'Главная', path: '/'},
      {text: 'Список треков', path: '/tracks'},
      {text: 'Список альбомов', path: '/albums'}
  ]
  const toggleDrawer =
    (openPar: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(openPar);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={menuItem.text} disablePadding>
            <ListItemButton onClick={(e: any) => router.push(menuItem.path)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={'left'}>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}