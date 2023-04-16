import React from "react";
import "./App.css";
import styled from "styled-components";
import LoginPage from "./components/views/LoginPage/LoginPage";

import MainPage from "./components/views/MainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";
import { CSSReset, ColorModeProvider } from "@chakra-ui/react";

ReactModal.setAppElement("#root");

function App() {
  return (
    <ColorModeProvider>
      <CSSReset />
      <Wrapper>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<MainPage />} />
          </Routes>
        </Router>
      </Wrapper>
    </ColorModeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;
