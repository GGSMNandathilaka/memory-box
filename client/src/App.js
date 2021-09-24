import React from "react";
import { Container, AppBar, Grid, Grow, Typography } from "@material-ui/core";

import memories from "./images/memories.jpg";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="primary">
        <Typography variant="h3" align="center">
          Memories
        </Typography>
        {/* <img src={memories} alt="memories" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
