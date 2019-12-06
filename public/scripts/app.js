console.log("App.js is running");

// JSX = Javascript XML
// var template = <p>This JSX from app.js!</p>;

var template = React.createElement(
	"h1",
	{id: "someID"},
	"Something New!"
)
;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);