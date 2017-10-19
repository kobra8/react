import React from 'react';
import { CounterComponent } from './counter';
import { HelloComponent } from './hello';
import EventItem from './eventItem';
import FormComponent from './form';
import EventSearch from './eventFilter';
import EventAdd from './eventAdd';
//import events from './data/events.json'
import fetch from 'isomorphic-fetch';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            searchText: '',
            newName: '',
            newNameValid: false,
            newPlace: '',
            newPlaceValid: false,
            newDate: '',
            newDateValid: false,
            newTime: '',
            newTimeValid: false,
        }
    }

    componentDidMount() {
        fetch('http://frontendinsights.com/events.json')
            .then(response => response.json())
            .then(events => {
                this.setState({
                    events
                 // Skrócony zapis ES6 zamiast events: events   
                })
            })
    }
    clearList = (event) => {
        this.setState({
            events: []
        })
    }

    clearItem = (id, event) => {
        this.setState({
            events: this.state.events.filter(x => x.id !== id)
        })
    }

    onFilterChange(event) {
        event.preventDefault();
        const newText = event.currentTarget.value;
        this.setState({
            searchText: newText
        })
    }
    //Funkcja onFormChange obsługuje wszystkie inputy
    onFormChange(input, event) {
        const value = event.currentTarget.value;
        this.setState({
            [input]: value,
            [input + 'Valid']: value.length > 0
            //Powyżej użyto ES6 [dowolny string] staje się nazwą właściwości
        })
    }

    onEventAdd(event) {
        event.preventDefault();

        const {
          events,
            newName,
            newPlace,
            newDate,
            newTime,
            newNameValid,
            newPlaceValid,
            newDateValid,
            newTimeValid,
        } = this.state;

        const maxId = Math.max(...events.map(item => item.id));

        if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
            events.push({
                id: maxId + 1,
                name: newName,
                place: newPlace,
                date: newDate,
                time: newTime
            });

            this.setState({
                events
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Lista spotkań:</h2>
                <EventSearch searchText={this.state.searchText} onFilterChange={this.onFilterChange.bind(this)} />
                <ul>
                    {this.state.events.map((x) => {
                        //  let date = new Date(x.date) - inny sposób na konwersję daty ze stringa
                        let date = Date.parse(x.date);
                        if (date >= Date.now() && x.name.toLowerCase().indexOf(this.state.searchText) > -1) {
                            return <EventItem x={x} clearItem={this.clearItem.bind(this)} />
                        };
                        return null;
                    })
                    }
                </ul>
                <button onClick={this.clearList}>Clear list</button><br /><br />
                <h3>Dodaj spotkanie:</h3>
                <EventAdd name={this.state.newName}
                    newNameValid={this.state.newNameValid}
                    place={this.state.newPlace}
                    newPlaceValid={this.state.newPlaceValid}
                    date={this.state.newDate}
                    newDateValid={this.state.newDateValid}
                    time={this.state.newTime}
                    newTimeValid={this.state.newTimeValid}

                    onFormChange={this.onFormChange.bind(this)}
                    onFormSubmit={this.onEventAdd.bind(this)}
                />
                <br /><hr /> <br />
                <CounterComponent />
                <HelloComponent /><br />
                <FormComponent />
            </div>
        );
    }
}

// Drugi sposób rozwiązania zadania: Wyświetl spotkania z dat przyszłych  
// <ul>
//     {events.filter(y => Date.parse(y.date) >= Date.now()).map((x) => {
//         return <li key={x.id}>
//             <strong>{x.name}</strong><br />
//             Gdzie: {x.place} <br />
//             Kiedy: {x.date} {x.time}</li>;
//     })
//     }
// </ul>

export { Events };