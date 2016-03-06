var React = require('react');
var FloatingActionButton = require('material-ui/lib/floating-action-button');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');


module.exports = React.createClass({
render: function() {
	return	<FloatingActionButton>
				<ContentAdd></ContentAdd>
			</FloatingActionButton>
	}
});