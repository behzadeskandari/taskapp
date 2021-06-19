import { notificationAction, SET_NOTIFICATION } from "../type"



export const setNotification = (msg: string, type: string = 'success'): notificationAction => {
    return {
        type: SET_NOTIFICATION,
        payload: {
            msg,
            type
        }
    }
}