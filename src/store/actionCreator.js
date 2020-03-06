import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, REMOVE_ITEM } from './actionType'

export const getChangeInputAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItem = () => ({
    type: ADD_TODO_ITEM,
})

export const getRemoveItem = (index) => ({
    type: REMOVE_ITEM,
    index
})