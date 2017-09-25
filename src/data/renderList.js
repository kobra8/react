import React from 'react';
import PropTypes from 'prop-types'

//Funkcja pobierająca wydarzenia
//props jako parametr stusujemy przy zamianie fukncji w komponent
class Meetings extends React.Component {
    static propTypes = {
       meetings: PropTypes.array.isRequired
    };
    render() {
        return (
            <ul>
                {this.props.meetings.map((x) => {
                    //  let date = new Date(x.date) - inny sposób na konwersję daty ze stringa
                    let date = Date.parse(x.date);
                    if (date >= Date.now()) {
                        return (
                            <li key={x.id}>
                                <strong>{x.name}</strong><br />
                                Gdzie: {x.place} <br />
                                Kiedy: {x.date} {x.time}
                            </li>
                        )
                    };
                    return null;
                })
                }
            </ul> 
        );
    }
}

// Drugi sposób rozwiązania zadania: Wyświetl spotkania z dat przyszłych  
            // <ul>
            //     {meetings.filter(y => Date.parse(y.date) >= Date.now()).map((x) => {
            //         return <li key={x.id}>
            //             <strong>{x.name}</strong><br />
            //             Gdzie: {x.place} <br />
            //             Kiedy: {x.date} {x.time}</li>;
            //     })
            //     }
            // </ul>

export { Meetings };