import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const About = () => {
  useEffect(() => {
    Swal.close();
  }, []);

  return (
    <>
      <Navbar />
      <h1>HOlaaaaaa</h1>
    </>
  );
};

export default About;
