const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function(x, i, item) {
    return item.indexOf(x) === i; 
});

console.log(result);




function leapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
        return false;
}

const checkYearA = 2020;

if(leapYear(checkYearA)) {
    console.log(checkYearA + '年はうるう年です。');
}else {
    console.log(checkYearA + '年はうるう年ではありません。');
}


const checkYearB = 2021;

if(leapYear(checkYearB)) {
    console.log(checkYearB + '年はうるう年です。');
}else {
    console.log(checkYearB + '年はうるう年ではありません。');
}