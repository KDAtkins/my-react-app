console.log("App.js is running");

var indexPage = {
	title: 'Indecision App',
	subtitle: 'Some text for the Index Page'
};

// JSX = Javascript XML
var template = (
	<div>
		<h1>{indexPage.title}</h1>
		<p>{indexPage.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var user = {
	name: 'Kevin D Atkins',
	age: 32,
	location: 'San Diego'
};

var myTemplate = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);