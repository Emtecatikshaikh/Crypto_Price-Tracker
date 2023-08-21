import React from 'react'
import logo from '../logo.jpeg'
import DropDown from './DropDown';
import AspectRatio from '@mui/joy/AspectRatio';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar} from '@mui/material';

const NavBar = () => {
  return (
    <>
    <CssBaseline />
        <AppBar sx={{ backgroundColor: "orange",zIndex: 1400 }}>
          <Toolbar>
              <AspectRatio ratio="1" sx={{ minWidth: 75,mx:10 }}>
              <img src={logo} alt='Logo!'/>
            </AspectRatio>
              {[0].map((index) => <DropDown key={index} marginLeftRight={{mx:10}} />)  }
          </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar