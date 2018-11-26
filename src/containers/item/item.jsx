import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './item.css'

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

        const {task, finishTask} = this.props

        return (
            <li className="list-group-item">
                <div className="handle">
                    <label onClick={this.handleSupprimer}>supprimer?</label>
                </div>
                <form>
                    <lable>
                        <input type="checkbox" className="content" onClick={this.handleUpdate} checked={task.done}></input>
                        &nbsp;&nbsp;{task.name}
                        <p className="time">{task.updated_at}</p>
                    </lable>
                </form>
            </li>
        )

    }
}