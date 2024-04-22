function isDay(sunrise,sunset, currentTime) {
    currentTime = new Date(currentTime);
    sunrise = new Date(sunrise);
    sunset = new Date(sunset);

    return currentTime.getHours() > sunrise.getHours() && currentTime.getHours() < sunset.getHours();
}

export default isDay; // export the isDay function