import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ fontSize: '1.8rem', border: '1px solid rgb(255, 219, 88)', padding: '5px 10px' }}>
          URC
        </Typography>
        <div>
          <Button color="inherit" sx={{ fontSize: '1rem' }}>
            Events
          </Button>
          <Button color="inherit" sx={{ marginLeft: 2, fontSize: '1rem' }}>
            Blog
          </Button>
          <Button color="inherit" sx={{ marginLeft: 2, fontSize: '1rem' }}>
            Contact Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
