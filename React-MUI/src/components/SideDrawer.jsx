import { Drawer, IconButton, Divider, List, ListItem,ListItemText,Box} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {styled} from '@mui/material/styles';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Toolbar from '@mui/material/Toolbar';
import { useSelector } from 'react-redux';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export const SideDrawer = () => {
  
  const cryptos = useSelector((state) => state.globalSlice.value)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  return (
    <>
    <DrawerHeader />
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        variant="persistent">
          <Toolbar />
        <DrawerHeader>
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ overflow: 'auto',width: '200px' }}>
          <List sx={{mx:5}}>
              {cryptos
                  ? cryptos.map((crypto) => {
                    return (
                      <ListItem key={crypto.id} disableGutters>
                          <ListItemText primary={`${crypto.name}`}/>
                      </ListItem>
                    )
                  })
              : null}
            </List>
        </Box>
      </Drawer>
    </>
  )
}
