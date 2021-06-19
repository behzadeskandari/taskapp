import React,{FC,useEffect} from 'react';

import { useDispatch , useSelector } from 'react-redux';

import { setNotification } from '../store/actions';
import '../index.css';

import { RootState } from '../store/store';

interface NotificationProps  {
    msg: string;
}

let timeout: ReturnType<typeof setTimeout>

const Notification : FC<NotificationProps> = ({msg}) => {
    const dispatch = useDispatch();
    const type = useSelector((state : RootState) => state.notification.type)
    console.log(msg,'msgsnmsfsfdsfs');
    useEffect(() => {
        if(msg !== ''){
            if(timeout){
                clearTimeout(2000);
            }
             timeout = setTimeout(() => {
                dispatch(setNotification(''));
            },3000);
        }
    },[dispatch,msg])

    const closeNotification = () => {
        dispatch(setNotification(''));
        clearTimeout(timeout);
    }

    return (
        <div className={msg ? `${type === 'danger' ? `notification is-danger`: `notification is-primary`}` : "notification is-hidden"}>
            <button className="delete" onClick={closeNotification}></button>
            <p>{msg}</p>
        </div>
    )
}
export default Notification;
