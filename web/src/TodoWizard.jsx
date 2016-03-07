var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('material-ui/lib/card');
var FlatButton = require('material-ui/lib/flat-button');
var TextField = require('material-ui/lib/text-field');

module.exports = React.createClass({
	propTypes: {
		onElementBuilt: React.PropTypes.func
	},
	getInitialState: function() {
		return {title: "", content: "", error: ""};
	},
	build: function(e) {
		this.props.onElementBuilt(this.state.title, this.state.content);
		this.replaceState(this.getInitialState());
		if(e) {
			e.preventDefault();
		}
		console.log(ReactDOM.findDOMNode(this.refs.title));
		ReactDOM.findDOMNode(this.refs.title).getElementsByTagName('input')[0].focus();
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
		return	<div className='reactive-card'>
					<Card.Card>
						<form onSubmit={this.build}>
							<Card.CardTitle>
								<TextField ref="title" hintText="Title" value={this.state.title} onChange={this.updateTitle}></TextField>
							</Card.CardTitle>
							<Card.CardText>
								<TextField hintText="Task"  value={this.state.content} onChange={this.updateContent} errorText={this.state.error}></TextField>
							</Card.CardText>
							<Card.CardActions>
								<FlatButton type="submit"
								 onMouseDown={this.build} 
								 onTouchStart={this.build}
								 disabled={!(this.state.content.length > 0 && this.state.error.length == 0)}
								 label="Lets do this!">
								</FlatButton>
							</Card.CardActions>
						</form>
					</Card.Card>
				</div>
	}
});