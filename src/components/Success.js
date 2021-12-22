import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  margin: '0 auto'
});

export class Success extends Component {

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <StyledTypography variant="h6" color="inherit" component="div">
                Success
              </StyledTypography>
            </Toolbar>
          </AppBar>
        </Box>
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
      </ThemeProvider>
    )
  }
}

export default Success
