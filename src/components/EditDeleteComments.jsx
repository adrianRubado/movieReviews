import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import axios from "axios";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EditReviewCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [editedContent, setEditedContent] = useState(props.comment.body);
  const [avatar, setAvatar] = useState({});
  const isMobile = useMediaQuery("(max-width:800px)");
  const [value, setValue] = useState(props.comment.score.$numberDecimal);

  const handleStars = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getMovieAvatar = async () => {
    const resp = await axios.get(
      `http://localhost:3000/api/movies/${props.comment.imdbId}`
    );
    setAvatar(resp.data.poster);
  };

  useEffect(() => {
    getMovieAvatar();
  }, []);

  const handleInputChange = (event) => {
    setEditedContent(event.target.value);
  };

  async function handleDelete(event, id) {
    console.log(id);
    Swal.fire({
      text: "Confirm delete review",
      showCancelButton: true,
      confirmButtonText: "Accept",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteR = axios.create({
          withCredentials: true,
        });

        const resp = await deleteR.delete(
          `http://localhost:3000/api/reviews/${id}`
        );
        console.log(resp);
        props.update(resp.data);

        if (resp.data.length == 0) {
          props.noReviews();
        }
        location.reload();
      }
    });
  }

  async function handleEdit(event, id) {
    if (expanded) {
      setIsEditing(!isEditing);
    }

    if (!expanded) {
      setIsEditing(!isEditing);
      setExpanded(!expanded);
    }
  }

  async function updateReview(event, id, body) {
    console.log(id);
    console.log(body);
    const updateR = axios.create({
      withCredentials: true,
    });
    const data = {
      data: body,
      score: value,
    };
    const resp = await updateR.put(
      `http://localhost:3000/api/reviews/${id}`,
      data
    );
    props.update(resp.data);
    location.reload();
  }

  function generateShortDescription(longText, maxLength) {
    if (longText.length <= maxLength) {
      return longText;
    }

    const truncatedText = longText.substring(0, maxLength - 3); // Subtracting 3 to account for the ellipsis
    return truncatedText + "...";
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "2em",
          width: "80vw",
        }}
      >
        <Card style={{ width: "80vw" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                <img src={avatar} />
              </Avatar>
            }
            /* action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            } */
            title={props.comment.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {generateShortDescription(props.comment.body, 200)}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <h4>Read More</h4>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ArrowForwardIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {isEditing ? (
                <form>
                  <TextField
                    value={editedContent}
                    onChange={handleInputChange}
                    placeholder="Enter edited content"
                    fullWidth
                    variant="outlined"
                    multiline
                    size="medium"
                  />
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={handleStars}
                  />
                  <Stack
                    sx={{ marginTop: "10px", justifyContent: "center" }}
                    spacing={2}
                    direction="row"
                  >
                    <Button
                      onClick={(event) =>
                        updateReview(event, props.comment._id, editedContent)
                      }
                      variant="contained"
                    >
                      Update
                    </Button>
                    <Button onClick={handleEdit} variant="outlined">
                      Cancel
                    </Button>
                  </Stack>
                </form>
              ) : (
                <>
                  <Typography paragraph>{props.comment.body}</Typography>
                  <Rating
                    name="readOnly "
                    value={props.comment.score.$numberDecimal}
                    readOnly
                  />
                </>
              )}
            </CardContent>
          </Collapse>
        </Card>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton
            onClick={(event) => handleDelete(event, props.comment._id)}
            arial-label="delete"
            size="small"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            onClick={(event) => handleEdit(event, props.comment._id)}
            arial-label="edit"
            size="small"
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </div>
    </>
  );
}
