import React, { FC } from "react";

import { useApp } from "./hooks";

import { Button, Container, Grid, Header } from "semantic-ui-react";
import { Home } from "./pages";

import "./App.css";

const App: FC = () => {
  const {} = useApp();

  return (
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1"> BlackJack</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Home />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
