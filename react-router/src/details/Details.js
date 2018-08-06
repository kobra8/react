import React, { Component } from 'react';
import events from '../data/events.json';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {event: {} };
  }

  componentDidMount(){
    // React przekazuje pewne dane o routingu poprzez obiekt props - do dyspozycji 3 obiekty: match, location, history
    const id = this.props.match.params.eventId; // match z parametru w routingu wyciąga taki parametr jak zdefiniowany w Route (tutaj itemId)
    console.log(id);
    const event = events.find(x => x.id === parseInt(id, 10));
    console.log(event);
    this.setState({event});
  }

  render() {
    const { name, place, date, time } = this.state.event;
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