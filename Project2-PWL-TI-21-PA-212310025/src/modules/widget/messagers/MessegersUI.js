import React, { useEffect, useRef, useState } from 'react'
import { ButtonPrimary, ButtonSecondary } from './components/ButtonUI'
import ChatBody from './components/ChatBody'
import moment from 'moment'

const StylesMesseger = {
    chatBox:{
        minHeight: "200px",
        maxHeight: "45vh",
        overflowY:"auto "
    }
}

const MessegersUI = () => {
    const chatArr = [
        { id: 1, 
            message: "Hi", 
            from: "Febry", 
            date: "2024-02-22 10:30:00" 
        },
        { id: 2, 
            message: "Iya", 
            from: "Isnan", 
            date: "2024-02-22 10:35:00" 
        },
        { id: 3, 
            message: "Apakah itu Micro-Frontend ?", 
            from: "Febry", 
            date: "2024-02-22 10:50:00" 
        },
        { id: 4, 
            message: "Kaga tau", 
            from: "Isnan", 
            date: "2024-02-22 10:52:00" 
        },
        { id: 5, 
            message: "Apaan dah", 
            from: "Isnan", 
            date: "2024-02-22 10:52:00" 
        },
        { id: 6, 
            message: "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya.", 
            from: "Febry", 
            date: "2024-02-22 11:00:00" 
        },
        { id: 7, 
            message: "Bijiiii", 
            from: "Isnan", 
            date: "2024-02-22 12:12:00" 
        },
    ]
    const [writechat, setWriteChat] = useState("")
    const [myChat, setMyChat] = useState(chatArr);

    const endOfMessegesRef = useRef(null)
    const scrollToBottom = () =>{
        endOfMessegesRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        scrollToBottom()
    }, [myChat])

    const HandlerSendChat = (e) => {
        e.preventDefault()
        const objChat ={
            id:99,
            message: writechat,
            from: "Febry",
            date: moment().format('YYYY-MMM-DD HH:mm')
        }
        setMyChat([...myChat, objChat])
        setWriteChat("")
    }

  return (
    <div className='card container '>
        <div className="card-header d-flex justify-content-between ">
            <h3 className="card-title align-items-start flex-column">
                <span className="fw-bold mb-2 text-grey-900">Chats</span>
            </h3>
            <div className="card-toolbar">
                <ButtonSecondary items={{title : "create new chat", btn_class: "btn-icon btn-clear"}}>
                    <i className="bi bi-pencil-square"></i>
                </ButtonSecondary>
            </div>
        </div>
        <div className="card-body p-0">
            <div className="chat-message px-2 bg-success-subtle" style={StylesMesseger.chatBox}>
                <ChatBody data={myChat}/>
                <div ref={endOfMessegesRef}></div>
            </div>
            <div className="chat-send bg-light p-3">
                <form autoComplete='off' method='post' onSubmit={(e) => HandlerSendChat(e)}>
                    <div className="d-flex justify-content-between align-items-center ">
                        <input type="text" className='form-control me-2' autoFocus={true} value={writechat} onChange={(e) => setWriteChat(e.target.value)}/>
                        <ButtonPrimary items={{
                            title : "Send",
                            btn_class: "btn-icon btn-success",
                            type: "submit"
                            }}>
                            <i className='bi bi-send'></i>
                        </ButtonPrimary>        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MessegersUI