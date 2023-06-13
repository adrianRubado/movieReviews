import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import FavoriteCard from "../components/FavoriteCard";
import axios from "axios";

const Favorites = () => {
  const [favouriteCards, setFavouriteCards] = useState([]);

  const getFavorites = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/movies?pageSize=4&page=1`
    );
    setFavouriteCards(resp.data);
    console.log(resp.data);
  };

  useEffect(() => {
    Swal.close();
    getFavorites();
  }, []);

  return (
    <>
      <Navbar />
      {favouriteCards.map((fc, index) => {
        return <FavoriteCard fc={fc} />;
      })}
    </>
  );
};

export default Favorites;
