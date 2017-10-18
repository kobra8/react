import React from 'react';
import Item from './click';

class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello!',
            fire: 'Try'
        };
        // bindowanie  w konstruktorze
        //  this.onLinkClicked = this.onLinkClicked.bind(this); 
    }
    //funkcje strzałkowe automatycznie bindują do this
    onLinkClicked = (event) => {
        event.preventDefault();
        this.setState({ text: 'Goodbye!' })
    }

    onItemClicked(param, event) {
        event.preventDefault();
        this.setState({fire: 'You clicked!'});
        console.log(param);
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <a href="/" onClick={this.onLinkClicked}>
                    Say Goodbye!
            </a><br />
                <p>{this.state.fire}</p>
                <Item onItemClicked={this.onItemClicked.bind(this)} />
            </div>
        );   // this.onLinkClicked.bind(this) -> bindowanie on-line
    }
}


export { HelloComponent };