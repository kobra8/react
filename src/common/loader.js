import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
    if (props.isLoading) {
        return (
            <h1>Loading ...</h1>
        )
    }
    else {
        return props.children;
        //Ładuje dzieci od tego komponentu czyli listę UL, ltóra jest wewnątrz Loadingf
    }
}

Loader.protoTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default Loader; 