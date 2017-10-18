import React from 'react'

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            textData: '',
            car: ''
        };
    }
    onInputChange(event) {
        event.preventDefault();

        const newValue = event.currentTarget.value;
        this.setState({ text: newValue });
    }

    onTextChange(event) {
        event.preventDefault();

        const newValue = event.currentTarget.value;
        this.setState({ textData: newValue });
    }

    onOptionChange(event) {
        event.preventDefault();

        const newValue = event.currentTarget.value;
        this.setState({ car: newValue });
    }

    onSubmit(event) {
        event.preventDefault();
        // Funkcja wysyłania na serwer
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.onInputChange.bind(this)} value={this.state.text} /><br />
                    <textarea value={this.state.textData} onChange={this.onTextChange.bind(this)}/><br />
                    <select onChange={this.onOptionChange.bind(this)} value={this.state.car}>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    <option value="mercedes">Mercedes</option>
                    </select>    
                        <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default FormComponent;