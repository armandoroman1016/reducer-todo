import React, { useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './to_do_list.scss'
import ToDoCard from './components/TodoComponents/toDoCard'

import { initialState, ToDoReducer } from './reducers/To_Do_Reducer'

function App() {

  const [ state , dispatch ] = useReducer( ToDoReducer, initialState )

    return (

      <ToDoCard state = {state} dispatch = {dispatch}/>

    );
}
export default App;
  // const [ ls, setLs ] = useState(localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list')))
  // useEffect( () => {
    // setLs(localStorage.setItem('list', JSON.stringify(state.list)))
  // },[state]) 