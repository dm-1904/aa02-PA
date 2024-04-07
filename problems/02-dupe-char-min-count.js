/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	let arr = string.split('')
	let obj = {}

	for(let el of arr){
		if(obj[el]) obj[el]++
		else obj[el] = 1
	}
	return obj
}

function duplicateCharMinCount(string, minCount) {
	let count = countCharacters(string)
	return Object.keys(countCharacters(string)).filter(key => count [key] >= minCount)
}
// 	let arr = []
// 	let count = countCharacters(string)

// 	for(let key in count){
// 		if(count[key] >= minCount) arr.push(key)
// 	}
// 	console.log(arr)
// 	return arr
// }
duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
