import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const movieCardStyles = {
  root: {
    width: "90vw",
    margin: "20px",
    marginTop: "80px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "white",
    backgroundColor: "#282c34",
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
  const genres = props.genres;
  const params = useParams();
  const [favourite, setFavourite] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleFavourite = async () => {
    const fav = axios.create({
      withCredentials: true,
    });
    const data = {
      imdbId: props.imdbId,
    };
    console.log(props.imdbId);
    const resp = await fav.post(
      "http://localhost:3000/api/add-favourite",
      data
    );
    console.log(resp.data);

    if (resp.data == "favourite added") {
      alert("movie added to favorites");
    } else {
      alert("movie deleted from favorites");
    }

    setFavourite(!favourite);
  };

  const fillHeart = async () => {
    const fav = axios.create({
      withCredentials: true,
    });
    console.log(params.movieId);
    const resp = await fav.get(
      `http://localhost:3000/api/favourite/${params.movieId}`
    );
    console.log(resp.data);
    setFavourite(resp.data);
  };

  useEffect(() => {
    fillHeart();
    setTimeout(() => {
      // Fetch data or perform other operation

      setIsLoading(false);
    }, 500);
  }, []);

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
            <Typography
              variant="body2"
              component="span"
              sx={movieCardStyles.info}
            >
              <strong>IMDB:</strong> {props.score}
              <br />
              <strong>Release Date: </strong> {props.releaseDate}
              <br />
              <strong>Genres: </strong> {genres?.join(",")}
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isLoading && (
            <Link>
              <FavoriteIcon
                onClick={handleFavourite}
                style={{ fontSize: "45px", color: favourite ? "red" : "white" }}
              />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
