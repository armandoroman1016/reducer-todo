import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const ToDoForm = (props) => {

    const [toDoItem, setToDoItem] = useState({
        task: '',
        id: null,
        completed: false
    });

    const handleChange = e => {
        
     setToDoItem({ ...toDoItem, [e.target.name] : e.target.value})
       
    }

    // const submitItem = e => {
    //     e.preventDefault()
    //     addTask(taskItem)
    //     setTaskItem('')
    // }

    // const clearCompleted = event => {
    //     event.preventDefault()
    //     clearCompleted()
    //     setTaskItem('')
    // }

    return (
        <Form onSubmit={/*submitItem*/() => console.log('hello')}>
            <Form.Field>
                <label>Manage Your Tasks</label>
                <input
                    placeholder="Add Your Task Here . . ."
                    name='task'
                    value = { toDoItem.task }
                    onChange = { handleChange }
                />
            </Form.Field>
            <Button type="submit" onClick = {() => console.log(toDoItem)}>Add To Do</Button>
            <Button type="button" onClick={/*clearCompleted*/ () => console.log('hello')} className='remove-btn'>Clear Completed</Button>
        </Form>
    );
};

export default ToDoForm;
