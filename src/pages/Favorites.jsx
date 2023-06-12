import React, { useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";

const Favorites = () => {
  useEffect(() => {
    Swal.close();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Favorites;
