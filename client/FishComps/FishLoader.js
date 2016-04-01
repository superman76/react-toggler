var React = require('react');

var FishLoader = React.createClass({
  render: function(){
    return (
      <div>
        <i className="fa fa-modx fa-6 fa-spin myFont center-block"></i>
      </div>
      )
  }
});

module.exports = FishLoader;