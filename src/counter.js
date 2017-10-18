import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    increaseCounter(id, event) {
        this.setState((event) => {
            console.log(id); //przykład przekazania parametru w zdarzenius
            return { counter: this.state.counter + 1 }
        })
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={(event) => this.increaseCounter(1, event)}>
                    Increase button
                </button>
            </div>
        )
    }
}

export { CounterComponent };