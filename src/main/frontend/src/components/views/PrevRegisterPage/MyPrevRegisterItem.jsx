import React from "react";
import { useSetRecoilState } from "recoil";
import {
  courseListState,
  userInfoState,
  userPrevRegisterState,
} from "../../recoil/userDataStates";
import { currentErrorState } from "../../recoil/currentStates";
import styled from "styled-components";

function MyPrevRegisterItem() {
  const setUserInfoG = useSetRecoilState(userInfoState);
  const setUserPrevReg = useSetRecoilState(userPrevRegisterState);
  const setCourseListGroup = useSetRecoilState(courseListState);
  const setCurrentErrorGroup = useSetRecoilState(currentErrorState);

  let myPrevBtnValue = {};
  return (
    <Tr>
      <Td>{props.prevReg.courseId}</Td>
      <Td>{props.prevReg.courseName}</Td>
      <Td>{props.prevReg.courseType}</Td>
      <Td>{props.prevReg.courseCredit}</Td>
      <Td>{props.prevReg.courseGrade}</Td>
    </Tr>
  );
}

export default MyPrevRegisterItem;

const Td = styled.td``;

const Tr = styled.tr`
  border: 0px;
  padding: 4px 0;
  margin: 0px;
  font-size: 12px;
  background-color: #ffffff;
  border-bottom: 1px solid #aaaaaa;
  text-align: center;
`;
