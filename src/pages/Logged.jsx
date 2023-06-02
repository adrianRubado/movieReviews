import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResponsiveGrid from "../components/ResponsiveGrid";
import { useAuthUser } from "react-auth-kit";

const Logged = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const userState = useAuthUser();
  const getMovies = async () => {
    const resp = await axios.get("http://localhost:3000/api/movies");
    setMovies(resp.data);
  };
  useEffect(() => {
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
    console.log(userState().email);
  }, []);
  return (
    <>
      <Navbar user={userState().email} />
      <Hero movies={movies} />

      <ResponsiveGrid movies={movies} />
    </>
  );
};

export default Logged;
