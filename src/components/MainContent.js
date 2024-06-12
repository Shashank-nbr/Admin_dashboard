import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import Charts from "./Charts";

const MainContent = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">DASHBOARD</Typography>
      </Grid>
      <Grid item xs={3}>
        <Card title="PRODUCTS" count="249" />
      </Grid>
      <Grid item xs={3}>
        <Card title="PURCHASE ORDERS" count="83" />
      </Grid>
      <Grid item xs={3}>
        <Card title="SALES ORDERS" count="79" />
      </Grid>
      <Grid item xs={3}>
        <Card title="INVENTORY ALERTS" count="56" />
      </Grid>
      <Grid item xs={12}>
        <Charts />
      </Grid>
    </Grid>
  );
};

export default MainContent;
