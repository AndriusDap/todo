var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var TodoItem = require('./TodoItem.jsx');
var AppBar = require('material-ui/lib/app-bar');
var Card = require('material-ui/lib/card');


var cardStyle = {
	width: "400px", 
	margin: "auto",
	padding: "20"
}
injectTapEventPlugin();
ReactDOM.render(
	<div>
		<AppBar showMenuIconButton={false} title="Todo"></AppBar>
		<div style={cardStyle}>
		<Card.Card><Card.CardText>Some Text</Card.CardText></Card.Card>
		</div>
	</div>,	
	document.getElementById('body')
);