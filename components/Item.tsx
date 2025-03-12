"use client";

import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Item = ({ value, cardSize }: { value: number; cardSize: number }) => {
  return (
    <Grid
      // first way

      //   size="grow"
      //   pr={17}
      //   pl={17}
      //   pt={0}
      //   pb={0}

      // second way
      size={cardSize}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
      >
        <CardContent>
          <Typography variant="h5">{value}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Item;
