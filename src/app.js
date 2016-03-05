var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var TodoItem = require('./TodoItem.jsx');
var AppBar = require('material-ui/lib/app-bar');
var NewItemFab = require('./NewItemFab.jsx')


injectTapEventPlugin();
ReactDOM.render(
	<div>
		<AppBar showMenuIconButton={false} title="//TODO"></AppBar>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>
		<TodoItem></TodoItem>

		<NewItemFab></NewItemFab>
	</div>,	
	document.getElementById('body')
);