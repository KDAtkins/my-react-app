console.log("App.js is running");

// JSX = Javascript XML
const app = {
	title: 'Indecision App',
	subtitle: 'Subtitle for Indecision App',
	options: ['1', '2']
};

function getOptions(options){
	if(options.length > 0){
		return 'Here are your options';
	} else {
		return 'No options'
	}
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{getOptions(app.options)}</p>
		<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ol>
	</div>
);

const user = {
	name: 'Kevin D. Atkins',
	age: 32,
	location: 'San Diego'
};

function getLocation(location) {
	if(location){
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}

const myTemplate = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);