import React from "react";
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/settings" element={<h1>settings</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
