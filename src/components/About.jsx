import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const movieCardStyles = {
  root: {
    minWidth: 275,
    margin: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "white",
    backgroundColor: "grey",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    justifyContent: "center",
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

const MovieCard = () => {
  return (
    <Card sx={movieCardStyles.root}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={movieCardStyles.title}>
          {"Spiderman"}
        </Typography>
        <Typography variant="body2" component="p" sx={movieCardStyles.about}>
          {
            "The story revolves around Miles Morales, a young teenager living in Brooklyn, New York. Miles gets bitten by a radioactive spider and gains spider-like abilities. Soon after, he witnesses the original Spider-Man, Peter Parker, battling the supervillain Kingpin. During the fight, Kingpin opens up a dimensional portal, inadvertently causing multiple versions of Spider-Man from different dimensions to appear."
          }
        </Typography>
        <div sx={movieCardStyles.scores}>
          <div sx={movieCardStyles.scoreItem}>
            <Typography variant="body2" component="span">
              <strong>IMDB:</strong> {8.0}
            </Typography>
          </div>
          <div sx={movieCardStyles.scoreItem}>
            <Typography variant="body2" component="span">
              <strong>Rotten Tomatoes:</strong> {7.0}
            </Typography>
          </div>
          <div sx={movieCardStyles.scoreItem}>
            <Typography variant="body2" component="span">
              <strong>Metacritic:</strong> {10.0}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
