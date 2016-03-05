var React = require('react');
var Card = require('material-ui/lib/card');
var FlatButton = require('material-ui/lib/flat-button');

var width = 400;
var cardStyle = {
	width: width,
	margin: "auto",
	paddingTop: "20"
}

var cardHeight = {
	height: width / 1.618
}

module.exports = React.createClass({
render: function() {
return	<div style={cardStyle}>
			<Card.Card>
				<Card.CardTitle>
					Task #1
				</Card.CardTitle>
				<Card.CardText>Sign in with Google</Card.CardText>
				<Card.CardActions>
					<FlatButton label="Done"></FlatButton>

					<FlatButton label="Can't do it"></FlatButton>
				</Card.CardActions>
			</Card.Card>
		</div>
}
});