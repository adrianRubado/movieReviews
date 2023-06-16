import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import ResponsiveGrid from "../components/ResponsiveGrid";
import Button from "@mui/material/Button";

import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/movies?pageSize=6&page=1`
    );
    setMovies(resp.data);
  };
  useEffect(() => {
    Swal.close();
    getMovies();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
        style={{
          backgroundColor: "#282c34",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
        }}
      >
        <Navbar />

        {movies.map((fc, index) => {
          return (
            <Link to={`/movie/${fc.imdbId}`} style={{ textDecoration: "none" }}>
              <FavoriteCard fc={fc} sx={{ margin: "8px" }} />
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default Favorites;
