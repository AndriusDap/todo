jest.dontMock('../src/TodoItem.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe('sanity check', function(){

	var TodoItem = require('../src/TodoItem.jsx');
	it('contains title of the application', function() {
		var documentWithTodo = TestUtils.renderIntoDocument(<TodoItem></TodoItem>);
		expect(ReactDOM.findDOMNode(documentWithTodo).textContent).toEqual("Todo:");
	});
});
