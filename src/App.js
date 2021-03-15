import React from 'react';
import './App.css';

function App() {
    const [light, toggleLight] = React.useState(true);

    function handleEvent() {
        toggleLight(!light);
    }

    return(
        <div>
            <button
                type="button"
                onClick={handleEvent}
            >
            {light? "AAN" : "UIT"}
            </button>
        </div>
    )
}

/*
class App extends React.Component {
    //De constructor zorgt ervoor dat de properties ontvangen en doorgegeven worden aan React.component (parent-class)
    //In de constructor wordt ook de state aangemaakt

    constructor(props) {
        //De properties worden doorgegeven aan de parent-class
        super(props);
        // De state wordt aangemaakt. Hierin staat de beginwaarde van de lichtknop (TRUE).
        this.state = {
            isLightOn: true
        };
        //Binden van de methode aan de constructor > anders is de context van 'this' kwijt.
        this.handleClick = this.handleClick.bind(this);
    }

        //De event-handler wordt hier aangemaakt. Binnen de methode wordt de state omgezet naar de tegenovergestelde waarde.
    handleClick() {
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    //Alles wat gereturned wordt uit de render-functie, wordt weergegeven op de pagina
    render() {
        return (
            // Er wordt een button aangemaakt
            <button
                type="button"
                //Er wordt een onclick-event op de button gezet. De bovenstaande event-handler wordt hier aangeroepen.
                //Vervolgens wordt een ternary-operator gebruikt: als de state TRUE teruggeeft, krijgt de button de waarde ÁAN, en andersom.
                onClick={this.handleClick}
            >
                {this.state.isLightOn ? 'AAN' : 'UIT'}
            </button>
        );
    }
}
*/
export default App;
