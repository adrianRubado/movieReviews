import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function ResponsiveGrid({ movies }) {
  console.log(movies);
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginLeft: "10px",
        marginTop: "40px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {movies.map((m, index) => (
          <Grid xs={2} sm={4} key={index}>
            <Item>
              <img style={{ width: "10vw" }} src={m.poster} />
              <h5>{m.title}</h5>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
