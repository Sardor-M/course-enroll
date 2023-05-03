import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { serverCheckState } from "../../recoil/currentStates";
import { StyledHomeButton } from "./StyledHomeButton";
import { StyledMenuButton } from "./StyledMenuButton";

function MenuButton() {
  const serverChecks = useRecoilValue(serverCheckState);

  function fillzero(width, time) {
    const str = "" + time;
    return str.length >= width ? str : new Array(width - str.length) + str;
  }

  return (
    <Wrapper>
      <Menubar>
        <StyledHomeButton></StyledHomeButton>
        <StyledMenuButton></StyledMenuButton>
        <ServerCheck>
          {fillzero(2, serverChecks.hour)}:{fillzero(2, serverChecks.minute)}:
        </ServerCheck>
      </Menubar>
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

const ServerCheck = styled.div`
  display: flex;
  position: absolute;
  font-size: 13px;
  color: #888888;
  bottom: 0px;
  right: 5px;
`;
