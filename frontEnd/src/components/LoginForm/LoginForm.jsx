import {Button, Stack, TextField} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";
import {postUserLogin} from "../../APIs/user_login";
export default function LoginForm(){

  const {register,handleSubmit,reset}=useForm()

  const onLogin=(data)=>{
   console.log(data)
   postUserLogin(data)
   reset()
  }

  const onValidationError=(errors)=>{
    alert("there were errors")
    console.log(errors)
  }

  return(<>
    <Stack textAlign={"center"} justifyContent={"center"} gap={10} direction={"row"}>
      <TextField id="user_name" variant="standard" label="username" {...register("user_name",{required:"the username is a required feild"})} ></TextField>
      <TextField id="user_password" variant="standard" label="password" type="password" {...register("user_password")}></TextField>
      <Button variant="contained" onClick={handleSubmit(onLogin,onValidationError)} >Login</Button>
    </Stack>
  </>)
}
