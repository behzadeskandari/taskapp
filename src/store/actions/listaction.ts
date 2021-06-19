import { ADD_LIST, ListAction, List, GET_LISTS, GET_LIST_BY_ID, SET_LISTID_TO_DELETE, SET_SELECTED_LIST, SET_LIST_TO_EDIT, DELETE_LIST, UPDATE_LIST, ADD_TASK, Task, SET_TASK_TO_DELETE, UNSET_TASK_TO_DELETE, DELETE_TASK, SET_TASK_TO_EDIT, UNSET_TASK_TO_EDIT, UPDATE_TASK } from "../type";

export const addList = (list: List): ListAction => {
    return {
        type: ADD_LIST,
        payload: list,
    }
}

export const getLists = (): ListAction => {
    return {
        type: GET_LISTS,
        payload: '',
    }
}



export const getListById = (id: string): ListAction => {
    return {
        type: GET_LIST_BY_ID,
        payload: id,
    }
}



export const setListIdToDelete = (id: string): ListAction => {
    return {
        type: SET_LISTID_TO_DELETE,
        payload: id,
    }
}


export const setListToEdit = (id: string): ListAction => {
    return {
        type: SET_LIST_TO_EDIT,
        payload: id,
    }
}

export const setSelectedList = (id: string): ListAction => {
    return {
        type: SET_SELECTED_LIST,
        payload: id,
    }
}


export const deleteList = (id: string) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
}



export const updateList = (id: string, name: string): ListAction => {
    return {
        type: UPDATE_LIST,
        payload: {
            id,
            name
        }
    }
}



export const addTask = (task: Task, list: List): ListAction => {
    return {
        type: ADD_TASK,
        payload: {
            task,
            list
        }
    }
}



export const setTaskToDelete = (task: Task, list: List): ListAction => {
    return {
        type: SET_TASK_TO_DELETE,
        payload: {
            task,
            list
        }
    }
}


export const unsetTaskToDelete = (): ListAction => {
    return {
        type: UNSET_TASK_TO_DELETE
    }
}

export const deleteTask = (task: Task, list: List): ListAction => {
    return {
        type: DELETE_TASK,
        payload: {
            task,
            list
        }
    }
}


export const setTaskToEdit = (task: Task, list: List): ListAction => {
    return {
        type: SET_TASK_TO_EDIT,
        payload: {
            task,
            list
        }
    }
}

export const unsetTaskToEdit = (): ListAction => {
    return {
        type: UNSET_TASK_TO_EDIT
    }
}

export const updateTask = (taskId: string, taskName: string, taskState: boolean, list: List): ListAction => {
    return {
        type: UPDATE_TASK,
        payload: {
            taskId,
            taskName,
            taskState,
            list
        }
    }
}