var React = require('react');
var FishCard = require('./FishCard');

function FishList(props){
	// map through  our data and pass it to fish card
	var allFish = props.fishArray.map(fish =>{
		return (
			<FishCard 
			key={ fish._id }
			name={ fish.name }
			color= { fish.color }
			people_eater= { fish.people_eater }
			length= { fish.length }
			img= { fish.img } />
		);
	});

	return (
		<div className="fish-flex">
		  { allFish }
		</div>
	)
};

FishList.propTypes = {
	fishArray: React.PropTypes.array.isRequired
};

module.exports = FishList;