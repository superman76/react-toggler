var React = require('react');

var sectionLinks = ['welcome','cookies', 'fish', 'bears', 'beer'];

var NavBar = (props) => {
	var navbarLinks = sectionLinks.map(sectionLink => {
		if(props.activeComponent === sectionLink){
			return (
				<li className="nav-item" key={ sectionLink }>
				    <span>{ sectionLink }</span>
				</li>
			)
		}
		return (
			<li className="nav-item" key={ sectionLink }>
			    <a className="nav-link"
			       onClick={() => props.setActiveComponent(sectionLink)} >{ sectionLink }</a>
			</li>
		)
	});
	return (
		<nav className="navbar navbar-light bg-faded">
		  <a className="navbar-brand" href="#">React-Toggler</a>
		  <ul className="nav navbar-nav">
		    { navbarLinks }
		  </ul>
		</nav>
	)
};

NavBar.propTypes = {
	setActiveComponent: React.PropTypes.func.isRequired,
	activeComponent: React.PropTypes.string.isRequired
};

module.exports = NavBar;