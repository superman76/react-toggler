var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var Welcome = require('./Welcome');
var Cookies = require('./Cookies');
var Bears = require('./Bears');
var FishApp = require('./FishApp');
var Beer = require('./Beer');

require('./stylesheets/main.scss')


var App = React.createClass({
  
  getInitialState: function(){
  	return {
  		activeComponent: 'welcome'
  	}
  },

  setActiveComponent: function(componentName){
  	console.log("Found Comp: ", componentName);
  	this.setState({
  		activeComponent: componentName
  	})
  },

  showWhichComponent: function(){
	  switch(this.state.activeComponent) {
		case 'welcome':
		    return <Welcome/>
		        break;
		    case 'cookies':
		        return <Cookies/>
		        break;
		    case 'bears':
		        return <Bears/>
		        break;
		    case 'fish':
		        return <FishApp/>
		        break;
		    case 'beer':
		        return <Beer/>
		        break;		        		    
		    default:
		        return <Welcome/>
		}
  }, 

  render: function() {
    return (
      <div>
      	<NavBar activeComponent={ this.state.activeComponent } setActiveComponent={ this.setActiveComponent }/>
     	<h1>Uninaninonimity</h1>
     		<div>
     		 { this.showWhichComponent() }
     		</div>
      	<Footer/>      
      </div>
      )
  }
})

ReactDom.render(
  <App />, document.getElementById('app')
);
