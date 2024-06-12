import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CustomCard = ({ title, count }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h4">{count}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
