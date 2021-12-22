import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  margin: '0 auto'
});

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;

    return (
      <ThemeProvider theme={createTheme()}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <StyledTypography variant="h6" color="inherit" component="div">
                Confirm User Data
              </StyledTypography>
            </Toolbar>
          </AppBar>
        </Box>
        <List sx={{ width: '100%', maxWidth:360 }}>
          <ListItem><ListItemText>Fist Name: {firstName}</ListItemText></ListItem>
          <ListItem>Last Name: {lastName}</ListItem>
          <ListItem>Email: {email}</ListItem>
          <ListItem>Occupation: {occupation}</ListItem>
          <ListItem>City: {city}</ListItem>
          <ListItem>Bio: {bio}</ListItem>
        </List>
        <br />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={this.continue}
          >
            Confirm & Continue
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

export default FormUserDetails
