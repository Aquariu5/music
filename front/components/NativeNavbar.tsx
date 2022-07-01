import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NativeDrawer from './NativeDrawer';
import { useState } from 'react';
export default function NativeNavbar() {
  const [state, setState] = useState(false);


  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={_ => setState(prev => !prev)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" style={{textAlign: 'center'}} component="div" sx={{ flexGrow: 1 }}>
            Музыкальная платформа
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <NativeDrawer open={state} setOpen={setState}/>
      </>

  );
}