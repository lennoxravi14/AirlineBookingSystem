const flightsDatabase = {
    "New York": {
        "Los Angeles": [
            { flightNumber: "NY-LA101", time: "10:00 AM", price: "$350" , delay_prob: "0.21" },
            { flightNumber: "NY-LA102", time: "2:00 PM", price: "$400" , delay_prob: "0.51" },
            { flightNumber: "NY-LA103", time: "6:00 PM", price: "$380" , delay_prob: "0.25" }
        ],
        "Chicago": [
            { flightNumber: "NY-CH101", time: "9:00 AM", price: "$300" , delay_prob: "0.12"},
            { flightNumber: "NY-CH102", time: "1:00 PM", price: "$320" , delay_prob: "0.41"},
            { flightNumber: "NY-CH103", time: "5:00 PM", price: "$290" , delay_prob: "0.46"}
        ]
    },
    "Los Angeles": {
        "New York": [
            { flightNumber: "LA-NY101", time: "7:00 AM", price: "$350" , delay_prob: "0.23"},
            { flightNumber: "LA-NY102", time: "11:00 AM", price: "$375" , delay_prob: "0.69"},
            { flightNumber: "LA-NY103", time: "3:00 PM", price: "$360" , delay_prob: "0.31"}
        ],
        "Miami": [
            { flightNumber: "LA-MI101", time: "8:00 AM", price: "$250" , delay_prob: "0.91"},
            { flightNumber: "LA-MI102", time: "12:00 PM", price: "$270" , delay_prob: "0.14"},
            { flightNumber: "LA-MI103", time: "4:00 PM", price: "$260" , delay_prob: "0.38"}
        ]
    }
};


document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const startingPoint = document.getElementById('starting-point').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    if (startingPoint && destination && date) {
        if (flightsDatabase[startingPoint] && flightsDatabase[startingPoint][destination]) {
            const flights = flightsDatabase[startingPoint][destination];
            const optionsList = document.getElementById('options-list');
            optionsList.innerHTML = ''; 

            flights.forEach(flight => {
                const flightDiv = document.createElement('div');
                flightDiv.classList.add('flight-option');
                flightDiv.innerHTML = `
                    <h3>Flight Number: ${flight.flightNumber}</h3>
                    <p><strong>Time:</strong> ${flight.time}</p>
                    <p><strong>Price:</strong> ${flight.price}</p>
                    <p><strong>Probability of Delay:</strong> ${flight.delay_prob*100}%</p>
                    <button class="book-btn">Book Now</button>
                `;
                optionsList.appendChild(flightDiv);
            });

            document.getElementById('flight-options').classList.remove('hidden');
        } else {
            alert('No flights available for the selected route.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});
