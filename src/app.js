class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteAll = this.handleDeleteAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options,
        };
    }

    handleDeleteAll() {
        this.setState(() => ({options: []}))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid option to add to the list'
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists, please enter another option'
        }

        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }
    render() {
        const subtitle = 'Put your fate in the hands of a computer'
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAll={this.handleDeleteAll}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Options = (props) => {
    return (
        <div className="Options">
        <button onClick={props.handleDeleteAll}>Remove All</button>
        {props.options.map((option) => (
            <Option key={option} optionText={option} />
        ))}
        </div>
    );
}

const Option = (props) => {
    return <div>{props.optionText}</div>;
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    )
}


class AddOptions extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))
        e.target.elements.option.value = "";
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))