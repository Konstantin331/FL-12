function convert (){
    const result = [];
    for(let e = 0; e < arguments.length; e++){
        typeof arguments[e] === 'number' ? result.push(arguments[e].toString()) : result.push(parseInt(arguments[e]));
    }
    return result;
}
convert('1', 2, 3, '4');

function executeforEach(arr, func){
    for(let i=0; i<arr.length;i++){
        func(arr[i]);
    }
}
executeforEach([1,2,3], function(el){
 console.log(el*2) 
});

function mapArray (arr,func){
    const result = [];
    executeforEach(arr, el => result.push(func(parseInt(el))))
    return result;
}
mapArray([2,'5',8], function(el){
return el + 3 
});

function filterArray(arr, func){
    const result = [];
    executeforEach(arr, el => func(el) ? result.push(el) : 0)
    return result;
}
filterArray([2,5,8], function(el) {
    return el % 2 === 0
});

function flipOver(str){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
flipOver('hey world');

function makeListFromRange(arr){
    const result = [];
    for(let i = arr[0]; i<=arr[1]; i++){
        result.push(i)
    }
    return result;
}
makeListFromRange([2,7]);

const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
function getArrayOfKeys(obj, key){
    const result = []
    executeforEach(obj, el => result.push(el[key]))
    return result
}
getArrayOfKeys(actors, 'name');

function substitute(arr){
    const result = []
    mapArray(arr, el => el <= 30 ? result.push('*') : result.push(el))
    return result
}
substitute([58,14,48,2,31,29]);

function getPastDay(date, day){
    return new Date(date.setDate(day));
}
const date = new Date(2019, 0, 2);
getPastDay(date, 1)
getPastDay(date, 2)
getPastDay(date, 365)

function formatDate(d){
    const num = hour => hour < 10 ? '0' + hour : hour;   
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${num(d.getHours())}:${num(d.getMinutes())}`
}
formatDate(new Date('6/15/2018 09:15:00'))
formatDate(new Date())