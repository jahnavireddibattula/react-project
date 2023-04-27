

import { Route, Routes } from "react-router-dom";
// import Switch from "react-router";

// import { LoginComponent } from "./Component/sampleapp/LoginComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
// import "./imagedata.css";
import NavBar from './Component/NavBar';
import Home from './Component/Home.js';
// import Cards from './Component/Card';
import Projects from './Component/Projects.js';
import Languages from './Component/Languages.js';
import TranslationEngines from './Component/LanguageTranslationEngines.js';
import Dashboard from './Component/Dashboard.js';
import Addnewproject from "./Component/Addnewproject.js";
// import { Component } from "react";

function App() {

  return (

    <div className="App">
      <Home/>

     <NavBar/>
  
     {/* <Router> */}
      <Routes>


      {/* <Route path="/" element={<LoginComponent/>} className="loginimg"></Route> */}
      

      {/* <Route path="/" element={<Home/>}></Route> */}

      <Route path="/" element={<Projects/>}></Route>
      

      <Route path="/Languages" element={<Languages/>}></Route> 
      

      <Route path="/TranslationEngines" element={<TranslationEngines/>}> </Route>


      <Route path="/Dashboard" element={<Dashboard/>}> </Route>


      <Route path="/Addnewproject" element={<Addnewproject/>}> </Route>
    
      </Routes>
     {/* </Router> */}

    </div>

  );

}



export default App;
