var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var TodoItem = require('./TodoItem.jsx');
var AppBar = require('material-ui/lib/app-bar');
var NewItemFab = require('./NewItemFab.jsx')


injectTapEventPlugin();

var Todo = function(title, content) {
	return {
		title: title,
		content: content
	};
};

var App = React.createClass({
	removeTodo: function(item) {
		var that = this;
		return function() { 
			that.setState({
				todos: that.state.todos.filter(function(f) {
					return f != item;
				})
			})
		}
	},
	onElementBuilt: function(title, content){
		this.setState({
			todos: this.state.todos.concat(new Todo(title, content))
		});
	},
	getInitialState: function() {
		return {
			todos: [new Todo("Task #1", "Sign in with google"), new Todo("Task #2", "Sign in with facebook")]
		}
	},
	render: function(){
		return	<div>
					<AppBar showMenuIconButton={false} title="//TODO"></AppBar>
					{this.state.todos.map(function(t) {
						return <TodoItem title={t.title} text={t.content} onButtonClick={this.removeTodo(t)}></TodoItem>
					}, this)}
					
					<NewItemFab onElementBuilt={this.onElementBuilt}></NewItemFab>
				</div>
	}
})

ReactDOM.render(
	<App></App>,	
	document.getElementById('body')
);