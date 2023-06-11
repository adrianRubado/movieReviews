import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Comment from "../components/Comment";
import axios from "axios";

const CommentBox = (props) => {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      imdbId: props.movieId,
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
    setReviews(resp.data);
    setComment("");
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const getReviews = async () => {
    const data = {
      movie: props.movieId,
    };
    const resp = await axios.get("http://localhost:3000/api/reviews", data);
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
