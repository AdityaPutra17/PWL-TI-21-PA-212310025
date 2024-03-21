import React from 'react'
import BubleItem from './BubleItem';
import moment from 'moment';

const styledate = {
  textAlign: "center",
  alignSelf: "flex-end", 
};
const p = {
  backgroundColor: "#dddddd",
  padding:"8px",
  marginTop: "20px"
}

const ChatBody = ({data}) => {

  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
   
  return (
    <div className='chat-items'>
        {sortedData.map((v, index) => (
            <div className="" key={index}>
              {index === 0 || moment(v.date).format('YYYY-MM-DD') !== moment(sortedData[index - 1].date).format('YYYY-MM-DD') ? (
            <div className="chat-date-header" style={styledate} >
              <span style={p}>{moment(v.date).isSame(moment(), 'day') ? 'Today' : moment(v.date).format('DD MMMM YYYY')}</span></div>
          ) : null}
              <BubleItem data={v} isSender={v.from === 'Febry'} />
            </div>
        ))}
    </div>
  )
}

export default ChatBody