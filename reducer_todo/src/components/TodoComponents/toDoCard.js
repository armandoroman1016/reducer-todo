import React from 'react';
import { Card } from 'semantic-ui-react'
import TodoList from './TodoList'
import ToDoForm from './TodoForm'

function ToDoCard(props) {
    
    const { state } = props 
    const { dispatch } = props
    
    return (
        <Card className = 'to-do-list'>
            <Card.Content className = 'header-container'>
                <Card.Header>React To-Do List</Card.Header>
            </Card.Content>
            <Card.Content className = 'items'>
                <TodoList 
                list = { state } 
                dispatch = { dispatch }
                />
            </Card.Content>
            <Card.Content className = 'form-container'>
                <ToDoForm 
                list = { state }
                dispatch = { dispatch }
                />
            </Card.Content>
        </Card>
    );
}

export default ToDoCard