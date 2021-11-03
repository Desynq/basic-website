html = [
	'Count = ',
	'Sum = ',
	'Mean = ',
	'Min = ',
	'Max = ',
	'Range = ',
	'StDev = ',
	'StDevP = ',
	'StdErr = ',
]

function getVersion() {
	const version = 'v1.2.3'
	document.getElementById('version').innerHTML = version
}





function myFunction() {
	let error = []
	let input
	input = document.getElementById('input').value
	
	input = input.replace(/[^0-9\-.,]/g,'')
	input = input.split(',')
	if (input.some(a => a === '') ) {
		window.alert('Some elements have been left blank!\nYour Input: ')
		return false;
	}
	let dataset = input.map(Number)
	if (dataset.some(isNaN) ) {
		for (let i = 0; i < dataset.length; i++) {
			if (isNaN(dataset[i] ) ) {
				error.push(input[i] )
			}
		}
		window.alert('One or more elements are not a valid number!\nErrored Elements: ' + error)
	}
	document.getElementById('dataset').innerHTML = 'Dataset = ' + dataset



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
	output[0] += n
	output[1] += sum
	output[2] += mean
	output[3] += min
	output[4] += max
	output[5] += range
	output[6] += stdev
	output[7] += stdevp
	output[8] += stderr
	output = output.toString()
	output = output.replace(/,/g, '<br>')
	document.getElementById('output').innerHTML = output
}
