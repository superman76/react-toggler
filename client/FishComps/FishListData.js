var React = require('react');
var Loader = require('./FishLoader');
var FishList = require('./FishList');

var FishListData = React.createClass({

	getInitialState() {
		return {
			allFish: null
		}
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
		return this.state.allFish ? <FishList fishArray={this.state.allFish}/> : <Loader/>
	},
});

module.exports = FishListData;