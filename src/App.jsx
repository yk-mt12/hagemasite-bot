import React from "react";
import styled from "styled-components";

import {  Main } from "./components/Main";
import { Header } from "./components/Header";

function App() {
  return (
    <SDiv>
      <Header />
      <Main />
    </SDiv>
  );
}
export default App;

const SDiv = styled.div`
text-align: center;
background-color: #fff;
height: 100%;
`