function isDay(sunset, sunrise, currentTime) {

    return currentTime > sunrise && currentTime < sunset;
}

export default isDay; // export the isDay function