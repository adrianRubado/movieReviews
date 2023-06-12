import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMediaQuery } from "@mui/material";

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

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                {Array.from(props.comment.email)[0]}
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
              <Typography paragraph>{props.comment.body}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
