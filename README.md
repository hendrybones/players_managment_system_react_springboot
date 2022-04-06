# players_managment_system_react_springboot

## Tools 
1. vscode ide to code frontend application
2. intellij idea to code backed application

## Technologies
1. ReactJs for the frond end
2. java spring boot for the backend
3. maven dependecies
4.

## Libaries 
1. axios -Axios is a promise based HTTP client for the browser and Node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. we use this libary to make Api calls. you use it by installing it using the command: npm install axios --save
2. bootstrap- we install bootstrap css library to enable us to style our UI in the frontend. install it by typing the command: npm install bootstrap --save
3. routing- we intall project routing to enable us to develop different components in our project by typing the commad: npm install react-router-dom


## how to configure app routing 
1. npm install react-router-dom 
2. In app.js is where you set your routing for your components example
3. import react router import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
4. set the route using switch there are two was switch is being replaced by Routes import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
5. <Router>
       
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListPlayersComponent}></Route>
              <Route path="/players" component={ListPlayersComponent}></Route>
              <Route path="/add-player/:id" component={CreatePlayerComponent}></Route>
              <Route path="/view-player/:id" component={ViewPlayerComponent}></Route>
              {/* <Route path="/update-player/:id" component={UpdatePlayerComponent}></Route> */}
              
              <ListPlayersComponent/>
              
              </Switch>
          </div>
          <FooterComponent />
       
      </Router>.
     
     using swicth approach which is upto route version 5 in version 6 you use Route instead of switch
   .
   6 
   
   ## components
   1. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
   
   ## services
  These is a class  where you set your logic on how your going to make api calls 
  1. first import axios
  2. then set your constant for base url for your api const PLAYER_API_bASE_URL ="http://localhost:8080/api/v1/players";
  3. create your method o how your going to perform th HttpsRequest to get data from api to be populated to the UI


 ## General essential syntax in Reactjs fundamental
 1. props -are used to pass data from one component to another (using this.props.history.push(`/view-player/${id}`);)
 2. we use state to get the id of an element in an array using this code (id: this.props.match.params.id
 3. we commonly make api call in commponentDidMount() method for example to save or update data use
 4. componentDidMount(){

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
  ##   we use the following code to compare between the string using a method the you make a call
    if(this.state.id === '_add'){
            return <h3 className="text-center">Add Player</h3>
        }else{
            return <h3 className="text-center">Update Player</h3>
        }
      
  ##  we  use th follewing code to call the method from the service to save or update data
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
    
    
  ## how to update record pulling the exist data and making some changes
  
  ## create api endpoint using spring boot
  1. create your model class
  2. creat a respositoty for your model class and then extend jpa repository which contain methods to perform crude operatio to the database
  3. create your service 
  4. then your controller which contain endpoints for httprequest
  5. connect to the database
  6. 
      

