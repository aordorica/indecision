class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            visible: false,
            text: 'This is a Hidden message'
        }
    }

    handleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        } )
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{app.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>{this.state.text}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))



// console.log("This is the Build-it app running!")
// const app = {
//   Text: 'This is a hidden message',
//   visible: false,
// };

// const appRoot = document.getElementById("app")

// const makeVisible = (e) => {
//     app.visible = !app.visible
//     renderBuild()
// }

// const renderBuild = () => {

//     const builtItTemplate = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={makeVisible}>{app.visible ? 'Hide Details' : 'Show Details'}</button>
//             {app.visible && <p>{app.Text}</p>}
//         </div> 
//     )
//     ReactDOM.render(builtItTemplate, appRoot);
// }

// renderBuild();