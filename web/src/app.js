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
		var that = this;
		return function() { 
			that.setState({
				todos: that.state.todos.filter(function(f) {
					return f != item;
				})
			});

			this.restApi.remove('/tasks', {
				data: item
			});
		}
	},
	onElementBuilt: function(title, content){
		var todo = new Todo(title, content);
		this.setState({
			todos: this.state.todos.concat(todo)
		});

		if(this.restApi) {
			this.restApi.create('/tasks', {
				data: todo
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