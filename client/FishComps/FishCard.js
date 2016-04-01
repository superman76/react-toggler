var React = require('react');

function FishCard(props){
	return (
		<div className="card">
		  <img className="card-img-top img" src={ props.img } alt="Card image cap"/>
		  <div className="card-block">
		    <h4 className="card-title">{ props.name }</h4>
		    <button onClick={props.getId.bind(null, props.id)} className="btn btn-primary">View Single Fish</button>
		  </div>
		</div>
	)	
};

module.exports = FishCard;