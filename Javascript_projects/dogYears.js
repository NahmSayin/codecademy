//Javascript program for calculating your dog years
let myAge = 27

let earlyYears = 2

earlyYears = earlyYears * 10.5

laterYears = myAge -= 2

laterYears *= 4

console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears

let myName = 'Nahom'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)