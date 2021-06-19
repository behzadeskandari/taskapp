import { notificationAction, NotificationState, SET_NOTIFICATION } from "../type"


const initialState: NotificationState = {
    message: '',
    type: 'success'
}


export default (state = initialState, action: notificationAction): NotificationState => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                message: action.payload.msg,
                type: action.payload.type
            }
        default:
            return state
    }
}