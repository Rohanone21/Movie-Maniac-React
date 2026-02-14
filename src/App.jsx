import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import MovieApp from "./MovieApp";
import MovieApp2 from "./MovieApp2";
import MovieApp3 from "./MovieApp3";
import MovieApp4 from "./MovieApp4";
import MovieApp5 from "./MovieApp5";

const App = () => {
  return (
    <BrowserRouter>
 

      <Routes>
        <Route path="/" element={<Navigate to="/MovieApp"/>} /> 
        <Route path="/MovieApp" element={<MovieApp />} />
        <Route path="/MovieApp2" element={<MovieApp2 />} />
        <Route path="/MovieApp3" element={<MovieApp3 />} />
        <Route path="/MovieApp4" element={<MovieApp4 />} />
         <Route path="/MovieApp5" element={<MovieApp5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
