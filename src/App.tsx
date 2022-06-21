import React, { FC } from "react";

import { useApp } from "./hooks";

import "./App.css";
import { Container } from "semantic-ui-react";

const App: FC = () => {
  const {} = useApp();

  return <Container></Container>;
};

export default App;
