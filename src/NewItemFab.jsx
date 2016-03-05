var React = require('react');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');
var FloatingActionButton = require('material-ui/lib/floating-action-button');

var Card = require('material-ui/lib/card');
var FlatButton = require('material-ui/lib/flat-button');
var TextField = require('material-ui/lib/text-field');

var OnClickOutside = require('react-onclickoutside');

var fabPosition = {
	position: 'fixed',
	right: '30px',
	bottom: '30px'
};

var cardStyle = {
	position: 'fixed',
	right: '30px',
	bottom: '30px',
	width: '400px'
};

	
module.exports = React.createClass({
componentDidMount: function() {
	window.addEventListener('mousedown', this.transform, false);
	this.touched = false;
},
getInitialState: function() {
	return {fab: true};
},
transform: function(e) {
	if(this.touched) {
		console.log("Stopping propagation");
		e.stopPropagation();
	}
	this.setState({fab: this.touched == false});
},
clickDown: function() {
	this.touched = true;
},
clickUp: function() {
	this.touched = false;
},
renderFab: function() {
	return <FloatingActionButton 
			style={fabPosition}
			onMouseDown={this.clickDown}
			onTouchStart={this.clickDown}
			onMouseUp={this.clickUp} 
			onTouchEnd={this.clickUp}>

				<ContentAdd></ContentAdd>
			</FloatingActionButton>
},
renderWizard: function() {
	return  <div style={cardStyle}
				onMouseDown={this.clickDown} 
				onTouchStart={this.clickDown}
				onMouseUp={this.clickUp}
				onTouchEnd={this.clickUp}>

				<Card.Card>
					<Card.CardTitle>
						<TextField hintText="Title"></TextField>
					</Card.CardTitle>
					<Card.CardText>
						<TextField hintText="Task"></TextField>
					</Card.CardText>
					<Card.CardActions>
						<FlatButton label="Lets do this!"></FlatButton>
					</Card.CardActions>
				</Card.Card>
			</div>
},
render: function() {
	return this.state.fab ? this.renderFab() : this.renderWizard();			
}
});