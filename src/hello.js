import React from 'react';
import Item from './click';

class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello!',
            fire: 'Try'
        };
        //  
    }
    //Funkcje strzałkowe automatycznie bindują do this
    onLinkClicked = (event) => {
        event.preventDefault();
        this.setState({ text: 'Goodbye!' })
    }

    //W poniższej funkcji bindowanie do klasy jest realizowane inline w referencji w kodzie JSX
    onItemClicked(param, event) {
        event.preventDefault();
        this.setState({fire: 'You clicked!'});
        console.log(param);
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                {/* Tu jest bindowanie funkcją => w definicji funkcji*/}
                <a href="/" onClick={this.onLinkClicked}>
                    Say Goodbye!
            </a><br />
                <p>{this.state.fire}</p>
                <Item onItemClicked={this.onItemClicked.bind(this)} />
            </div>
        );
    }
}


export { HelloComponent };

/*

Jeśli używamy składni ES6 to funkcja obsługi zdarzenia jest najczęściej metodą klasy. Jednak po przypisaniu tej metody 
do zdarzenia, jest ona wywoływana w kontekście elementu JSX, do którego jest podpięta – w takim przypadku this użyte 
w metodzie obsługi zdarzenia będzie miało wartość undefined.

Aby sobie z tym poradzić, wystarczy wykorzystać mechanizm „bindowania” JavaScript, tak aby zmienić kontekst wywołania metody 
na daną klasę.

Przykład bindowania w konstruktorze: this.onLinkClicked = this.onLinkClicked.bind(this);
Przykład bindowania on-line: this.onLinkClicked.bind(this) 

Kolejnym rozwiązaniem tego problemu może być, użycie „funkcji strzałkowych” z ES6, które automatycznie bindują this.

Definicja fuction.bind(this.arg)
Dla danej funkcji tworzy funkcję powiązaną, która ma tę samą treść, co funkcja pierwotna.
W funkcji powiązanej obiekt this jest przekazanym obiektem.Funkcja powiązania ma określone parametry początkowe.
Zwraca nową funkcję, która jest taka sama, jak funkcja function, z wyjątkiem obiektu thisArg i początkowych argumentów.

*/