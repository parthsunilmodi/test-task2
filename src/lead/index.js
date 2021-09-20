import React, {useEffect, useRef, useState} from "react";
import { useHistory } from 'react-router-dom';
import { getLeadsData } from '../selectors/userSelectors';
import {getAllEmail} from "../actions/userAction";
import {useDispatch, useSelector} from "react-redux";
import { EmailWrap, AntButton, ExitButton, AntModal, AntOkBtn } from './styles.js';

const LeadPage = () => {
  const dispatch = useDispatch();
  const history  = useHistory();
  const allMails = useSelector(getLeadsData);
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);
  const [selectedEmail, setSelectedEmail] = useState({});
  const [allEmailList, setAllEmail] = useState([]);
  const [modal, setModal] = useState(false);
  const isIdle = useRef(true);
  const list = useRef([]);

  const checkIdle = () => {
    setTimeout(() => {
      if(isIdle.current) {
        setModal(true);
      }
    }, 120000);
  };

  useEffect(() => {
    checkIdle();
    dispatch(getAllEmail());
  }, []);

  useEffect(() => {
    if(allMails.length) {
      setSelectedEmail(allMails[selectedEmailIndex]);
      list.current = allMails;
      setAllEmail(allMails);
    }
  }, [allMails]);

  const onReplyClick = async (type) => {
    isIdle.current= false;
    const index = selectedEmailIndex;
    const val = [
      ...allEmailList.slice(0, index),
      {...allEmailList[index], selectedReply: type},
      ...allEmailList.slice(index+1)
    ];
    list.current = val;
    await setAllEmail(val);
    setSelectedEmailIndex(index+1);
    if(selectedEmailIndex === (allEmailList.length -1)) {
      localStorage.setItem('leads', JSON.stringify(list.current));
      history.push('/overView')
    } else {
      setSelectedEmail(allEmailList[index+1]);
    }
  };

  const onOkBtn = () => {
    history.push('/');
  };

  return(
    <EmailWrap>
      <div className="time">
        <div>ELAPSED TIME</div>
        <ExitButton onClick={() => history.push('/')}>Exit</ExitButton>
      </div>
      <div className="reply">
        <AntButton onClick={() => onReplyClick('positive')}>POSITIVE REPLY</AntButton>
        <AntButton onClick={() => onReplyClick('neutral')}>NEUTRAL REPLY</AntButton>
        <AntButton onClick={() => onReplyClick('notALead')}>NOT A LEAD</AntButton>
      </div>
      <div className="email">EMAIL</div>
      <div className="subject">{selectedEmail?.subject || 'SUBJECT'}</div>
      <div className="body">{selectedEmail?.body || 'BODY'}</div>
      <AntModal
        visible={modal}
        centered
        closable={false}
        footer={null}
      >
        <div className="modal-body">
          <div className="session">Session Expires</div>
          <div className="title">Page will be refreshed because session has expired</div>
          <div className="border"><AntOkBtn onClick={onOkBtn}>OK</AntOkBtn></div>
        </div>
      </AntModal>
    </EmailWrap>
  )
};

export default LeadPage;
