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
	propTypes: {
		title: React.PropTypes.string,
		text: React.PropTypes.string,
		onButtonClick: React.PropTypes.func
	},
render: function() {
	return	<div style={cardStyle}>
				<Card.Card>
					<Card.CardTitle>{this.props.title}</Card.CardTitle>
					<Card.CardText>{this.props.text}</Card.CardText>
					<Card.CardActions>
						<FlatButton onMouseDown={this.props.onButtonClick} onTouchStart={this.props.onButtonClick} label="Done"></FlatButton>
						<FlatButton onMouseDown={this.props.onButtonClick} onTouchStart={this.props.onButtonClick} label="Can't do it"></FlatButton>
					</Card.CardActions>
				</Card.Card>
			</div>
}
});