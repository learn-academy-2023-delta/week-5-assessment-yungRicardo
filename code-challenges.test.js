// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// describe("makeCodedMessage", () => {
//     it("returns coded message", () => {
//         expect(makeCodedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(makeCodedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(makeCodedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

// b) Create the function that makes the test pass.

const makeCodedMessage = (str) => {
    var stringArr = str.toLowerCase().split("")
    for(let i=0; i<stringArr.length; i++){
        if(stringArr[i] === 'a') {stringArr[i] = '4'}
        if(stringArr[i] === 'e') {stringArr[i] = '3'}
        if(stringArr[i] === 'i') {stringArr[i] = '1'}
        if(stringArr[i] === 'o') {stringArr[i] = '0'}
    }
    return  stringArr.join("").toUpperCase()[0] + stringArr.slice(1).join("")
}

// console.log(makeCodedMessage(secretCodeWord1))
// console.log(makeCodedMessage(secretCodeWord2))
// console.log(makeCodedMessage(secretCodeWord3))

// Pseudo code:

// crete makeCodedMessage(str) => {
//     Convert str to lowercase and split it into an array of characters called stringArr
//     For each character c in stringArr
//         If c is 'a', replace it with '4'
//         If c is 'e', replace it with '3'
//         If c is 'i', replace it with '1'
//         If c is 'o', replace it with '0'
//     Return join() stringArr (converting to string) and then index into zeroth place to capitalize first character in word
//     and then add that to to rest of of stringArr starting at index 1.
// }


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// describe("filteredFruit", () => {
//     it("returns array filtered fruit", () => {
//         expect(filteredFruit(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(filteredFruit(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

// b) Create the function that makes the test pass.

const filteredFruit = (fruitArr, char) => {
    return fruitArr.filter(fruit => fruit.toLowerCase().includes(char))
}

// console.log(filteredFruit(fruitArray, filterLetterA))
// console.log(filteredFruit(fruitArray, filterLetterE))

// Pseudo code:

// Define a function that takes an array of fruits and character as arguments
// Use the filter() to create new array of filtering out the fruits that include the inputed character
// Return filtered array 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("winningHand", () =>{
    it("returns true if these id full house or false.", () =>{
        expect(winningHand(hand1)).toEqual(true)
        expect(winningHand(hand2)).toEqual(false)
        expect(winningHand(hand3)).toEqual(false)
        expect(winningHand(hand4)).toEqual(true)
    })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true

const hand2 = [5, 5, 3, 3, 4]
// Expected output: false

const hand3 = [5, 5, 5, 5, 4]

// Expected output: false

const hand4 = [7, 2, 7, 2, 7]

// Expected output: true

// b) Create the function that makes the test pass.

const winningHand = (arr) => {
    const num_counts = {}
    for (num of arr){
        num_counts[num] = (num_counts[num] || 0) + 1
    }
    const values = Object.values(num_counts);
    return values.includes(2) && values.includes(3)
}
console.log(winningHand(hand1))
console.log(winningHand(hand2))
console.log(winningHand(hand2))
console.log(winningHand(hand4))

// Pseudo code:
// create function that accepts array and returns true or false
//      create an empty dictionary to store the counts of numbers

//      iterate through each num in arr
//         IF num_counts[num] EXISTS
//             num_counts[num] = num_counts[num] + 1
//         ELSE
//             num_counts[num] = 1

//      values = get values from num_counts

//      IF values contain 2 AND values contain 3
//         return True
//      ELSE
//         return False
//
