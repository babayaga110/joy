import React from 'react';
import { Typography,Grid,Input,Button } from '@mui/joy';
import {useForm} from 'react-hook-form';
export default function Sign() {
  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmpassword:""
 }
  });
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit((data)=>{
      console.log(data);
    })}>
   <Grid
    
    container
    spacing={2}
     borderRadius={10}
    bgcolor={"wheat"}
    sx={{
      maxWidth:500,
      padding:2,
      mx:0
    }}
  >
    <Grid xs={12} sx={{
      textAlign:"center"
    }}>
    <Typography level="h2"  color="purple">Sign Up</Typography>
    </Grid>
    <Grid item xs={6}>
      <Input placeholder="Enter First Name" {...register('firstname',{required:'field is required'})}/>
      <p>{errors.firstname?.message}</p> 
   </Grid>
    <Grid item xs={6}>
      <Input placeholder="Enter Last Name" {...register('lastname',{required:'field is required',minLength:4})} /> 
      <p>{errors.lastname?.message}</p> 
    </Grid>
 <Grid item xs={12}>
    <Input placeholder="Enter Email" {...register('email',{required:'field is required'})} /> 
    <p>{errors.email?.message}</p> 
 </Grid>
 <Grid item xs={12}>
    <Input placeholder="Enter password" {...register('password',{required:'field is required',minLength:4})} /> 
    <p>{errors.password?.message}</p> 
 </Grid>
 <Grid item xs={12}>
    <Input placeholder="Confirm Password" {...register('confirmpassword',{required:'field is required',minLength:4})} /> 
    <p>{errors.confirmpassword?.message}</p> 
 </Grid>
    <Grid item xs={12}>
       <Button type='Submit'>Submit</Button>
    </Grid>
</Grid>
</form>
   
  )
}
