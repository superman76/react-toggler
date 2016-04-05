var React = require('react');

function FishForm(props){
	// this is a "pure" rendering method
	return (
		<div>
			<h3> Net a New Fish </h3>
			<form onSubmit={ props.submitFishToServer } id="fishForm">
			  <fieldset className="form-group">
			    <label>Name</label>
			    <input onChange={ props.onNameChange } value={ props.fishName } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label>Color</label>
			    <input onChange={ props.onColorChange } value={ props.fishColor } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label>Length</label>
			    <input onChange={  props.onLengthChange } value={ props.fishLength } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label>Image</label>
			    <input onChange={props.onImgChange } value={ props.fishImg } type="text" className="form-control"/>
			  </fieldset>

			  <fieldset className="form-group">
			    <label htmlFor='exampleSelect1'>Man Eater?</label>
			    <select onChange={ props.peopleEaterChange } className="form-control">
			    	<option>Select Something</option>
			    	<option value={ true }>Yes</option>
					<option value={ false }>No</option>
				</select>
			  </fieldset>
			  <button className="btn btn-success-outline" type="submit">Submit</button>
			 </form>
		</div>
	)
}	

module.exports = FishForm;