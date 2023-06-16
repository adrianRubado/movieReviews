import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

const FavoriteCard = (props) => {
  return (
    <Card variant="outlined" sx={{ width: 320, margin: 10 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={props.fc.poster}
            alt={props.fc.title}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h2" fontSize="md">
          {props.fc.title}
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5 }}>
          {props.fc.score.$numberDecimal.toString()}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body3" fontWeight="md" textColor="text.secondary">
            {props.fc.genres.join(", ")}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default FavoriteCard;
