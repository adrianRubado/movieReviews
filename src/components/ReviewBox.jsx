import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Comment from "../components/Comment";
import axios from "axios";
import Rating from '@mui/material/Rating';

const CommentBox = (props) => {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);


  const [value, setValue] = useState(0);
  const handleStars = (event, newValue) => {
    setValue(newValue);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      imdbId: props.movieId,
      title: props.title,
      body: comment,
      score: 5.0,
    };
    const createReview = axios.create({
      withCredentials: true,
    });
    const resp = await createReview.post(
      "http://localhost:3000/api/review",
      data
    );
    console.log(resp.data);
    // Add your logic here to handle the submission of the comment
    // You can send the comment to an API, update the state, etc.
    console.log("Submitted comment:", comment);
    setReviews(resp.data.reverse());
    setComment("");
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const getReviews = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/movie/${props.movieId}/reviews`
    );
    console.log(resp.data);
    setReviews(resp.data);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Write a review:</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Write your review here..."
          sx={{
            "& input": {
              color: "white",
            },
          }}
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={handleChange}
        />
        <br />
        <div>
        
   {  /*
Aca estan las estrellas 
*/}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleStars}
      />

    </div>
        <Button style={{ marginTop: "3px" }} variant="contained" type="submit">
          Submit
        </Button>
      </form>

      <section>
        {reviews.map((r, index) => {
          return <Comment comment={r} />;
        })}
      </section>
    </div>
  );
};

export default CommentBox;
