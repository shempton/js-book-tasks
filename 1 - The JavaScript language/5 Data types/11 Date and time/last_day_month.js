function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log( getLastDayOfMonth(2021, 0) );
console.log( getLastDayOfMonth(2022, 1) );