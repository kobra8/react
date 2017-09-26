import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.setState((prevState, props) => {
                    return { counter: this.state.counter + 1 };
                })}>
                    Licznik + 1
                </button>
            </div>
        )
    }
}

export { CounterComponent };