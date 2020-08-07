class HelloMessage extends React.Component {
    render() {
        return (
            React.createElement(
                'div',
                null,
                'hello ',
                this.props.name
            )
        )
    }
}

// ReactDOM 渲染
const domContainer = document.getElementById('hello-example');
ReactDOM.render(React.createElement(HelloMessage, {name: 'world'}), domContainer);
