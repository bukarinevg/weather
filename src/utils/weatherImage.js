const imagesCode = {
    "01": {"codes": [0], "description": "clear sky"},
    "02": {"codes": [1, 2], "description": "few clouds"},
    "03": {"codes": [3, 4], "description": "scattered clouds"},
    "04": {"codes": [5, 6], "description": "broken clouds"},
    "09": {"codes": [10, 11, 12, 13, 14, 15, 16], "description": "shower rain"},
    "10": {"codes": [20, 21, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 80, 81, 82, 91, 92], "description": "rain"},
    "11": {"codes": [23, 24, 25, 29, 95, 96, 97, 98, 99, 17, 18, 19], "description": "thunderstorm"},
    "13": {"codes": [22, 70, 71, 72, 73, 74, 75, 36, 37, 38, 39, 76, 77, 78, 85, 86, 87, 88, 89, 90, 93, 94, 26, 79, 83, 84], "description": "snow"},
    "50": {"codes": [7, 8, 9, 27, 28, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 30, 31, 32, 33, 34, 35], "description": "mist"},
    // "99": {"codes": [30, 31, 32, 33, 34, 35], "description": "miscellaneous weather changes"}
};

function weatherImage(weatherCode, isDay) {

    let code = Object.keys(imagesCode).find(key => imagesCode[key].codes.includes(weatherCode));
    if(!code) return null;
    return `/weather/images/${code}${isDay ? 'd' : 'n'}.png`;
}
  

export default weatherImage;