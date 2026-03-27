const flightStatusDatabase = {
    "NY101": ["On Time", "On Time", "Delayed - 24 mins", 0.29],
    "LA202": ["On Time", "On Time", "Delayed - 30 mins", 0.31],
    "SF303": ["Cancelled", "Cancelled", "Delayed - 1 hours", 0.45],
    "MI404": ["On Time", "On Time", "On Time", 0.05],
    "CH505": ["On Time", "Delayed - 24 mins", "Delayed - 40 mins", 0.69],
    "LA606": ["On Time", "On Time", "Delayed - 25 mins", 0.30],
    "NY707": ["On Time", "On Time", "On Time", 0.05],
    "SF808": ["On Time", "On Time", "Delayed - 24 mins", 0.29],
};


document.getElementById('status-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const flightNumber = document.getElementById('flight-number').value.toUpperCase();

    if (flightStatusDatabase[flightNumber]) {
        const status1 = flightStatusDatabase[flightNumber][0];
	const status2 = flightStatusDatabase[flightNumber][1];
	const status3 = flightStatusDatabase[flightNumber][2];
	const prob = flightStatusDatabase[flightNumber][3];

        document.getElementById('status-flight-number').textContent = flightNumber;
        document.getElementById('status-message1').textContent = status1;
	document.getElementById('status-message2').textContent = status2;
	document.getElementById('status-message3').textContent = status3;
	document.getElementById('prob').textContent = Math.floor(prob*100);

        document.getElementById('status-result').classList.remove('hidden');
    } else {
        alert('Flight number not found. Please check the number and try again.');
    }
});
