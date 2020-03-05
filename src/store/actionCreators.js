import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM , REMOVE_ITEM, INIT_LIST_ACTION } from "./actionType";
import axios from "axios";

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItem = () =>({
    type: ADD_TODO_ITEM
    
})

export const getDeleteItem = (index) =>({
    type: REMOVE_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getToDolist = () => {
    return (dispatch) => {
        const url = 'http://localhost:3001/stub-service/list.json';
        axios.get(url).then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
            console.log(action);
        })
    }
}