var React = require('react');
var FishFormData = require('./FishFormData');
var FishListData = require('./FishListData');
var FishDetailsData = require('./FishDetailsData');
var EditFishData = require('./EditFishData');

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
			activeComponent: 'fish',
			activeFishId: null,
			}
	},
	getId: function(whichComponentState, id) {
		if(whichComponentState === 'showOne') {
			return this.setState({ activeFishId: id, activeComponent: 'oneFish'})
		} else {
			return this.setState({ activeFishId: id, activeComponent: 'editFish'})
		}
	},
	showComp: function(){
		/* this function renders one component based on activecomp state */
		if(this.state.activeComponent === 'fish') {
			return <FishListData getId={ this.getId }/>

		} else if (this.state.activeComponent === 'form'){
			return <FishFormData toggleActiveComp={ this.toggleActiveComp }/>

		} else if (this.state.activeComponent === 'oneFish'){
			return <FishDetailsData id={ this.state.activeFishId } />
			
		} else if (this.state.activeComponent === 'editFish'){
			return <EditFishData id={ this.state.activeFishId } toggleActiveComp={ this.toggleActiveComp } />
			
		} else {
			throw new Error("Invalid activeComponent ", this.state.activeComponent)
		}
	},
	toggleActiveComp: function(name) {
		this.setState({activeComponent: name})
	},
	render: function() {
		return(
			<div>
				<Toggler toggleActiveComp={ this.toggleActiveComp }/>
				{ this.showComp() }
			</div>
		)
	}
});


module.exports = FishBox;