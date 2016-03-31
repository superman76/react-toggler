// FISH   (Hierarchy)
	// Jumbotron
	// Toggle Fish
	// Display Fish
		// ?
		// ?
	// Edit Fish


var React = require('react');
var FishBox = require('./FishComps/FishBox');
var FishJumbotron = require('./FishComps/FishJumbo');

var FishApp = React.createClass({
	submitFishToServer: function(fishData) {
		console.log("This is coming from FishForm", fishData);
		var self = this;
		$.ajax({
			url: '/api/fish',
			method: 'POST',
			data: fishData
		}).done(function(data){
			console.log("inside POST fish success", data);
			self.loadAllFishFromServer();
		})
	},
	render: function() {
		return (
			<div>
				<FishJumbotron />
				<FishBox submitFishToServer={ this.submitFishToServer }/>
			</div>
		)
	} 
});

module.exports = FishApp;