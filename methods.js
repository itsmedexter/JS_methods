toUpperCase()
// upper case all letters in a string

toLowerCase()
// lowers all letters in a string

trim()
// removes spaces in front and after a string
// sample: before: '     string     ', after: 'string'

indexOf()
// sample: "catdog".indexOf('dog') = 3 --- starting letter of string
// sample: 'catdog'.indexof(d) = 3

slice(), slice(beginIndex[, endIndex optional] )
// sample: 'catdog'.slice(3) = 'dog'
// takes a piece of the string from where you indicate index 
// also start and stop arguments: 'superhero'.slice(0,5) = 'super'

replace(), replace(value1, value2)
// what you want to replace, then what you want to replace it with
// sample: 'baseball is fun'.replace('fun', 'boring') = 'baseball is boring'

Logical &&
// sample: abc.length === 3 && 3 === abc.length
// both sides must be true in order for the whole thing to be true

Logical ||
// !true === false || !false === false : true
// OR if either side is true, it is true. 
// sample
// const color = 'green';

// if(color === 'purple' || color === 'pink' || color === 'green') {
//   console.log('NICE PICK!')
// } else {
//   console.log('That is OK.')
// }

Logical !
// ! NOT returns true if the expression is false
// sample:
// const flavor = 'cherry';

// if(flavor !== 'grape' && flavor !== 'cherry') {
//   console.log('We have only grape or cherry.')
// } else {
//   console.log('Here you go!')
// }