function isLeapYear(year){
    let d = new Date(year);
    d = d.getFullYear();
    if (!d){
        return `Invalid Date`;
    } else if(d % 4 === 0 && d % 100 !== 0 || d % 400 === 0){
        return `${d} is a leap year`;
    } else{
        return `${d} is not a leap year`;
    }
}
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);