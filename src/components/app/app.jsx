import React, {Component} from 'react'

import Add from '../addtodo/addtodo'
import List from '../list/list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from "axios";

export default class App extends Component {

    state = {
        tasks: [],
        isLoaded: null
    }

    addTask = (task) => axios.post('https://todo-test-mona.herokuapp.com/tasks', task)
        .then(() => this.loadData())

    deleteTask = (task) => axios.delete(`https://todo-test-mona.herokuapp.com/tasks/${task.id}`)
        .then(() => this.loadData())


    finishTask = (task) => axios.put(`https://todo-test-mona.herokuapp.com/tasks/${task.id}`, {done: task.done})
            .then(() =>this.loadData())

    componentDidMount(){
        this.loadData()
    }

    loadData () {
        axios.get('https://todo-test-mona.herokuapp.com/tasks')
            .then((response) => {
                this.setState({
                    tasks:response.data,
                    isLoaded:true
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }

    render(){

        const {tasks} = this.state

        return(
            <div id='root'>
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