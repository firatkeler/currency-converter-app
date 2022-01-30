import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CCSelect from "./components/CCSelect";
import CCTextField from "./components/CCTextField";
import CCButton from "./components/CCButton";
import CCAlert from "./components/CCAlert";
import axios from 'axios';

function App() {
    const [showResult, setShowResult] = React.useState({});

    const [amount, setAmount] = React.useState('');
    const [sourceCurrency, setSourceCurrency] = React.useState('');
    const [destinationCurrency, setDestinationCurrency] = React.useState('');

    const handleSelect = (target, event) => (target === 's') ? setSourceCurrency(event.target.value) : setDestinationCurrency(event.target.value);

    const handleText = (event) => setAmount(event.target.value);

    const handleClick = async () => {
        if (amount === '' || sourceCurrency === '' || destinationCurrency === '') {
            setShowResult({show: true, severity: "error", title: "Error", message: "Please fill in all fields"});
        }
        else {
            console.log(amount)
            console.log(sourceCurrency)
            console.log(destinationCurrency)
            try {
                const result = await axios.get('https://localhost:5001/api/Currency/amount=' + amount + '&from=' + sourceCurrency + '&to=' + destinationCurrency);

                setShowResult({show: true, severity: "success", title: "Result", message: "Conversion equals to " + result.data});
            }
            catch (err) {
                console.log(err);
            }
        }
    };

    const currencies = [
        {
            value: "EUR",
            text: "EUR"
        },
        {
            value: "GBP",
            text: "GBP"
        },
        {
            value: "USD",
            text: "USD"
        },
        {
            value: "TRY",
            text: "TRY"
        },
    ];

    return (
        <div className="App">
            <div className="heading">
                <h1>Currency converter</h1>
            </div>
            <div className={"container"}>
                <div className={"d-flex justify-content-center"}>

                    <CCTextField label={"Amount"} onChange={handleText} />

                    <CCSelect label={"Source"} options={currencies} value={sourceCurrency} onChange={(e) => handleSelect("s", e)} />

                    <CCSelect label={"Destination"} options={currencies} value={destinationCurrency} onChange={(e) => handleSelect("d", e)} />

                    <CCButton onClick={handleClick} />

                </div>
                {showResult.show && <div>
                    <CCAlert severity={showResult.severity} title={showResult.title} message={showResult.message} />
                </div>}
            </div>
        </div>
    );
}

export default App;
