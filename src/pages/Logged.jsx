import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Logged = () => {
  const navigate = useNavigate();
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
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Logged;
