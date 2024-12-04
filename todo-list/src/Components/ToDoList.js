import React, { Component } from 'react'
import PropTypes from 'prop-types';

const ToDoList = ({list, onDone}) => (
    <div className='tasksList'>
        <h1>My ToDo List</h1>
        {list.map((item, index) => (
            <div key={index}>
                <ul>
                    <li>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => onDone(index)}>Done</button>
                    </li>
                </ul>
                
            </div>
        ))}
    </div>
)

ToDoList.prototypes = {
    list: PropTypes.array,
    onDone: PropTypes.func
}
export default ToDoList;