import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
// import axios from 'axios'
import store from './store';
import ToDoListUI from './ToDoListUI'
import { getInputChangeAction, getAddTodoItem, getDeleteItem ,getToDolist} from './store/actionCreators'


const ToDoList = () => {
    const [storesta, setStoresta] = useState(store.getState());

    const handleStoreChange = () => {
        setStoresta(store.getState());
    }
    store.subscribe(() => {handleStoreChange()})
    
    const onHandleChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    const handleBtnClick = () => {
        const action = getAddTodoItem();
        store.dispatch(action);
    }

    const onhandleRemove = (index) => {
        const action = getDeleteItem(index)
        store.dispatch(action);
    }

    useEffect(() => {
        const action = getToDolist();
        store.dispatch(action);
    }, [])
 
    return (
        <ToDoListUI
            inputValue = {storesta.inputValue}
            onHandleChange = {onHandleChange}
            handleBtnClick = {handleBtnClick}
            list = {storesta.list}
            onhandleRemove = {onhandleRemove}
        >

        </ToDoListUI>
    )
}

export default ToDoList;