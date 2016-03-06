var React = require('react');

var PlusFab = require('./PlusFab.jsx');
var TodoWizard = require('./TodoWizard.jsx');

var position = {
	position: 'fixed',
	right: '30px',
	bottom: '30px'
};

	
module.exports = React.createClass({
propTypes: {
	onElementBuilt: React.PropTypes.func
},
componentDidMount: function() {
	window.addEventListener('mousedown', this.transform, false);
	this.touched = false;
},
getInitialState: function() {
	return {fab: true};
},
transform: function(e) {
	console.log("transform");
	if(this.touched) {
		e.stopPropagation();
	}
	this.setState({fab: this.touched == false});
},
clickDown: function() {
	console.log("clickDown");
	this.touched = true;
},
clickUp: function() {
	this.touched = false;
},
render: function() {
	var Content = this.state.fab ? PlusFab : TodoWizard;
	return  <div onMouseDown={this.clickDown} 
				onTouchStart={this.clickDown}
				onMouseUp={this.clickUp}
				onTouchEnd={this.clickUp}
				style={position}>

				<Content onElementBuilt={this.props.onElementBuilt}></Content>
			 </div> 			
	}
});