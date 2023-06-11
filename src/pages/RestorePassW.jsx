import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Typography from "@mui/material/Typography";

const RestorePassW = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes realizar la lógica de restablecimiento de contraseña, como enviar una solicitud al servidor
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Box sx={{ mt: 2 }}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Nueva contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("password", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    "Password must contain at least 8 characters, 1 number and 1 Upper case character ",
                },
              })}
              value={password}
              onChange={handlePasswordChange}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <TextField
              label="Confirmar contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("confirmPassword", {
                required: "Este campo es requerido",
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
              })}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Restablecer contraseña
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RestorePassW;
