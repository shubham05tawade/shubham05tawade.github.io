import React, {useState, useRef, useEffect} from 'react';
import {db, auth} from './firebase';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';
import './ChatRoom.css';


function ChatRoom({id}) {

    const [{user}, dispatch] = useStateValue();
    const [inputmsg, setInputmsg] = useState('');
    const dummy = useRef();
    const messageRef = db.collection(id);
    const query = messageRef.orderBy('createdAt').limit(25);
    const[messages] = useCollectionData(query, {idField: 'id'});

    useEffect(() => {
        dummy.current.scrollIntoView({behavior: 'auto'});
    },[messages])

    const sendMessage = async(e) => {
        e.preventDefault();
        const uid = auth.currentUser;

        if(inputmsg.trim() == ""){
            setInputmsg('')
            return;
        }
        if(inputmsg.length > 1500){
            alert('Msg too long!😔');
            setInputmsg('');
            return;
        }

        await messageRef.add({
            msg: inputmsg,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user?.uid,
            emailId: user?.email
        }).then((res) =>{
            console.log(res)
        }).catch((err) => {console.log(err)})

        setInputmsg('');
        dummy.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="chatroom">
            <div class="chatroom-title">
                <h2>#{id}</h2>
            </div>
            <div class="container-fluid chatroom-block">
                {messages!=undefined && messages.map(msg => <ChatMessage key={msg?.id} message={msg?.msg} uid={msg?.uid} emailId={msg?.emailId} />) }
                <div ref={dummy}></div>
            </div>
            <div class="chatroom-input">
                <form onSubmit={sendMessage}>
                    <input type="text" placeholder="Enter message..." class="form-control" value={inputmsg} onChange={(e) => setInputmsg(e.target.value)} />
                    <button type="submit" class="btn">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatRoom
