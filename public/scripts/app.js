'use strict';

console.log("App.js is running");

// JSX = Javascript XML
var app = {
	title: 'Indecision App',
	subtitle: 'Subtitle for Indecision App',
	options: ['1', '2']
};

function getOptions(options) {
	if (options.length > 0) {
		return 'Here are your options';
	} else {
		return 'No options';
	}
}

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		getOptions(app.options)
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options' : 'No options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item 1'
		),
		React.createElement(
			'li',
			null,
			'Item 2'
		),
		React.createElement(
			'li',
			null,
			'Item 3'
		)
	)
);

var user = {
	name: 'Kevin D. Atkins',
	age: 32,
	location: 'San Diego'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	} else {
		return undefined;
	}
}

var myTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};

var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'Reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
