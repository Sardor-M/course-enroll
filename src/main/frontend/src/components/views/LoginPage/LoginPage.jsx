import React, { useState } from "react";
import styled from "styled-components";
import { NotificationManager } from "react-notifications";
import { useResetRecoilState } from "recoil";
import { currentErrorState } from "../../recoil/currentStates";
import { GrLogin } from "react-icons/gr";

function LoginPage() {
  const setCurrentUserErrorG = useResetRecoilState(currentErrorState);

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const handleInputId = (e) => {
    setUserId(e.target.value);
  };
  const handleInputPw = (e) => {
    setUserPw(e.target.value);
  };
  const onEnterPress = async (e) => {
    if (e.key === "enter") {
      await onClickLogin();
    }
  };
  const onClickLogin = async () => {
    if (userId === "") {
      setCurrentUserErrorG([
        NotificationManager.error("Please enter your ID."),
        true,
      ]);
      setTimeout(() => {
        setCurrentUserErrorG(["Please enter your ID.", false]);
      }, 2000);
    } else if (userPw === "") {
      NotificationManager.error("Please enter your PW.");
    }
  };

  return (
    <Wrapper>
      <ImgLogo src="assets/Enedge2.png" alt="Ededge Logo" />
      <Form>
        <IdPwDiv>
          <InputId
            id="login_id"
            type="text"
            placeholder="Input your ID"
            value={userId}
            onChange={handleInputId}
            onKeyDown={onEnterPress}
          />
          <PwButtonDiv>
            <InputPw
              id="login_pw"
              type="password"
              placeholder="Input your PW"
              value={userPw}
              onChange={handleInputPw}
              onKeyDown={onEnterPress}
            />
            <Button type="button" onClick={onClickLogin}>
              <ButtonImg />
            </Button>
          </PwButtonDiv>
        </IdPwDiv>
      </Form>
    </Wrapper>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 10%;
  height 10%;
  margin: 0 auto;
  min-width: 150px;
`;

const P = styled.p`
  padding: 0;
  color: #313131;
  margin: 0;
  margin-bottom: 10px;
  font-size: 11px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;
const IdPwDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 9vh;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const InputId = styled.input`
  position: relative;
  font-size: 13px;
  color: #313131;
  height: 50%;
  width: 100%;
  padding: 12px;
  padding-left: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  @include box-sizing(border-box);
  &:focus {
    z-index: 2;
  }
  &::-webkit-input-placeholder {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const PwButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50%;
`;
const InputPw = styled.input`
  position: relative;
  font-size: 13px;
  color: #313131;
  height: 100%;
  width: 100%;
  padding: 12px;
  padding-left: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  @include box-sizing(border-box);
  &:focus {
    z-index: 2;
  }
  &::-webkit-input-placeholder {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const Button = styled.button`
  min-width: 40px;
  position: relative;
  font-size: 18px;
  min-height: 26px;
  height: 100%;
  width: 20%;
  padding-top: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 6px;
  cursor: pointer;
  @include box-sizing(border-box);
  &:focus {
    z-index: 2;
  }
  &:hover {
    background: rgb(223, 223, 223, 0.9);
  }
`;

const ButtonImg = styled(GrLogin)`
  height: 62%;
  width: auto;
  min-height: 15px;
  margin: auto 0px;
  opacity: 0.6;
  color: #313131;
`;
