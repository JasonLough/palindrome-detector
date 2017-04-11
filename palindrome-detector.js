

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


foo('bob') //true
foo('billy') //false
foo('applesauce') //false
foo('xxxxTTTTxxxx') //true