import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, REMOVE_ITEM, INIT_LIST_ACTION} from './actionType'

const defauleState = {
    inputValue: '',
    list: []
}

// reducer 可以接受state， 但是绝不能修改state
export default (state = defauleState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        if(newState.inputValue !== ''){
            newState.list.push(newState.inputValue);
        }
        console.log(newState);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === REMOVE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }
    // console.log(state, action);

    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        // console.log(newState);
        return newState;
    }
    return state;
}