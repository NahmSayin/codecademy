//For conversion from kelvin to celsius to fahrenheit

// kelvin variable = 293
const kelvin = 0

// celsius = kelvin - 273
const celsius = kelvin - 273

//Fahrenheit = Celsius * (9/5) + 32 - rounded down
const fahrenheit = Math.floor(celsius * (9/5) + 32)


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

