import React from 'react';
import PropTypes from 'prop-types';

const EventSearch = (props) => {
    return (
        <div>
            <form>
                <input onChange={props.onFilterChange.bind(this)} placeholder="Filtruj spotkania..." value={props.searchText}></input>
            </form>
        </div>
    )
}

EventSearch.propTypes = {
    searchText: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default EventSearch;