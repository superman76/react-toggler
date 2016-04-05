var React = require('react');

function FishCard(props){
	return (
		<div className="card">
		  <img className="card-img-top img" src={ props.img } alt="Card image cap"/>
		  <div className="card-block">
		    <h4 className="card-title">{ props.name }</h4>
		    <button onClick={props.getId.bind(null, 'showOne', props.id)} className="btn btn-primary">View</button>
		    <button onClick={props.getId.bind(null, 'editOne', props.id)} className="btn btn-primary">Edit</button>
		    <button onClick={props.deleteFish.bind(null, props.id)} className="btn btn-primary">Delete</button>
		  </div>
		</div>
	)	
};

module.exports = FishCard;