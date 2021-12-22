import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  margin: '0 auto'
});

export class FormUserDetails extends Component {
  render() {
    const { values, handleChange } = this.props;

    console.log(this.props.values)
    return (
      <ThemeProvider theme={createTheme()}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <StyledTypography variant="h6" color="inherit" component="div">
                Enter User Details
              </StyledTypography>
            </Toolbar>
          </AppBar>
        </Box>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="standard"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="standard"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="standard"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <br />
        <Button
          variant="contained"
          onClick={this.props.nextStep}
        >
          Continue
        </Button>
      </ThemeProvider>
    )
  }
}

export default FormUserDetails
