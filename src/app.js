console.log("This app is running!");


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp();
    }
}

const renderApp = () => {

    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your Options' : 'No Options Available'}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name= "option"/>
            <button>Add Button</button>
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot)

}


let appRoot = document.getElementById("app");
renderApp();