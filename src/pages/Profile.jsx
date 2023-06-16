import React from "react";
import Navbar from "../components/Navbar";
import { Container, Typography, Grid, Avatar, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const user = axios.create({
      withCredentials: true,
    });
    const resp = await user.get("http://localhost:3000/api/profile");
    setUser(resp.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: "80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <br/>
          <br/>
          <Typography variant="h4" align="center" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#333" }}>
          My Profile
          </Typography>
          
          <br/>
          <br/>
          <hr/>
          </Grid>
          

          <Grid item xs={12} sm={8}>
  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
    Name:
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "20px" }}>
    {user.name}
  </Typography>
  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
    Last Name:
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "20px" }}>
    {user.lastName}
  </Typography>
  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
    Email:
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "20px" }}>
    {user.email}
  </Typography>
</Grid>
          
        </Grid>
        <hr/>
      </Container>
    </>
  );
};

export default Profile;
