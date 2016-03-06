var React = require('react');

var Card = require('material-ui/lib/card');
var FlatButton = require('material-ui/lib/flat-button');
var TextField = require('material-ui/lib/text-field');

var cardStyle = {
	width: '400px'
};

module.exports = React.createClass({
	propTypes: {
		onElementBuilt: React.PropTypes.func
	},
getInitialState: function() {
	return {title: "", content: "", error: ""};
},
build: function() {
	this.props.onElementBuilt(this.state.title, this.state.content);
	this.replaceState(this.getInitialState());
},
updateTitle: function(event) {
	this.setState({title: event.target.value});
},
updateContent: function(event) {
	var content = event.target.value;
	var error = "";
	if(content.length == 0){
		error = "Task is required";
	}
	this.setState({content: content, error: error});
},
render: function() {
	return	<div style={cardStyle}>
				<Card.Card>
					<Card.CardTitle>
						<TextField hintText="Title" value={this.state.title} onChange={this.updateTitle}></TextField>
					</Card.CardTitle>
					<Card.CardText>
						<TextField hintText="Task"  value={this.state.content} onChange={this.updateContent} errorText={this.state.error}></TextField>
					</Card.CardText>
					<Card.CardActions>
						<FlatButton onMouseDown={this.build} onTouchStart={this.build} disabled={!(this.state.content.length > 0 && this.state.error.length == 0)} label="Lets do this!"></FlatButton>
					</Card.CardActions>
				</Card.Card>
			</div>
	}
});