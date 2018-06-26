import React from 'react';
import ReactDOM from 'react-dom';
import { Events } from './events.js'

ReactDOM.render(
    <Events />, document.getElementById('root'));
    //Import komponentu Events, który zawiera całą logikę aplikacji

    /*  
    
    Renderowanie komponentu działa w sposób następujący:

1). Wywoływana jest metoda ReactDOM.render
2). Powoduje to wywołanie metody render komponentu Events
3). Jeśli komponent Events zwraca zagnieżdżone inne komponenty, to również ich metody render są wywoływane itd.
4). Na podstawie wszystkich zagnieżdżonych elementów (i komponentów) budowane jest drzewo VirtualDOM
5). Na koniec całość trafia do wnętrza elementu o identyfikatorze root
    
Oczywiście, jeśli któryś z komponentów w drzewie jest komponentem funkcyjnym, to wówczas metoda render tego komponentu 
nie jest wywoływana. Taki komponent sam jest funkcją więc to ona jest zamiast tego wywoływana.


https://codepen.io/anon/pen/LrBjOz
    */
