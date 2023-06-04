import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import popcorn from "../assets/popcorn.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPw() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post(
        "http://localhost:3000/api/forgot-password",
        data
      );
      console.log(resp);
      //navigate("/forgot-password/check-mail");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <img src={popcorn} />
      </Avatar>
      <Typography component="h1" variant="h5">
        Para restablecer su contraseña ingrese su mail
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          {...register("email", {
            required: "Required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          error={!!errors?.email}
          helperText={errors?.email ? errors.email.message : null}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}

export default ForgotPw;
