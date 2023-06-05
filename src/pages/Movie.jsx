import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Movie = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  const getMovie = async () =>{
    const resp = await axios.get()
  }
  return <div>Movie</div>;
};

export default Movie;
