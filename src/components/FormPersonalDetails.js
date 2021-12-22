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
import Stack from '@mui/material/Stack'

import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  margin: '0 auto'
});

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={createTheme()}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <StyledTypography variant="h6" color="inherit" component="div">
                Enter Personal Details
              </StyledTypography>
            </Toolbar>
          </AppBar>
        </Box>
        <TextField
          id="outlined-basic"
          label="Occupation"
          variant="standard"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="standard"
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="standard"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        />
        <br />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button
            variant="outlined"
            onClick={this.back}
          >
            Back
          </Button>
        </Stack>
      </ThemeProvider>
    )
  }
}

export default FormPersonalDetails
