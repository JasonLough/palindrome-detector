

/*
	Jason.Lough@gmail.com
	4/11/2017

	Detect palindromes using javascript and regex. Palindromes are sequences that are the same backwards as forwards. Ex : 

		radar, mom, abccba, xxxxxyyyyyxxxxx

	The way I did it is neat-o, because it builds the string to use as the pattern.

	For ex, the pattern for a 3 letter palindrome would be :
		(\w)\w?\1
			match a character, 
			save it as group 1, 
			followed by 0 or 1 character, 
			followed by the match for group 1

	For a 5 (or 4) letter palindrome, the pattern would be :
		(\w)(\w)\w?\2\1

	4 or 5 because the middle character is optional : \w?

	The clever bit is that it builds the beginning and end of the pattern in the same loop.

	The other clever bit is that it uses the word to test twice : once to get its length and build the pattern, once to actually test it.

	~~ is just a shortcut for 'convert to int, rounding down'

	\\ is necessary to escape \
*/


function palindrome(str) {

	var r = '(\\w)'
	var e = ''
	var g = ''

	for(var x = ~~(str.length/2); x > 0; x--) {
		e += r
		g = g + '\\' + x
	}

	p = e + '\\w?' + g

	console.log(p)

	return new RegExp(p).test(str)
}


palindrome('bob') //true
palindrome('billy') //false
palindrome('applesauce') //false
palindrome('xxxxTTTTxxxx') //true