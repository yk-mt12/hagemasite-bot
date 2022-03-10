import React from "react";
import styled from "styled-components";

import { Count } from "./components/Count";
import { Header } from "./components/Header";

function App() {
  return (
    <Div>
      <Header />
      <Count />
    </Div>
  );
}
export default App;

const Div = styled.div`
margin: 0 auto;
text-align: center;
`