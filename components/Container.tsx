"use client";

import React from "react";
import { useCheckbox } from "../context/CheckboxContext";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "./Item";

const Container = () => {
  const { state } = useCheckbox();
  const count = state.selectedCheckboxs.length;
  const cardSize = count === 1 ? 12 : count === 2 ? 6 : count === 3 ? 4 : 3;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} sx={{ height: "100%", padding: "20px" }}>
        {state.selectedCheckboxs.map((item) => (
          <Item value={item} key={item} cardSize={cardSize} />
        ))}
      </Grid>
    </Box>
  );
};

export default Container;
