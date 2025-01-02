const Pizza = (props) => {
    return React.createElement('h1', {}, props.name);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(Pizza, {name: "shakil's pizza"}),
        React.createElement(Pizza, {name: "cheezy pizza"}),
    ]);
}

const containter = document.getElementById('root');
const root = ReactDOM.createRoot(containter);
root.render(React.createElement(App));