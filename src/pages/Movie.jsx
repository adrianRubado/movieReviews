import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Trailer from "../components/Trailer";
import About from "../components/About";
import ReviewBox from "../components/ReviewBox";
import Box from "@mui/system/Box";
import { useMediaQuery } from "@mui/material";

const Movie = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const params = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/movies/${params.movieId}`
    );
    console.log(resp.data);
    setMovie(resp.data);
  };

  useEffect(() => {
    getMovie();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <Box
        sx={{
          backgroundColor: " #282c34",
          /* alignItems: "center",
          justifyContent: "center", */
          color: "white",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
        }}
        display={isMobile ? "column" : "flex"}
      >
        <Trailer trailer={movie.trailerLink} />
        <About plot={movie.plot} title={movie.title} />
      </Box>

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
          flex: "column",
        }}
      >
        <ReviewBox />
      </div>
    </div>
  );
};

export default Movie;
