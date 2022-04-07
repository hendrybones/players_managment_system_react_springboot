import React, { Component } from 'react'
import PlayerService from '../services/PlayerService'

class ListPlayersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                players: []
        }
        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    deletePlayer(id){
        PlayerService.deletePlayer(id).then( res => {
            this.setState({players: this.state.players.filter(player => player.id !== id)});
        });
    }
    viewPlayer(id){
        this.props.history.push(`/view-player/${id}`);
    }
    editPlayer(id){
        this.props.history.push(`/add-player/${id}`);
    }

    componentDidMount(){
        PlayerService.getPlayers().then((res) => {
            this.setState({ players: res.data});
        });
    }

    addPlayer(){
        this.props.history.push('/add-player/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Players List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPlayer}> Add Player</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Player First Name</th>
                                    <th> Player Last Name</th>
                                    <th> Player Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.players.map(
                                        player => 
                                        <tr key = {player.id}>
                                             <td> { player.firstName} </td>   
                                             <td> {player.lastName}</td>
                                             <td> {player.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editPlayer(player.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePlayer(player.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPlayer(player.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default ListPlayersComponent