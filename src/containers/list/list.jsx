import React, {Component} from 'react'
import PropTypes from "prop-types";

import Item from '../item/item'
import './list-css.css'

export default class List extends Component {

    static propTypes = {
        tasks: PropTypes.array.isRequired,
        deleteTask: PropTypes.func.isRequired,
        finishTask: PropTypes.func.isRequired
    }

    render(){
        const {tasks, deleteTask, finishTask} = this.props

        return (
            <div>
                <h3  className="list">List :</h3>
                <h2 style={{display: 'none'}}>Il n'y a pas de tâche. Ajouter une tâche au-dessus !</h2>
                <ul className="list-group">
                    {
                        tasks.map((task,index) =>
                            <Item task={task} key={index} deleteTask={deleteTask} finishTask={finishTask}/>)
                    }
                </ul>
            </div>
        )
    }
}