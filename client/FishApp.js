// FISH   (Hierarchy)
	// Jumbotron
	// Toggle Fish
	// Display Fish
		// ?
		// ?
	// Edit Fish


var React = require('react');
var FishBox = require('./FishComps/FishBox');


var Jumbotron = React.createClass({
	render: function() {
		return(
			<div className="jumbotron">
			  <h1 className="display-3">Trolling</h1>
			  <p className="lead">Fish Hooks</p>
			  <hr className="m-y-2"/>
			  <p></p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="" role="button">FISH Button</a>
			  </p>
			</div>
		)
	}
})




var Loader = React.createClass({
	render: function() {
		return (
			<div>
       			<i id="spinner" className="fa-spin fa fa-reddit-alien fa-6"></i>
     		</div>
		)
	}
})

var FishApp = React.createClass({
	getInitialState: function() {
		return {
			fishArray: null
			// null makes it easier to handle whether it has state or not
		}
	},
	submitFishToServer: function(fishData) {
		console.log("This is coming from FishForm", fishData);
	},
	loadAllFishFromServer: function() {	
		// GO GET ALL FISH FROM SERVER
		var self = this;
		$.ajax({
			url: '/api/fish',
			method: 'GET'
		}).done(function(data){
			// UPDATE FISH STATE WITH DATA
			console.log(data)
			setTimeout(function(){
				self.setState({fishArray: data})
			}, 1000);
		})
	},
	submitFishToServer: function(fishData) {
		console.log(fishData, "fishData showing")
		var self = this;
		$.ajax({
			url: '/api/fish',
			method: 'POST',
			data: fishData
		}).done(function(data){
		console.log('posted fish to server', data);
			self.loadAllFishFromServer();
		})
	},
	componentDidMount: function() {
		this.loadAllFishFromServer();
	},
	render: function() {
		if(this.state.fishArray){
		return (
			<div>
				<Jumbotron />
				<FishBox submitFishToServer={ this.submitFishToServer } fishArray={ this.state.fishArray }/>
			</div>
			)
		} else {
		return <Loader />
		}
	}
})

module.exports = FishApp;