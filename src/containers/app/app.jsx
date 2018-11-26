import React, {Component} from 'react'

import Add from '../add/add'
import List from '../list/list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from "axios";

export default class App extends Component {

    state = {
        tasks: [],
        isLoaded: null
    }

    addTask = (task) => {
        const _this=this;
        axios.post('https://todo-test-mona.herokuapp.com/tasks', task)
            .then(function () {
                    axios.get('https://todo-test-mona.herokuapp.com/tasks')
                        .then(function (response) {
                            _this.setState({
                                tasks:response.data,
                                isLoaded:true
                            });
                        })
            })
    }

    deleteTask = (task) => {
        const _this=this;
        axios.delete(`https://todo-test-mona.herokuapp.com/tasks/${task.id}`)
            .then(function () {
                    axios.get('https://todo-test-mona.herokuapp.com/tasks')
                        .then(function (response) {
                            _this.setState({
                                tasks:response.data,
                                isLoaded:true
                            });
                        })
            })
    }

    finishTask = (task) => {
        const _this=this;
        axios.put(`https://todo-test-mona.herokuapp.com/tasks/${task.id}`, {done: task.done})
            .then(function () {
                axios.get('https://todo-test-mona.herokuapp.com/tasks')
                    .then(function (response) {
                        _this.setState({
                            tasks:response.data,
                            isLoaded:true
                        });
                    })
            })
    }

    componentDidMount(){
        const _this=this;
        axios.get('https://todo-test-mona.herokuapp.com/tasks')
            .then(function (response) {
                _this.setState({
                    tasks:response.data,
                    isLoaded:true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }

    render(){

        const {tasks} = this.state

        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>Todo List : Gérer votre vie</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addTask={this.addTask}/>
                    <List tasks={tasks} deleteTask={this.deleteTask} finishTask={this.finishTask}/>
                </div>
            </div>
        )
    }
}