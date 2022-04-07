import React, { Component } from 'react'
import PlayerService from '../services/PlayerService';

 class CreatePlayerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdatePlayer = this.saveOrUpdatePlayer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PlayerService.getPlayerById(this.state.id).then( (res) =>{
                let player = res.data;
                this.setState({firstName: player.firstName,
                    lastName: player.lastName,
                    emailId : player.emailId
                });
            });
        }        
    }
    saveOrUpdatePlayer = (e) => {
        e.preventDefault();
        let player = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('player => ' + JSON.stringify(player));

        // step 5
        if(this.state.id === '_add'){
            PlayerService.createPlayer(player).then(res =>{
                this.props.history.push('/players');
            });
        }else{
            console.log('id => ' + JSON.stringify(this.state.id));
        PlayerService.updatePlayer(player, this.state.id).then( res => {
            this.props.history.push('/players');
        });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/players');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Player</h3>
        }else{
            return <h3 className="text-center">Update Player</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePlayer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default CreatePlayerComponent