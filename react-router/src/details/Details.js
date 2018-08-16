import React, { Component } from 'react';
import events from '../data/events.json';
import NotFound from '../not-found/NotFound';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
  }

  getEvent(){
    // React przekazuje pewne dane o routingu poprzez obiekt props - do dyspozycji 3 obiekty: match, location, history
    const id = this.props.match.params.eventId; // match z parametru w routingu wyciąga taki parametr jak zdefiniowany w Route (tutaj itemId)
    const event = events.find(x => x.id === parseInt(id, 10)); //Find iteruje po tablicy i zwraca element, który spełnia warunek
    return event;
  }

  componentDidMount() {
      this.setState({
        event: this.getEvent()
      });
  }

  componentDidUpdate(){
    const event = this.getEvent();
    if(event.id !== this.state.event.id) {
        this.setState({
        event //ES6 zamiast event: event
    });
    }
  }

  render() {
      const { name, place, date, time } = this.state.event; //Destructuring - tworzymy zmienne z obiektu
      return (
        <div>
          <h2>{name}</h2>
          <h3>Gdzie: {place}</h3>
          <h3>Data: {date}</h3>
          <h3>Godzina: {time}</h3>
        </div>
      )
  }

}

export default Details;