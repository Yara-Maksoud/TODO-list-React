import React, { Component } from 'react';
import Task from './Task';
import ToDoList from './ToDoList';

const todoList = [{title: 'React Project', description: 'Do a react project'},
    {title: 'Nodejs Project', description: 'Do a Nodejs project'}
];
export default class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: todoList,
            title: '',
            desc: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    onSubmit = e => {
        const {list} = this.state;
        // todoList.push({
        //     title: this.state.title,
        //     description: this.state.desc
        // });
        const newTask = {
            title: this.state.title,
            description: this.state.desc
        }
        this.setState({list : [...list, newTask]});
        e.preventDefault();
        this.setState({
            title: '',
            desc: ''
        })         
        console.log(list);
    }

    onChangeTask = event => {
        this.setState({ title: event.target.value });
    }

    onChangeDesc = event => {
        this.setState({ desc: event.target.value });
    }

    onDone = itemIndex => {
        const {list} = this.state;
        const filteredList = list.filter((item, index) => index !== itemIndex);
        this.setState({ list : filteredList });

    }

    render() {
        const { list, title, desc } = this.state;
        return (
            <div>
                <Task title={title} desc={desc} onSubmit={this.onSubmit} onChangeTask={this.onChangeTask} onChangeDesc={this.onChangeDesc} />
                {list? <ToDoList list={list} onDone={this.onDone}/> : null}         
                {/* <ToDoList list={list} onDone={this.onDone}/> */}
            </div>
        )
    }
}


// ToDoApp.propTypes = {

// }