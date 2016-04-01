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
	render: function() {
		return (
			<div>
				<FishJumbotron />
				<FishBox />
			</div>
		)
	} 
});

module.exports = FishApp;