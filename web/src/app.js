var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var TodoItem = require('./TodoItem.jsx');
var AppBar = require('material-ui/lib/app-bar');
var NewItemFab = require('./NewItemFab.jsx');
var SignInButton = require('./SignInButton.jsx');
var rest = require('rest-js');


injectTapEventPlugin();

var Todo = function(title, content) {
	return {
		title: title,
		content: content
	};
};

var App = React.createClass({
	removeTodo: function(item) {
		var self = this;
		return function() { 
			var filtered = self.state.todos.filter(function(f) {
				return f != item;
			});

			self.setState({
				todos: filtered
			});

			if(self.restApi) {
				self.restApi.post('/tasks', {
					data: filtered
				});
			}
		}
	},
	onElementBuilt: function(title, content){
		var todos = this.state.todos.concat(new Todo(title, content));
		this.setState({
			todos: todos
		});

		if(this.restApi) {
			this.restApi.post('/tasks', {
				data: todos
			});
		}
	},
	getInitialState: function() {
		return {
			todos: [new Todo("Task #1", "Sign in with google")],
			mounted: false
		}
	},
	onTokenReceived: function(token) {
		this.restApi = rest('/api', {
			crossDomain: false,
			defaultFormat: '',
			defaultDataType: 'json',
			defaultParams: {token: token}
		});

		if(this.state.mounted) {
			this.loadTasks();
		}
	},
	setTasks: function(request, todos) {
		this.setState({todos: todos});
	},
	loadTasks: function() {
		this.restApi.read('/tasks', {}, this.setTasks);
	},
	componentDidMount: function() {
		this.setState({mounted: true});

		if(this.restApi) {
			this.loadTasks();
		}
	},
	render: function(){
		var PaddedSignIn =	<div style={{marginTop: 5}}>
								<SignInButton onTokenReceived={this.onTokenReceived} />
							</div>
		return	<div>
					<AppBar showMenuIconButton={false} title="//TODO" iconElementRight={PaddedSignIn}></AppBar>
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