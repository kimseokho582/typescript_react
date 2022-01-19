import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgCololr};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  interface DummyProps {
    text: string;
    active?: boolean;
  }

  function Dummy({ text, active }: DummyProps) {
    return <H1>{text}</H1>;
  }

  return (
    <Container>
      <Dummy active={true} text="hello"></Dummy>
    </Container>
  );
}

export default App;
