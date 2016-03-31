var React = require('react');
var FishCard = require('./FishCard');

var FishList = React.createClass({
	render: function() {
		var allFish = this.props.fishArray.map(function(item){
			return (
				<FishCard 
				name={ item.name }
				color= { item.color }
				people_eater= { item.people_eater }
				length= { item.length }
				img= { item.img } />
			);
		})
		return (
			<div className="fish-flex">
			  { allFish }
			</div>
		)
	}
});

module.exports = FishList;