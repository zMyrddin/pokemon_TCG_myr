import React, { useEffect } from "react";
import axios from "axios";
import apiKey from "./ApiKey";
import { Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  useEffect(() => {
    const apiEndpoint = `https://pokemontcg.guru/`; 

    axios
      .get(apiEndpoint, {
        headers: {
          'x-api-key': apiKey,
        },
      })
      .then((response) => {
        // Handle the response from the API
        console.log('Data:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="Header">
      <h1>
        Poke TCG Trial
        </h1>
   

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

            </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default Header;
