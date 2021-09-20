import styled from 'styled-components';
import {Button, Select} from "antd";

export const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    border: 1px solid #030303;
    padding: 50px;
    .title {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
`;

export const AntSelect = styled(Select)`
  width: 250px;
  margin-bottom: 15px;
  .ant-select-selector {
      height: 42px !important;
  }
`;

export const AntButton = styled(Button)`
  border-radius: 20px;
  background: #030303;
  color: #fff;
  height: 40px;
  width: fit-content;
  padding: 0 40px;
  margin: 0 auto;
  &:active,
  &:focus,
  &:hover {
     background: #030303;
     color: #fff;
  }
`;
