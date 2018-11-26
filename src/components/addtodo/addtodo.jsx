import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {

    static propTypes = {
        addTask: PropTypes.func.isRequired
    }

    state = {
        name: '',
        done: false
    }

    handleSubmit = () => {
        //obtenir les donnee, encapsulation
        const task = this.state
        //update
        this.props.addTask(task)
        //effacer l'entree
        this.setState({name: ''})
    }

    handleChange = (event) => {
        const name = event.target.value
        this.setState({name})
    }

    render(){
        const {name} = this.state
        return (
            <div className="col-md-12">
                <form className="form-horizontal">
                    <div className="form-group">
                        <h3>Task :</h3>
                        <input type="text" className="form-control" placeholder="Ajouter une tâche !"
                               value={name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}