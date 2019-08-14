import React from 'react'

const ToDo = props => {

    const {dispatch} = props

    return (
        <div onClick = {() =>{ dispatch({ type : 'TOGGLE_ITEM', payload: props.item }) }}>
            {props.item.completed ? 
                <p style = {{textDecoration : 'line-through'}} className = 'list-item'>{props.item.task}</p>
                : <p className = 'list-item'>{props.item.task}</p>
            }
        </div>
    )
}

export default ToDo