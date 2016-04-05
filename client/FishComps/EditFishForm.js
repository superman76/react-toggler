var React = require('react');

function EditFishForm(props) {
	return (
		<div className="container myContainer">
			<h3> Edit a Fish </h3>
			<form onSubmit={ props.onFishEditSubmit }>
			  <fieldset className="form-group">
			    <label>Name</label>
			    <input onChange={ props.onNameChange } value={ props.name } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label>Color</label>
			    <input onChange={ props.onColorChange } value={ props.color } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label>Length</label>
			    <input onChange={ props.onLengthChange } value={ props.length } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label>Image</label>
			    <input onChange={ props.onImgChange } value={ props.img } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label htmlFor='exampleSelect1'>Man Eater?</label>
			    <select onChange={ props.peopleEaterChange } value={ props.people_eater } className="form-control">
			    	<option value={ true }>Yes</option>
					<option value={ false }>No</option>
				</select>
			  </fieldset>
			  <button className="btn btn-success-outline" type="submit">Submit</button>
			</form>
		</div>
	)
};

module.exports = EditFishForm;