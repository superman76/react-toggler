var React = require('react');
var FishList = require('./FishList');
var FishForm = require('./FishForm');

// FishBox
// 	  Toggler
// 	  FishList
// 		 FishCard
// 	  FishForm
var Toggler = React.createClass({
	render: function() {
		return (
	      <div className="container">
	        <div className="btn-group" data-toggle="buttons">
	            <button onClick={this.props.toggleActiveComp.bind(null, 'fish')}> Fish Display </button>
	            <button onClick={this.props.toggleActiveComp.bind(null, 'form')}> Modify Fish </button>
	        </div>
	      </div>
		)
	}
})

var FishBox = React.createClass({
	getInitialState: function() {
		return {
			activeComponent: 'fish'
			}
	},
	showComp: function(){
		if(this.state.activeComponent === 'fish') {
			return <FishList fishArray={ this.props.fishArray }/>
		} else if (this.state.activeComponent === 'form'){
			return <FishForm submitFishToServer={ this.props.submitFishToServer }/>
		} else {
			return <FishList fishArray={ this.props.fishArray }/>
		}
	},
	toggleActiveComp: function(name) {
		this.setState({activeComponent: name})
	},
	render: function() {
		console.log("LANDED THE FISH", this.props.fishArray);
		return(
			<div className="container myContainer">
				<Toggler toggleActiveComp={ this.toggleActiveComp }/>
				{ this.showComp() }
			</div>
		)
	}
})


module.exports = FishBox;