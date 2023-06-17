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
    console.log(resp.data);
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
            <Typography variant="h4" align="center" gutterBottom>
              Profile
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h6" gutterBottom>
              Name: {user.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Last name: {user.lastName}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Email: {user.email}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
