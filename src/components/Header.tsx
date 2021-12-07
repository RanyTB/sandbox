import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>Welcome to my sandbox</h1>
    </Container>
  );
};

const Container = styled.h1`
  border-bottom: 2px solid gray;
`;

export default Header;
