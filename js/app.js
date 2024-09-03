//? 1.  Capitalize the First Letter of Each Word
let word = "hallo";
let firstLetter = word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()


console.log(firstLetter);


//? 2.  Check if a String Contains a Substring
let check = "hallo"
console.log(check.includes("all"));



//? 3.	Reverse a String
let text = "hallo";
console.log(text.split('').reverse().join(''));



//? 4.	Count the Number of Vowels in a String
let text4 = "Hello World";



//? 5.	Check if a String is a Palindrome




//? 6.	Format a Number to a Fixed Number of Decimal Places
let num6 = 4.227;
console.log(num6.toFixed(2));



//? 7.	Generate a Random Integer Between Two Values
const minNum = 5;
const maxNum = 20;
const randomInteger = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(randomInteger);



//? 8.  Convert a Number to a String
let number = 132;
let convert = number.toString();
console.log(typeof convert);


//? 9.	Find the Maximum Value in an Array of Numbers
let maxi = Math.max(4,6,5)
console.log(maxi);

// let arr = [3,5,32,8];
// let max = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max= arr[i]
//     }
// }
// console.log(max);


//? 10.	 Round a Number to the Nearest Integer
console.log(Math.round(103.9));

