var React = require('react');

var FishCard = React.createClass({
	render: function() {
		return (
			<div className="card">
			  <img className="card-img-top img" src={ this.props.img } alt="Card image cap"/>
			  <div className="card-block">
			    <h4 className="card-title">{ this.props.name }</h4>
			    <a href="#" className="btn btn-primary">View Single Fish</a>
			  </div>
			</div>
		)
	}
});

module.exports = FishCard;