import React from 'react';
import { Input, Button, List } from 'antd';

const ToDoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input
                    value={props.inputValue} 
                    placeholder='todo info' 
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={(e)=>{props.onHandleChange(e)}}
                >
                </Input>
                <Button 
                    type="primary"
                    onClick={(e)=>{props.handleBtnClick(e)}}
                >
                    提交
                </Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}} 
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                <List.Item onClick={()=>{props.onhandleRemove(index)}}>
                    {item}
                </List.Item>
                )}
            />
        </div>
    )
}

export default ToDoListUI; 