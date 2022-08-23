import {AppBar, Box, Toolbar, Typography} from '@mui/material'

const Header = () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" color="inherit" component="div">
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
)

export default Header