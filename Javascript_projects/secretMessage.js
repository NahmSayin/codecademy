// Secret Message
// Using array methods, you will transform an array of strings into a secret message!

// You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove arrray
secretMessage.pop()

//check length of array
console.log(secretMessage.length)

//add two elements
secretMessage.push('to','Program')

//change specific elements in the array
secretMessage[7] = 'right'

//remove first element in an array
secretMessage.shift()

//add element to the beginning of an array
secretMessage.unshift('Programming')

//replace several elements with a single element
secretMessage.splice(6, 5, 'know')

//print secret message as a sentence on one line
console.log(secretMessage.join(' '))



