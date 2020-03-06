import React from 'react';
import { connect }from 'react-redux'
import { getChangeInputAction, getAddItem, getRemoveItem } from './store/actionCreator';

const ToDoList = (props)=> {

    const {inputValue, changeInputValue,handleClick, handleRemove} = props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}></input>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return (
                        <li 
                            key={index} 
                            onClick={() => {handleRemove(index)}}
                        >
                            {item}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

// 把组件的数据（就相当于组件里的数据）映射到到组件的props中（比如state.inputValue会映射到组件的props.inputValue， state里的list 会映射给props 里的list）
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}


//其实就是redux中的store.dispatch , 把它映射到props 中 (比如 把changeInputValue 映射到组件中的 props中的把changeInputValue)
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = getChangeInputAction(e.target.value);
            dispatch(action);
        },

        handleClick(){
            const action = getAddItem();
            dispatch(action);
        },

        handleRemove(index){
            const action = getRemoveItem(index);
            dispatch(action);
        }
        
    }
}

// 链接sotre和组件
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

