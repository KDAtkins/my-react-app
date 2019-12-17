'use strict';

console.log("App.js is running");

var indexPage = {
	title: 'Indecision App',
	subtitle: 'Some text for the Index Page'
};

// JSX = Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		indexPage.title
	),
	React.createElement(
		'p',
		null,
		indexPage.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var user = {
	name: 'Kevin D Atkins',
	age: 32,
	location: 'San Diego'
};

var myTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
