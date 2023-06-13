import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

const FavoriteCard = (props) => {
  return (
    <Card variant="outlined" sx={{ width: 320, marginTop: 700 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h2" fontSize="md">
          Batman
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5 }}>
          8
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body3" fontWeight="md" textColor="text.secondary">
            hola
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default FavoriteCard;
