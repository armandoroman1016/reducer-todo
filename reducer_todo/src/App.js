import React, { useState , useReducer} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './to_do_list.scss'
import { Card } from 'semantic-ui-react'
import TodoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

import { initialState, AppReducer } from './reducers/App_Reducer'

function App() {

  console.log(initialState);

  const [ state , dispatch ] = useReducer( AppReducer, initialState )

  // const [list, setList] = useState(toDoList)

  // const addTask = taskName => {

  //   const newTask = {
  //     task : taskName,
  //     id : Date.now(),
  //     completed : false
  //   };

  //   setList([...list, newTask])

  // }

  // const toggleItem = id => {

  //   setList(
  //     list.map( item => {
  //       if (item.id === id ) {
  //         return { ...item , completed : !item.completed}
  //       } else {
  //         return item;
  //       }
  //     })
  //   )

  // }

  // const clearCompleted = () => {
  //   setList(list.filter(item => !item.completed))
  // }


  // list : localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list'))

  // useEffect( () => {
  //   localStorage.setItem('list', JSON.stringify(list));
  // }, [list] ) 


    return (
      <Card className = 'to-do-list'>
        <Card.Content className = 'header-container'>
          <Card.Header>React To-Do List</Card.Header>
        </Card.Content>
        <Card.Content className = 'items'>
          <TodoList 
            list = { state } 
            // toggleItem = {toggleItem}
            dispatch = { dispatch }
          />
        </Card.Content>
        <Card.Content className = 'form-container'>
        <ToDoForm 
          // addTask = {addTask}
          // clearCompleted = {clearCompleted}
          // arrList = {list}
          arrList = { state }
          dispatch = { dispatch }
          />
        </Card.Content>
      </Card>
    );
}

export default App;
