import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { Typography, Box } from "@mui/material";

const About = () => {
  useEffect(() => {
    Swal.close();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          minHeight: "100vh",
        }}
        style={{
          backgroundColor: "#282c34",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
        }}
      >
        <Navbar />
        <Typography variant="h4" component="h1" style={{ marginTop: "60px" }}>
          About Us
        </Typography>
        <main>
          <section style={{ marginLeft: "25px" }}>
            <Typography variant="h5" component="h2" fontWeight="bold">
              Our Story
            </Typography>
            <Typography variant="body1" component="p">
              En nuestra página web de rating de películas, nos apasiona el cine
              y queremos compartir esa pasión con todos los amantes del séptimo
              arte. Fundada en 2023, nuestra plataforma se ha convertido en un
              destino confiable para encontrar información valiosa y opiniones
              sobre las películas más populares. Es una pagina hecha por
              cinefilos para cinefilos, para poder crear un espacio en comun en
              donde podamos compartir nuestras opiniones y recomendaciones.
              Desde nuestros inicios, nos hemos dedicado a ofrecer una
              experiencia completa para los cinéfilos. Creemos en la importancia
              de la diversidad cinematográfica y nos esforzamos por incluir
              películas de diferentes géneros, idiomas y culturas en nuestro
              catálogo. Valoramos la opinión de nuestra comunidad de usuarios y
              les brindamos la oportunidad de compartir sus propias
              calificaciones y reseñas, creando así una plataforma interactiva y
              colaborativa. Gracias por ser parte de nuestra comunidad de
              cinéfilos y confiar en nosotros como tu recurso confiable para
              descubrir y evaluar películas. ¡Esperamos que disfrutes explorando
              nuestro sitio y encontrando nuevas joyas cinematográficas para
              disfrutar!
            </Typography>
          </section>

          <section style={{ marginTop: "40px", marginLeft: "25px" }}>
            <Typography variant="h5" component="h2" fontWeight="bold">
              Our dev Team
            </Typography>
            <ul>
              <li>Adrián Rubado</li>
              <li>Matias Broggia</li>
              <li>Federico Cortes</li>
              <li>Ursula Cordero</li>
              <li>Lucio Lama</li>
              <li>Corina Fontana Medina</li>
            </ul>
          </section>
        </main>
        <footer>&copy; 2023 Movie Reviews. All rights reserved.</footer>
      </Box>
    </>
  );
};

export default About;
