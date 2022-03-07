import React from 'react'
import './ChatMessage.css';
import {useStateValue} from './StateProvider';
import {auth} from './firebase'

function ChatMessage({message, uid, emailId}) {
    const msgClass = uid === auth.currentUser?.uid ? 'sent' : 'received';
    return (
        <div className="chatmessage" class={msgClass}>
            <p>
                {message}
                { uid != auth.currentUser?.uid ?
                    <p><small>Sent by: {emailId}</small></p> : <i></i>
                }
            </p>
        </div>
    )
}

export default ChatMessage;
