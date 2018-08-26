import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/details';

class Details extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.eventId;
    this.props.eventDetails(id);
    }

  render() {
    const { name, place, date, time } = this.props.detailsStore.event;

    return (
      <div>
        <strong>Nazwa:</strong> {name}<br />
        <strong>Miejsce:</strong> {place}<br />
        <strong>Data:</strong> {date}<br />
        <strong>Godzina:</strong> {time}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    eventDetails: (eventId) => dispatch(actions.eventDetails(eventId))
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Details);
