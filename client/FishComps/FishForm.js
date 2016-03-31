var React = require('react');

var FishForm = React.createClass({
	getInitialState: function() {
		return {
			fishName: null,
			peopleEater: null,
			color: null,
			length: null,
			img: null
		}
	},
	onNameChange: function(event) {
		this.setState({ fishName: event.target.value })
	},
	onColorChange: function(event) {
		this.setState({ color: event.target.value })
	},
	onLengthChange: function(event) {
		this.setState({ length: event.target.value })
	},
	onImgChange: function(event) {
		this.setState({ img: event.target.value })
	},
	peopleEaterChange: function(event) {
		this.setState({ peopleEater: event.target.value })
	},
	handleFormSubmit: function(e) {
		e.preventDefault();
		var fishData = {
			name: this.state.fishName.trim(),
			color: this.state.color.trim(),
			length: this.state.length.trim(),
			img: this.state.img,
			people_eater: this.state.peopleEater
		};
		this.props.submitFishToServer(fishData);

		this.setState({name: '', color: '', length: '', img: ''});
	},
	render: function() {
		return (
			<div>
				<h3> Net a New Fish </h3>
				<form onSubmit={ this.handleFormSubmit } id="fishForm">
				  <fieldset className="form-group">
				    <label>Name</label>
				    <input onChange={this.onNameChange} value={ this.state.fishName} type="text" className="form-control"/>
				  </fieldset>

				  <fieldset className="form-group">
				    <label>Color</label>
				    <input onChange={this.onColorChange} value={ this.state.fishColor} type="text" className="form-control"/>
				  </fieldset>

				  <fieldset className="form-group">
				    <label>Length</label>
				    <input onChange={this.onLengthChange} value={ this.state.fishLength} type="text" className="form-control"/>
				  </fieldset>

				  <fieldset className="form-group">
				    <label>Image</label>
				    <input onChange={this.onImgChange} value={ this.state.fishImg} type="text" className="form-control"/>
				  </fieldset>

				  <fieldset className="form-group">
				    <label htmlFor='exampleSelect1'>Man Eater?</label>
				    <select onChange={ this.peopleEaterChange } className="form-control">
				    	<option value={ "hello" }>Start</option>
				    	<option value={ true }>Yes</option>
						<option value={ false }>No</option>
					</select>
				  </fieldset>
				  <button className="btn btn-success-outline" type="submit">Submit</button>
				 </form>
			</div>

		)
	}
});	

module.exports = FishForm;