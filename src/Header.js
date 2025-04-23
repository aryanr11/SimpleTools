import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        transition: '0.3s',
      }}
    >
      <Toolbar disableGutters>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography color="#000" variant="h6">
            <img src='/img/logo.png' alt='logo' style={{maxWidth: '100%',width: '60px', height: 'auto'}} />
          </Typography>

          <Button
            component="a"
            href="resume.pdf"
            target="_blank"
            variant="outlined"
            color=""
          >
            Resume
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
