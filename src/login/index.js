import React, {useEffect, useState} from 'react';
import { Select } from 'antd';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { LoginWrap, AntSelect, AntButton } from './styles';
import { getAllUser } from "../actions/userAction";

const { Option } = Select;

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUserList] = useState([]);
  const userList = JSON.parse(localStorage.getItem('users') || '[]');

  useEffect(() => {
    if(userList.length) {
      const inActiveUser= (userList || []).filter(u => u.status === 'inactive');
      setUserList(inActiveUser || []);
    } else {
      dispatch(getAllUser((res) => {
        if(res) {
          const inActiveUser= (res || []).filter(u => u.status === 'inactive');
          setUserList(inActiveUser || []);
        }
      }));
    }
  }, []);

  const handleChange = (value) => {
    const index = (userList || []).findIndex(i => i.name === value);
    if(index !== -1) {
      setUserList([
        ...userList.slice(0, index),
        {...userList[index], status: 'active'},
        ...userList.slice(index+1)
      ]);
      localStorage.setItem("selectedUser", JSON.stringify({...userList[index], status: 'active'}));
    }
  };

  const onLogin = () => {
    localStorage.setItem('users', JSON.stringify(user));
    history.push('/lead');
  };

  return (
    <LoginWrap>
      <div className="content">
        <div className="title">Users</div>
        <AntSelect onChange={handleChange} placeholder="Select user">
          { (user).map(i => <Option value={i.name}>{i.name}</Option>) }
        </AntSelect>
        <AntButton onClick={onLogin}>Login</AntButton>
      </div>
    </LoginWrap>
  )
};

export default LoginPage;
