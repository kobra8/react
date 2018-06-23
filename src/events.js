import React from 'react';
import { CounterComponent } from './counter';
import { HelloComponent } from './hello';
import EventItem from './eventItem';
import FormComponent from './form';
import EventSearch from './eventFilter';
import EventAdd from './eventAdd';
import Loader from './common/loader';
//import events from './data/events.json'
import fetch from 'isomorphic-fetch';

class Events extends React.Component {

    constructor(props) { //Obiekt props zawiera właściwości, które odpowiadają atrybutom przekazanym do komponentu - właściwości props są tylko do odczytu
        super(props); //  Wywołanie konstruktora bazowego i przekazanie mu obiektu props, dzięki czemu w razie potrzeby
        // można się odwołać do props przez this.props 

/*
Każdy komponent React będący klasą dziedziczącą z React.Component może posiadać swój własny, wewnętrzny stan. 
Na stanie komponentu opierają się wszystkie interakcje z interfejsem użytkownika oraz wszystkie dynamiczne zmiany 
wyglądu danego komponentu. Aby zadeklarować stan komponentu wystarczy do właściwości this.state przypisać obiekt. 
Wartości przypisane do poszczególnych właściwości tego obiektu stanowią stan początkowy komponentu.
*/
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
            isLoading: true
        }
/*
Uwaga! Każde wywołanie metody this.setState powoduje ponowne wywołanie metody render komponentu
(oraz metod render komponentów zagnieżdżonych).
*/
    }

    componentDidMount() {
        fetch('http://localhost:3100/events')
            .then(response => response.json())
            .then(events => {
                console.log(events);
                this.setState({ // metoda setState służy do zmiany stanu komponentu
                    events, // Skrócony zapis ES6 zamiast events: events  
                    isLoading: false
                    //Ustawia eventy pobrane z response i isLoading na false 
                })
            })

    }

    //Czyszczenie listy
    clearList = (event) => {
        this.setState({
            events: []
        })
    }

    //Usuwanie eventu
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

    render() { //Metoda render musi być obowiązkowo zaimplementowana w komponncie opartym na klasie
            return ( // musi zawsze zwracać pojedynczy element React (komponent lub generyczny element)
                <div>
                    <h2>Lista spotkań:</h2>
                    <EventSearch searchText={this.state.searchText} onFilterChange={this.onFilterChange.bind(this)} />
                    {/* Loader jest wraperem dla listy eventów */}
                   <Loader isLoading={this.state.isLoading}>
                    <ul>
                        {this.state.events.map((x) => { // Funkcja mapująca eventy i zwracająca tylko te, które się jeszcze nie odbyły
                            let date = Date.parse(x.date); // Pobiera stringa z datą z obiektu eventu i konwertuje na datę
                            //  let date = new Date(x.date) - inny sposób na konwersję daty ze stringa
                            if (date >= Date.now() && x.name.toLowerCase().indexOf(this.state.searchText) > -1) {
                                return <EventItem x={x} key={x.id} clearItem={this.clearItem.bind(this)} />
                            };
                            return null;
                        })
                        }
                    </ul>
                    </Loader>
                    <button onClick={this.clearList}>Clear list</button><br /><br />
                    <h3>Dodaj spotkanie:</h3>
                    {/* Formularz dodawania eventu */}
                    <EventAdd name={this.state.newName} 
                    // Przekazanie stanu komponentu Event do komponentu dziecka EventAdd
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
                    <br />
                    <hr />
                    <br />
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

/*
Metoda this.setState, oprócz obiektu, może przyjmować również funkcję wywołania zwrotnego.

this.setState((prevState, props) => {
  return { text: 'Hello ' + prevState.text + props.name };
});
Przydaje się to wtedy kiedy chcemy miec pewność, że korzystamy z właściwego stanu komponentu.
Z powodów wydajnościowych, operacja zmiany stanu może zostać przez React wykonana asynchronicznie i nie mamy na to wpływu. 
*/