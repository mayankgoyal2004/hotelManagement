import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Hero from "./components/Hero";
import Room from "./components/Room";
import Body2 from "./components/homepage2/body2";

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<Body />}> 
            </Route>
            <Route path="/home2" element={<Body2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
