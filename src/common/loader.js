import React from 'react';
import PropTypes from 'prop-types';

// Przykład komponent funkcyjnego
const Loader = (props) => {
    if (props.isLoading) { // Renderowanie warunkowe:
        return ( // Loader - zwraca tekst Loading
            <h1>Loading ...</h1>
        )
    }
    else {
        return props.children; // Zawartość komponentu - tutaj props.children
        /* Obiekt props posiada specjalną właściwość, children, która zawiera wszystko co znajduje się 
          pomiędzy znacznikami komponentu
          W tym przypadku ładuje listę eventów, Która jest w dzieciach, czyli pomiędzy znacznikami <ul></ul>
        */
    }
}

//Kontrola typów -> biblioteka PropTypes (implementacja dla komponentu funkcyjnego)
Loader.protoTypes = {
    isLoading: PropTypes.bool.isRequired
};

/*
Przykład iplementacji PropTypes dla komponentu klasowego

 static propTypes = {
    text: PropTypes.string.isRequired
  };

  Najczęściej używanymi typami dostępnymi w obiekcie PropTypes są: string, bool, array, number, func, object.
*/

export default Loader; 