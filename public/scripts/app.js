'use strict';

console.log("App.js is running");

// // JSX = Javascript XML
// var template = (
// 	<div>
// 		<h1>Indecision App</h1>
// 		<p>This is some info</p>
// 		<ol>
// 			<li>Item one</li>
// 			<li>Item two</li>
// 		</ol>
// 	</div>
// );

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

ReactDOM.render(myTemplate, appRoot);
