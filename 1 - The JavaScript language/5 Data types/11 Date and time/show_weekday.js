function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
}

let date = new Date(2023, 1, 20); // 3 Jan 2014
console.log( getWeekDay(date) );