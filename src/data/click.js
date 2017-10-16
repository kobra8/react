import React from 'react';

//Komponent funkcyjny

const Item = (props) => {
    return <button onClick={props.onItemClicked.bind(this,'param')}>Click Me</button>
}

export default Item;