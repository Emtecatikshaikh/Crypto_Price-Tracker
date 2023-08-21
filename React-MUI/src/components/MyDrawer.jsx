import { Drawer, Box, Typography, IconButton} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const MyDrawer = () => {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'>
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        PaperProps={{ style: { top: 64, height: "calc(100% - 64px)" }}}
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2}  width='250px' role='presentation' textAlign='center'>
          <Typography variant='h6' component='div'>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
