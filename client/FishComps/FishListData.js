var React = require('react');
var Loader = require('./FishLoader');
var FishList = require('./FishList');

var FishListData = React.createClass({

	getInitialState() {
		return {
			allFish: null
		}
	},
	deleteFish(id) {
		console.log(id);
	},
	loadAllFishFromServer() {	
		$.ajax({
			url: '/api/fish',
			method: 'GET'
		}).done( data => this.setState({ allFish: data}) );
	},

	componentDidMount() {
		this.loadAllFishFromServer();
	},
	render() {
		return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={ this.props.getId } deleteFish={this.deleteFish} /> : <FishLoader/>
	},
});

module.exports = FishListData;