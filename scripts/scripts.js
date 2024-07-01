document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleDateString();
});

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    // Formula for wind chill in Celsius
    if (temp <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        return 'N/A';
    }
}

// Display wind chill when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10; // Example temperature in Celsius
    const windSpeed = 5; // Example wind speed in km/h

    const windChillElement = document.getElementById('wind-chill');
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill !== 'N/A' ? `${windChill.toFixed(2)} °C` : windChill;
});
