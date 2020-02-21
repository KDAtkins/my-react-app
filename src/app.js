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


let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById('app');


const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={ addOne }>+1</button>
			<button onClick={ minusOne }>-1</button>
			<button onClick={ reset }>Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();