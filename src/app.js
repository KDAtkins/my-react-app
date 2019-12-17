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

var myTemplate = (
	<div>
		<h1>Kevin Atkins</h1>
		<p>Age: 32</p>
		<p>Location: San Diego</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(myTemplate, appRoot);