var React = require('react');

var Card = require('material-ui/lib/card');
var FlatButton = require('material-ui/lib/flat-button');
var TextField = require('material-ui/lib/text-field');

var cardStyle = {
	width: '400px'
};

module.exports = React.createClass({
render: function() {
	return	<div style={cardStyle}>
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
	}
});