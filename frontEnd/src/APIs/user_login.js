import axios from "axios";
import {backendURL} from "../constants";

export const postUserLogin=async (data)=>{
  try{
    const res = await axios.post(`${backendURL}login`,data)
    return res  
  }catch(err)
  {
    throw(err)
  }
}
