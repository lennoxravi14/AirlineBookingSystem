const userDatabase = {
    "user001": [
        { flightNumber: "NY101", destination: "Los Angeles", date: "2025-03-10", status: "Booked" },
        { flightNumber: "SF303", destination: "San Francisco", date: "2025-03-15", status: "Confirmed" }
    ],
    "user002": [
        { flightNumber: "LA202", destination: "New York", date: "2025-03-12", status: "Delayed - 30 mins" },
        { flightNumber: "MI404", destination: "Miami", date: "2025-03-18", status: "Cancelled" }
    ],
    "user003": [
        { flightNumber: "CH505", destination: "Chicago", date: "2025-03-20", status: "Boarding" },
        { flightNumber: "LA606", destination: "Los Angeles", date: "2025-03-25", status: "On Time" }
    ]
};

document.getElementById('user-id-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userId = document.getElementById('user-id').value.trim();

    if (userDatabase[userId]) {
        const flights = userDatabase[userId];

        const flightsContent = document.getElementById('flights-content');
        flightsContent.innerHTML = '';

        flights.forEach(flight => {
            const flightDiv = document.createElement('div');
            flightDiv.classList.add('flight');
            flightDiv.innerHTML = `
                <h3>Flight Number: ${flight.flightNumber}</h3>
                <p><strong>Destination:</strong> ${flight.destination}</p>
                <p><strong>Date:</strong> ${flight.date}</p>
                <p><strong>Status:</strong> ${flight.status}</p>
            `;
            flightsContent.appendChild(flightDiv);
        });

        document.getElementById('flights-list').classList.remove('hidden');
    } else {
        alert('User ID not found. Please try again with a valid User ID.');
    }
});
