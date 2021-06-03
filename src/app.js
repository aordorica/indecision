class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.state = {
            options: ["Thing One", "Thing Two", "Thing four"],
        };
    }

    handleDeleteAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * app.options.length);
        alert(app.options[randomNum]);
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your fate in the hands of a computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAll={this.handleDeleteAll}
                />
                <AddOptions/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Options extends React.Component {
        render() {
        return (
            <div className='Options'>
                <button onClick={this.props.handleDeleteAll}>Remove All</button>
                {this.props.options.map(option => <Option key={option} optionText={option}/>)}
            </div>
        )   
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option)
            e.target.elements.option.value=''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
        <div>
            <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))