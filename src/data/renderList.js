import React from 'react';
import PropTypes from 'prop-types';
import meetings from './events.json'
import { CounterComponent } from './counter';
import { HelloComponent } from './hello';
import Event from './item';

//Funkcja pobierająca wydarzenia
//props jako parametr stusujemy przy zamianie fukncji w komponent
class Meetings extends React.Component {
    //Kontrola typu, jeżeli dane będą przkazywane w innym komponencie: 
    // static propTypes = {
    //     meetings: PropTypes.array.isRequired
    // };
    constructor(props) {
        super(props);
        this.state = {
            meetings: []
        }
    }

    componentDidMount() {
        this.setState({
            meetings 
            //Powyżej uzyto ES6, która skraca zapis meetings: meetings
        })
    }
    clearList = (event) => {
        this.setState({
          meetings: []  
        })
    }

    clearItem = (id, event) => {
        this.setState({
            meetings: this.state.meetings.filter(x =>  x.id !== id )
        })
        console.log(this.state.meetings);
    }

    render() {
        return (
            <div>
                <h2>Lista spotkań:</h2>
                <ul>
                    {this.state.meetings.map((x) => {
                        //  let date = new Date(x.date) - inny sposób na konwersję daty ze stringa
                        let date = Date.parse(x.date);
                        if (date >= Date.now()) {
                            return   <Event x={x} clearItem={this.clearItem.bind(this)}/>
                        };
                        return null;
                    })
                    }
                </ul>
                <button onClick={this.clearList}>Clear list</button>
                <CounterComponent />
                <HelloComponent />
            </div>
        );
    }
}

// Drugi sposób rozwiązania zadania: Wyświetl spotkania z dat przyszłych  
// <ul>
//     {meetings.filter(y => Date.parse(y.date) >= Date.now()).map((x) => {
//         return <li key={x.id}>
//             <strong>{x.name}</strong><br />
//             Gdzie: {x.place} <br />
//             Kiedy: {x.date} {x.time}</li>;
//     })
//     }
// </ul>

export { Meetings };