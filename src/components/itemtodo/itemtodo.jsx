import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './item-css.css'
import Checkbox from "react-bootstrap/es/Checkbox";

export default class Item extends Component {

    static propTypes = {
        task: PropTypes.object.isRequired,
        deleteTask: PropTypes.func.isRequired,
        finishTask: PropTypes.func.isRequired
    }

    handleSupprimer = () => {
        const {task,deleteTask} = this.props

        //confirmer
        if(window.confirm(`Vous voulez supprimer la tâche ${task.name} ?`)){
            //supprimer
            deleteTask(task)
        }
    }

    handleUpdate = () => {
        const {task,finishTask} = this.props

        if(task.done){
            task.done = false;
        }else{
            task.done = true;
        }
        finishTask(task)
    }

    render () {

        const {task} = this.props

        const unfinish = {
            color: '#FF9A3C',
        };

        const finish = {
            color: '#ccc',
            textDecoration: 'line-through'
        }

        let finishTodo = task.done === false ? unfinish : finish;

        return (
            <li className="list-group-item" style={finishTodo}>
                <div className="handle">
                    <p onClick={this.handleSupprimer}>supprimer?</p>
                </div>
                <form>
                    <p>
                        <Checkbox className="content" onChange={this.handleUpdate} checked={task.done}>
                            <span style={finishTodo}>{task.name}</span>
                        </Checkbox>
                        <p className="time">{task.updated_at}</p>
                    </p>
                </form>
            </li>

        )

    }
}