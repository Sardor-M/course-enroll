import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import LoginPage from "./components/views/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/views/MainPage/MainPage";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;
