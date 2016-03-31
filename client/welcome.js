var React = require('react');

var Welcome = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
			  <h1 className="display-3">Absitively</h1>
			  <p className="lead">Posilutely</p>
			  <hr className="m-y-2"/>
			  <p></p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="https://dncache-mauganscorp.netdna-ssl.com/thumbseg/30/30686-bigthumbnail.jpg" role="button">Portal to the Abyss</a>
			  </p>
			</div>
			)
	}
})

module.exports = Welcome;