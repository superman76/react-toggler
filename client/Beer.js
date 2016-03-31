var React = require('react');

var Beer = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
			  <h1 className="display-3">Hops for You!</h1>
			  <p className="lead">I'll drink to that.</p>
			  <hr className="m-y-2"/>
			  <p></p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="" role="button">BEER Button</a>
			  </p>
			</div>
			)
	}
})

module.exports = Beer;