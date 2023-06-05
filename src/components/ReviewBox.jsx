import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle the submission of the comment
    // You can send the comment to an API, update the state, etc.
    console.log("Submitted comment:", comment);
    setComment("");
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default CommentBox;
