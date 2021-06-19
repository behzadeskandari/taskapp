import React ,{FC, FormEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import { List } from '../store/type';
import { addList , setNotification } from '../store/actions/index';

const CreateNewList : FC = () => {
    const dispatch = useDispatch();
    const [listName,SetListName] = useState<string>('');

    const inputChangeHandler = (e : FormEvent<HTMLInputElement>) => {
        SetListName(e.currentTarget.value);
    }
    const submitHandler = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(listName.trim() === ''){
            return alert('list name is required!!');
        }

        const newList : List = {
            id: `list-${new Date().getTime()}`,
            name: listName,
            tasks : []
        }
        console.log(newList,'newList')
        dispatch(addList(newList));
        dispatch(setNotification(`New list("${newList.name}") created!`))
        console.log( dispatch(setNotification(`New list("${newList.name}") created!`)));
        SetListName('');    
    }
    return (
        <div className="card mb-5">
            <div className="card-header">
                <p className="card-header-title">Create New List</p>
            </div>
            <div className="card-content">
                <form action="" onSubmit={submitHandler}>
                    <div className="field">
                        <label htmlFor="" className="label"></label>
                        <div className="control">
                            <input type="text" placeholder="List Name" name="listName" value={listName} onChange={inputChangeHandler} className="input" />
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateNewList;