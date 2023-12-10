import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import NextLink from 'next/link';

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
          <NextLink href="#intro" passHref>
            <Button sx={{ color: 'white', fontSize: '1rem', marginLeft: '20px' }}>EVENTS</Button>
          </NextLink>
          <NextLink href="#intro" passHref>
            <Button sx={{ color: 'white', fontSize: '1rem', marginLeft: '20px' }}>BLOG</Button>
          </NextLink>
          <NextLink href="#intro" passHref>
            <Button sx={{ color: 'white', fontSize: '1rem', marginLeft: '20px' }}>CONTACT US</Button>
          </NextLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
