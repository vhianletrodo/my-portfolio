import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material @emotion/react @emotion/styled';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Vivian Letrodo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;