import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FinalTable from './Table'
import NavBar from './NavBar';
import { setStore } from './Slice/globalSlice';
import { SideDrawer } from './SideDrawer';
import {Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

  const globalSlice = useSelector((state) => state.globalSlice.value)
  const selectedSlice = useSelector((state) => state.selectedSlice.value);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
        dispatch(setStore());
    }, [dispatch]);

  return (
    globalSlice
    ?
    (<Box sx={{ display: 'flex', width: "100%", height: '100vh', backgroundColor: "lightblue" }}>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          <SideDrawer /> 
         {selectedSlice ? <FinalTable /> : <Typography sx={{ mx:80,my:10, color: 'black' }} variant='h4'>Please Select Crypto from the Menu !</Typography>}
        </Box>
      </Box>)
      :
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  );
}