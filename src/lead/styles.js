import styled from "styled-components";
import {Button, Modal} from "antd";

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
    align-items: center;
    justify-content: space-between;
    height: 10%;
  }
  .email {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 10%;
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
    height: 65%;
    border: 1px solid #030303;
    padding: 0 10px;
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

export const AntOkBtn = styled(Button)`
  margin: 2px;
  border-radius: 10px;
  background: #1e84d1;
  color: #fff;
  height: 40px;
  width: fit-content;
  padding: 0 25px;
  &:active,
  &:focus,
  &:hover {
     background: #9c9c9c;
     color: #fff;
  }
`;

export const AntModal = styled(Modal)`
  .modal-body {
    text-align: center;
  }
  .session {
    color: gray;
    font-size: 28px;
    font-weight: bold;
  }
  .title {
    color: gray;
    font-size: 18px;
  }
  .border {
    margin-top: 20px;
    border: 2px solid #1e84d1;
    border-radius: 10px;
    margin: 20px auto 0 auto;
    width: 79px;
  }
`;

