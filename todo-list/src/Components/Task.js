import React from 'react';
import PropTypes from 'prop-types';

const Task = ({title, desc, onSubmit, onChangeTask, onChangeDesc}) => (
    <div className='newTask'>
        <form onSubmit={onSubmit}>
            <label>Add New Task:</label>
            <input type='text' placeholder='Your task' value={title} onChange={onChangeTask} />
            <textarea rows="4" cols="50" placeholder='Describe it' value={desc} onChange={onChangeDesc} />
            <button type='submit'>Add</button>
        </form>
    </div>
)

Task.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChangeTask: PropTypes.func.isRequired,
    onChangeDesc: PropTypes.func.isRequired
};

export default Task;
