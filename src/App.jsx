import React, { useState } from "react";

import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import Specialties from "./components/specialties/Specialties";
import MedicalConditions from "./components/medicalConditions/MedicalConditions"
import Services from "./components/services/services"

const App = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Specialties/>
      <MedicalConditions/>
      <Services/>
    </div>
  );
};

export default App;
