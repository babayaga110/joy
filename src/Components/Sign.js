import React from 'react';
import Grid from '@mui/joy/Grid';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button'


import { Typography } from '@mui/joy';

export default function Sign() {
  return (
<Grid
position={'fixed'}
paddingLeft={80}

>
   
    <Grid
    container
    spacing={5}
    marginTop={18}
  direction="column"
  
  justifyContent="center"
  alignItems="center"
  borderRadius={10}
  bgcolor={'wheat'}
  
  
  >
      <Typography level="h2" marginBottom={4} color="purple" sx={theme => ({
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.72)`,
  })}>Sign Up</Typography>
    <Grid item lg={7}>
    <Input placeholder="Enter First Name" /> 
 </Grid>
 <Grid item xs={4}>
    <Input placeholder="Enter Last Name" /> 
 </Grid>
 <Grid item xs={4}>
 <Input placeholder="Enter Email" /> 
 </Grid>
 <Grid item xs={4}>
    <Input placeholder="Enter password" /> 
 </Grid>
 <Grid item xs={4}>
    <Input placeholder="Confirm Password" /> 
 </Grid>
    <Grid item xs={4}>
    <Button type='Submit'>Submit</Button>
    </Grid>

    </Grid>
    </Grid>
  )
}
