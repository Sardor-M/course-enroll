import React from "react";
import styled from "styled-components";

function LoginPage() {
  return (
    <Wrapper>
      <P>Login Page</P>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  width: 100%;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const P = styled.p`
  padding: 0;
  color: #313131;
  margin: 0;
  margin-bottom: 10px;
  font-size: 11px;
  margin: 0 auto;
`;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 50%;
//   margin: 0 auto;
//   display: block;
// `;
