var React = require('react');
var FishLoader = require('./FishLoader');
var FishDetails = require('./FishDetails');

var FishDetailsData = React.createClass({
	getInitialState: function() {
		return {
			oneFish: null
		}
	},
	loadOneFishFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/fish/one_fish/' + this.props.id,
			method: 'GET',
		}).done(function(data){
			self.setState({oneFish: data})
		})
	},
	componentDidMount: function() {
		this.loadOneFishFromServer();
	},
	render: function() {
		return this.state.oneFish ? <FishDetails oneFish={ this.state.oneFish }/> : <FishLoader />
	}
});

module.exports = FishDetailsData;