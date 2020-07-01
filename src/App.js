import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			teams : [
				{name: "Chelsea", votes: 0},
				{name: "Man City", votes: 0},
				{name: "Man United", votes: 0},
        {name: "Arsenal", votes: 0},
        {name: "Liverpoool", votes: 0},
        {name: "Tottenham", votes: 0}
			]
		}
	}

	vote (i) {
		let newTeams = [...this.state.teams];
    newTeams[i].votes++;
   
		this.setState({teams: newTeams});
		
	}

	render(){
		return(
			<>
				<h1>Vote Your Favorite English Team!</h1>
				<div className="teams">
					{
						this.state.teams.map((team, i) => 
							<div key={i} className="team">
								<div className="voteCount">
									{team.votes}
								</div>
								<div className="teamName">
									{team.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;
