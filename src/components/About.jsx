import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const movieCardStyles = {
  root: {
    width: "90vw",
    margin: "20px",
    marginTop: "80px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "white",
    backgroundColor: "#282c34"
  },
  title: {
    marginTop: "20px",
    fontSize: 38,
    marginBottom: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  about: {
    marginBottom: 15,
    fontSize: 20,
  },
  scores: {
    marginTop: 15,
    
  },
  scoreItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    
  },
  info: {
    fontSize: 18,
    
  },
};


const MovieCard = (props) => {
  const genres= props.genres;
 
  
  return (
    <Card sx={movieCardStyles.root}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={movieCardStyles.title}>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p" sx={movieCardStyles.about}>
          {props.plot}
        </Typography>
        <div sx={movieCardStyles.scores}>
          <div sx={movieCardStyles.scoreItem}>
            <Typography variant="body2" component="span" sx={movieCardStyles.info} >
              <strong>IMDB:</strong> {props.score}
              <br/>
              <strong>Release Date: </strong> {props.releaseDate}
              <br/>
              <strong>Genres: </strong> {genres}
              
        
              
            </Typography>
          </div>
          

          
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
