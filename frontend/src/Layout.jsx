import {Outlet} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import {Stack} from "@mui/material";
export default function Layout(){

  const [showDrawer,setShowDrawer]=useState(true)

  return(<>
   <Navbar setShowDrawer={setShowDrawer} ></Navbar>  
   <Stack direction={"row"} >
    {showDrawer &&  
     <Stack sx={{backgroundColor:"blue"}} minWidth={250} height={"94vh"} >
      <h1>hello</h1>
     </Stack>
    }
    <Stack>
     <Outlet></Outlet> 
    </Stack>
   </Stack>
  </>)
}
