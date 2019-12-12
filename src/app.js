console.log("App.js is running");

// JSX = Javascript XML
var template = <h1>Does this change for real?</h1>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);