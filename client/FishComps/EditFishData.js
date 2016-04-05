var React = require('react');
var EditFishForm = require('./EditFishForm');

var EditFishData = React.createClass({
	// to finish this do the following.
	// get one fish as data (ajax)
	// pass that state into form
	// use form to show that data
	getInitialState: function() {
		return {
				fishName: null,
				color: null,
				length: null,
				img: null,
				people_Eater: null
		}
	},
	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},
	loadOneFishFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/fish/one_fish/' + this.props.id,
			method: 'GET',
		}).done(function(data){
			// DATA IS ONE FISH OBJECT
			self.setState({
				name: data.name,
				color: data.color,
				length: data.length,
				img: data.img,
				people_eater: data.people_eater
			})
		})
	},
	onFieldChange: function(fieldName, fieldValue) {
		const newState = {};
		newState[fieldName] = fieldValue;
		this.setState(newState);
	},
	onNameChange: function(event) {
		this.setState({ name: event.target.value})
	},
	onColorChange: function(event) {
		this.setState({ color: event.target.value})
	},
	onLengthChange: function(event) {
		this.setState({ length: event.target.value})
	},
	onImgChange: function(event) {
		this.setState({ img: event.target.value})
	},
	peopleEaterChange: function(event) {
		this.setState({ people_eater: event.target.value})
	},
	componentDidMount: function() {
		this.loadOneFishFromServer()
	},
	onFishEditSubmit: function(e) {
		e.preventDefault();
		console.log(fishData);
		var fishData = {
			name: this.state.name.trim(),
			color: this.state.color.trim(),
			length: this.state.length.trim(),
			img: this.state.img.trim(),
			people_eater: this.state.people_eater
		};

		console.log("fish data in fish app", fishData);
		
		var self = this;
			$.ajax({
				url: '/api/fish/one_fish/' + this.props.id,
				method: 'PUT',
				data: fishData
			}).done(function(data){
				console.log("Edited fish success", data);
				self.props.toggleActiveComp('fish');
				self.context.sendNotification("Edited Fish");
			});

			this.setState({name: "", color: "", length: "", img: "",});
	},
	render: function() {
		return this.state.name ? <EditFishForm 
									onFishEditSubmit={ this.onFishEditSubmit }
									onFieldChange={(...args) => this.onFieldChange(...args)}
									onNameChange={this.onNameChange} 
									onColorChange={this.onColorChange} 
									onLengthChange={this.onLengthChange} 
									onImgChange={this.onImgChange} 
									peopleEaterChange={this.peopleEaterChange} 
									{...this.state} /> : null;
	}
});
// the "..." on line 61 spreads this out through all the fields (fishName, color, length, etc.)
module.exports = EditFishData;