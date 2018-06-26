import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    increaseCounter(id, event) {
        this.setState((event) => {
            console.log(id); //przykład przekazania parametru w zdarzeniu
            return { counter: this.state.counter + 1 }
        })
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={(event) => this.increaseCounter(1, event)}> 
                {/* event przekazujemy zawsze na końcu wszystkich parametrów funkcji */}
                    Increase button
                </button>
            </div>
        )
    }
}

export { CounterComponent };