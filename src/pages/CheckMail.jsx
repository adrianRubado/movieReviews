import React from "react";
import { useEffect } from "react";
import swal from "sweetalert";

const CheckMail = () => {
  useEffect(() => {
    swal({
      title: "Revisa tu correo",
      text: "Te enviamos un mail a tu casilla de correos para restablecer tu contraseña",
      icon: "info",
      buttons: false,
      timer: 3000,
    });
  }, []);

  return <div></div>;
};

export default CheckMail;
