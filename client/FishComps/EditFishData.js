var React = require('react');

var EditFishData = React.createClass({
	// to finish this do the following.
	// get one fish as data (ajax)
	// pass that state into form
	// use form to show that data


	render: function(){
		return (
			<div>
				<h3> You have found EditFishData! </h3>
				<p> Id is: { this.props.id } </p>
			</div>
		)
	}
});

module.exports = EditFishData;