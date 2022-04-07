import React, { Component } from 'react'
import PlayerService from '../services/PlayerService'

 class ViewPlayerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            players: {}
        }
    }

    componentDidMount(){
        PlayerService.getPlayerById(this.state.id).then( res => {
            this.setState({players: res.data});
        })
    }
   

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Player Details</h3>
                <div className = "card-body">
                <div className = "row">
                <label> Player First Name: </label>
                <div> { this.state.players.firstName }</div>
                </div>
                <div className = "row">
                <label> Player Last Name: </label>
                <div> { this.state.players.lastName }</div>
                </div>
                <div className = "row">
                <label> Player Email Id: </label>
                <div> { this.state.players.emailId }</div>
                </div>
                </div>
                </div>
                
            </div>
        )
    }
}
export default ViewPlayerComponent