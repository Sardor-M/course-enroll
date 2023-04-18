import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function MenuButton() {
  const serverG = useRecoilValue(serverG);

  return (
    <Wrapper>
      <Menubar></Menubar>
    </Wrapper>
  );
}

export default MenuButton;

const Wrapper = styled.div`
  width: 100vh;
  height: 3.5vh;
  background-color: #f4f4f4;
`;

const Menubar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
