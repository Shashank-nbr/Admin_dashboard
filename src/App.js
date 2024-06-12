import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <MainContent />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
