import {Outlet} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import {Stack} from "@mui/material";
export default function Layout(){

  const [showDrawer,setShowDrawer]=useState(false)

  return(<>
   <Navbar setShowDrawer={setShowDrawer} ></Navbar>  
   <Stack direction={"row"} >
    {showDrawer &&  
     <Stack>
        <h6>hello</h6>
     </Stack>
    }
      <Outlet></Outlet>      
   </Stack>
  </>)
}
