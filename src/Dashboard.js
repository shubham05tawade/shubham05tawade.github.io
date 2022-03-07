import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import ChatRoom from './ChatRoom';
import {useHistory} from 'react-router-dom';
import {useStateValue} from './StateProvider'

function Dashboard() {

    const [{user}, dispatch] = useStateValue();
    const [room, setRoom] = useState('filtercodes_community');
    const history = useHistory();

    useEffect(() => {
        if(user==null){
            history.replace('/');
        }
    },[user]);
    
    return (
        <div className="dashboard" class="container-fluid" >
            <div class="row">
                <div class="col-md-3 dashboard-left">
                    <div class="top-panel">
                        <h1>Filtercodes</h1>
                        <button>Sign Out</button>
                    </div>
                    <div class="middle-panel"></div>
                    <div class="bottom-panel">
                        <h5>Channels</h5>
                        <button onClick={() => (setRoom('filtercodes_community'))}>#filercodes_community</button>
                        <button onClick={() => (setRoom('html5'))}>#html5</button>
                        <button onClick={() => (setRoom('css3'))}>#css3</button>
                        <button onClick={() => (setRoom('angular'))}>#angular</button>
                    </div>
                </div>
                <div class="col-md-9 dashboard-right"><ChatRoom id={room} /></div>
            </div>
        </div>
    )
}

export default Dashboard
