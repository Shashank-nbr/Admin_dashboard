import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Box sx={{ display: "flex" }}>
          <NotificationsIcon />
          <EmailIcon />
          <AccountCircleIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
