module.exports.DateFormat = (inputDate) =>{
    let date = new Date(inputDate);
    return date.toLocaleDateString("en-GB", { weekday: 'long',date:'number', month: 'long', day: 'numeric'});
  }

module.exports.TimeFormat = (inputDate) =>{ 
    let date = new Date(inputDate);
    return date.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit'});
}