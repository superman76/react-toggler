var React = require('react');
var FishCard = require('./FishCard');

function FishList(props){
	// map through  our data and pass it to fish card
	var allFish = props.fishArray.map(item =>{
		return (
			<FishCard 
			getId={ props.getId }
			id={ item._id}
			key={ item._id }
			name={ item.name }
			color= { item.color }
			people_eater= { item.people_eater }
			length= { item.length }
			img= { item.img } />
		);
	});

	return (
		<div className="container myContainer fish-flex">
		  { allFish }
		</div>
	)
};

FishList.propTypes = {
	fishArray: React.PropTypes.array.isRequired
};

module.exports = FishList;