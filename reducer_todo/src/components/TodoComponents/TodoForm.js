import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const ToDoForm = (props) => {

    const { dispatch } = props
    
    const [ toDoItem, setToDoItem ] = useState({
        task: '',
        id: null,
        completed: false
    });

    const handleChange = e => {
     setToDoItem({ ...toDoItem, [e.target.name] : e.target.value})
    }

    return (
        <Form onSubmit={() =>{ 
            dispatch({ type : 'ADD_TASK', payload : toDoItem})
            setToDoItem({...toDoItem, task : ''})
        }}>
            <Form.Field>
                <label>Manage Your Tasks</label>
                <input
                    placeholder="Add Your Task Here . . ."
                    name='task'
                    value = { toDoItem.task }
                    onChange = { handleChange }
                />
            </Form.Field>
            <Button type="submit">Add To Do</Button>
            <Button type="button" onClick={() => dispatch({ type : 'CLEAR_COMPLETED' })} className='remove-btn'>Clear Completed</Button>
        </Form>
    );
};

export default ToDoForm;
