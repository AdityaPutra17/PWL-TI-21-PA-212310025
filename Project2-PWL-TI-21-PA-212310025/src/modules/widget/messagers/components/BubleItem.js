import React from 'react'

import moment from 'moment';

const styleChatBubleSender = {
  textAlign: "right",
  backgroundColor: "#a198a7",
  alignSelf: "flex-end"
};

const styleChatBubleReceiver = {
  backgroundColor: "#a83aef",
  alignSelf: "flex-start"
};

const BubleItem = ({ data, isSender }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="chat text-white rounded my-2 p-2" style={isSender ? styleChatBubleSender : styleChatBubleReceiver}>
        <span className="me-3">{data.message}</span>
        <span className='chat-date' style={{ fontSize: "12px" }}>
          {moment(data.date).format("HH:mm")}
        </span>
      </div>
    </div>
  );
};

export default BubleItem