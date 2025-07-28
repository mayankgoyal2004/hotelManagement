import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";
import Room from "./Room";
import Service from "./service";
import Team from "./team";
import { Client } from "./Client";
import Footer from "./Footer";

import Editedsection from "./Editedsection";

const Body = () => {
  return (
    <div>
      <NavBar />
    <Hero />
    <Room />
    <Service />
    <Editedsection />
    <Client />
    <Team />
    <Footer />
    </div>
  );
};

export default Body;
