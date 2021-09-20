import styled from "styled-components";
import {Button} from "antd";

export const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
  .time {
    display: flex;
    justify-content: space-between;
    height: 10%;
  }
  .reply {
    display: flex;
    flex-direction: column;
    height: 20%;
  }
  .email {
    display: flex;
    font-size: 22px;
  }
  .subject {
    display: flex;
    align-items: center;
    height: 5%;
    border: 1px solid #030303;
    margin-bottom: 15px;
    padding: 0 10px;
  }
  .body {
    height: 70%;
    border: 1px solid #030303;
    padding: 10px;
  }
`;

export const AntButton = styled(Button)`
  border-radius: 20px;
  background: #030303;
  color: #fff;
  height: 40px;
  width: fit-content;
  padding: 0 40px;
  &:active,
  &:focus,
  &:hover {
     background: #030303;
     color: #fff;
  }
`;

export const ExitButton = styled(Button)`
  border-radius: 10px;
  background: #9c9c9c;
  color: #fff;
  height: 40px;
  width: fit-content;
  padding: 0 10px;
  &:active,
  &:focus,
  &:hover {
     background: #9c9c9c;
     color: #fff;
  }
`;

