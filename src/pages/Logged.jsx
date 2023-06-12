import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResponsiveGrid from "../components/ResponsiveGrid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";

const Logged = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(params.id == undefined ? 1 : params.id);

  const pages = [...Array(3).keys()].map((p) => p + 1);

  const handlePages = async (e) => {
    const page = parseInt(e.target.innerText);
    const resp = await axios.get(
      `http://localhost:3000/api/movies?pageSize=9&page=${page - 1}`
    );
    setMovies(resp.data);
    setIndex(page);

    window.scrollTo(0, 0);
  };

  const getMovies = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/movies?pageSize=9&page=${
        params.id == undefined ? 0 : params.id - 1
      }`
    );
    setMovies(resp.data);
  };
  useEffect(() => {
    Swal.close();
    const verify = async () => {
      try {
        const verifyToken = axios.create({
          withCredentials: true,
        });
        const resp = await verifyToken.post("http://localhost:3000/api/verify");
        console.log(resp);
      } catch (error) {
        navigate("/sign-in");
      }
    };
    verify();
    getMovies();
  }, []);
  return (
    <>
      <div
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
        <Hero movies={movies} />
        <ResponsiveGrid movies={movies} />
        {movies.length != 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              {pages.map((p, i) => {
                return (
                  <>
                    {p == index && (
                      <Link to={`/home/${p}`}>
                        <Button onClick={handlePages} variant="contained">
                          {p}
                        </Button>
                      </Link>
                    )}
                    {p != index && (
                      <Link to={`/home/${p}`}>
                        <Button onClick={handlePages}>{p}</Button>
                      </Link>
                    )}
                  </>
                );
              })}
            </ButtonGroup>
          </Box>
        )}
      </div>
    </>
  );
};

export default Logged;
