// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const TodoList = props => {

    const { list } = props

    const { dispatch } = props

    console.log(list)
    return (
        <div className = 'todo-list' >
            {list.list.length > 0 ?
                <p>Click on your tasks to mark complete.</p>
                :<p>Start by adding your tasks with the form below.</p>
            }

            {list.list.map( (item, index) => (
                <ToDo 
                    item = {item} 
                    key = {index} 
                    dispatch= {dispatch}
                    list = {list}
                />
            ))}
    </div>
    )
}

export default TodoList
