class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                hello {this.props.name}
            </div>
        )
    }
}

// ReactDOM 渲染
const domContainer = document.getElementById('hello-example');
ReactDOM.render(<HelloMessage name={'jsx'}/>, domContainer);
