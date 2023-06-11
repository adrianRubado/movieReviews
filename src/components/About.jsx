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
    backgroundColor: "grey",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  about: {
    marginBottom: 15,
  },
  scores: {
    marginTop: 15,
  },
  scoreItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
};

const MovieCard = (props) => {
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
            <Typography variant="body2" component="span">
              <strong>IMDB:</strong> {props.score}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
