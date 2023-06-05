import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Trailer from "../components/Trailer";
import About from "../components/About";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const resp = await axios.get();
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: " #282c34",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
          display: "flex",
          height: "100vh",
        }}
      >
        <Trailer />
        <About />
      </div>
    </div>
  );
};

export default Movie;
