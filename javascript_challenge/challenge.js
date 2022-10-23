const isNumberPositive = (number) => {
    return number > 0;
}

const convertDaysToAge = (days) => {
    return Math.floor(days/365)
}

const getLargestNumber = (arr) => {
    return Math.max.apply(null, arr)
}

const getlastName = (arr) => {
    return arr.pop()
}

const allNumbersPositive = (arr) => {
    return arr.filter(num => num < 0).length == 0
}