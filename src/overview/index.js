import React, {useEffect, useState} from "react";
import {useHistory } from "react-router-dom";
import { EmailWrap, ExitButton } from './styles.js';

const OverviewPage = () => {
  const history = useHistory();
  const leadsList = JSON.parse(localStorage.getItem('leads') || '[]');
  const [result, setResult] = useState({});

  useEffect(() => {
    if(leadsList) {
      const positive = (leadsList || []).filter(i => i.selectedReply === 'positive');
      const neutral = (leadsList || []).filter(i => i.selectedReply === 'neutral');
      const notALead = (leadsList || []).filter(i => i.selectedReply === 'notALead');
      setResult({positive: positive.length, neutral: neutral.length, notALead: notALead.length});
    }
  }, []);

  const onResetClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return(
    <EmailWrap>
      <div className="time">
        <ExitButton onClick={onResetClick} >RESET APPLICATION</ExitButton>
        <div className="email">OVERVIEW PAGE</div>
        <ExitButton onClick={() => history.goBack()}>Back</ExitButton>
      </div>
      <div className="reply">
        <div className="email">Positive replies: {result.positive || 0}</div>
        <div className="email">Neutral replies: {result.neutral || 0}</div>
        <div className="email">Not a lead: {result.notALead || 0}</div>
      </div>
      <div className="body">Subject, body, status</div>
    </EmailWrap>
  )
};

export default OverviewPage;
