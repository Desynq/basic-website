html = [
	'Dataset = ',
	'Count = ',
	'Sum = ',
	'Min = ',
	'Max = ',
	'Range = ',
	'StDev = ',
	'StDevP = ',
	'StdErr = ',
]

const dataset = [1,2,3]


const n = dataset.length
const sum = dataset.reduce((a, b) => a + b)
const mean = sum / n
const min = dataset[0]
const max = dataset[n - 1]
const range = max - min

const stdev = Math.sqrt(dataset.reduce(a => (a - mean) ** 2) / (n - 1))
const stdevp = Math.sqrt(dataset.reduce(a => (a - mean) ** 2) / n)
const stderr = stdev / Math.sqrt(n)

let output = html.slice()
output[0] += dataset
output[1] += sum
output[2] += min
output[3] += max
output[4] += range
output[5] += stdev
output[6] += stdevp
output[7] += stderr
output = output.toString()
output = output.replace(/,/g, '\n')
console.log(output)
