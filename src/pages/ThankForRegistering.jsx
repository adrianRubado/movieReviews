import React, { useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ThankForRegistering = () => {
  

  useEffect(() => {
    

    swal({
      title: 'Gracias por registrarte',
      text: 'Te enviamos un link de confirmación a tu email',
      icon: 'success',
      buttons: false, // Desactiva los botones predeterminados de SweetAlert
      
    })
  }, []);

  return <div></div>;
};

export default ThankForRegistering;