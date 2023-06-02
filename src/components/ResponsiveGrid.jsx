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
        marginTop: "20px",
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
              <img style={{ width: "20vw" }} src={m.poster} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}