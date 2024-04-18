function isDay(sunrise,sunset, currentTime) {
    return currentTime > sunrise && currentTime < sunset;
}

export default isDay; // export the isDay function