jest.dontMock('../src/TodoItem.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe('sanity check', function(){

	var TodoItem = require('../src/TodoItem.jsx');
	it('contains some text', function() {
		var documentWithTodo = TestUtils.renderIntoDocument(<TodoItem></TodoItem>);
		expect(ReactDOM.findDOMNode(documentWithTodo).textContent).toEqual("Some content");
	});
});
