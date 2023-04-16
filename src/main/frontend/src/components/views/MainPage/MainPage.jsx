import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SearchCoursePage from "../SearchCoursePage/SearchCoursePage";
import PrevRegisterPage from "../PrevRegisterPage/PrevRegisterPage";
import HomePage from "../HomePage/HomePage";
import MenuButton from "../Menubar/MenuButton";

function MainPage() {
  const xStyle = {
    transform: "translateX(0px)",
  };

  return (
    <Wrapper>
      <MenuButton>
        <Main style={xStyle}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search-course" element={<SearchCoursePage />} />
            <Route path="/prev-register" element={<PrevRegisterPage />} />
          </Routes>
        </Main>
      </MenuButton>
    </Wrapper>
  );
}
export default MainPage;

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  height: 100%;
  width: 100%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 85.5vh;
  border: 0px solid black;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  transition: all 0.5s ease;
  z-index: 30;
  background-color: #f4f4f4;
`;
