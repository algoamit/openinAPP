// URL of the API you want to fetch data from
const apiUrl = 'https://api.inopenapp.com/api/v1/dashboardNew';

// Your access token
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MjcsImlhdCI6MTY3NDU1MDQ1MH0.dCkW0ox8tbjJA2GgUx2UEwNlbTZ7Rr38PVFJevYcXFI';

// Fetch data from the API
fetch(apiUrl, {
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
})
.then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Parse the JSON in the response
    return response.json();
})
.then(data => {
    // Handle the data received from the API
    console.log(data);

    // Example: Create a chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Chart Data',
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            // Additional options
        }
    });
})
.catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
});

// Display greeting based on local time
const currentTime = new Date();
const currentHour = currentTime.getHours();

let greeting;
if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

document.getElementById('greeting').textContent = greeting;
