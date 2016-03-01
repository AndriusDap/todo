var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var TodoItem = require('./TodoItem.jsx');



injectTapEventPlugin();
ReactDOM.render(
	<TodoItem></TodoItem>,
	document.getElementById('body')
);