let max = 2^64
let comp = 1 
let i = 0
let done = false

let fs = require('fs')
let csv = fs.readFileSync('primes.csv').toString().split(',')

let computed = []

while(!done){
	comp = comp*csv[i]
	i++
	computed.push(comp)
	if(i%10000==0) console.log(computed[computed.length-1], 2^63)
	if(!(computed[computed.length-1] < 2^63)) {
		done = true	
		console.log(i)
		console.log(computed)
	}
}
