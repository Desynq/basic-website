function getVersion() {
	const version = 'v1.3.0'
	document.getElementById('version').innerHTML = version
}





function myFunction() {
	let error = []
	let input
	input = document.getElementById('input').value
	
	input = input.replace(/[^0-9\-.,]/g,'')
	input = input.split(',')
	if (input.some(a => a === '') ) {
		window.alert('Some elements are blank!')
		return false;
	}
	let dataset = input.map(Number)
	if (dataset.some(isNaN) ) {
		for (let i = 0; i < dataset.length; i++) {
			if (isNaN( dataset[i] ) ) {
				error.push( input[i] )
			}
		}
		window.alert('One or more elements are not a valid number!\nErrored Elements: ' + error)
	}
	document.getElementById('dataset').innerHTML = 'Dataset = ' + dataset
	
	dataset.sort( (a,b) => a - b) // sort dataset least to greatest
	document.getElementById('sortedDataset').innerHTML = 'Sorted Dataset = ' + dataset
	
	const n = dataset.length
	const sum = dataset.reduce((a, b) => a + b)
	const mean = sum / n
	const min = dataset[0]
	const max = dataset[n - 1]
	const range = max - min

	let dev = 0
	for (let i = 0; i < n; i++) {
		dev += (dataset[i] - mean) ** 2
	}
	const stdev = Math.sqrt(dev / (n - 1))
	const stdevp = Math.sqrt(dev / n)
	const stderr = stdev / Math.sqrt(n)

	let output = [
		'Count = ' + n,
		'Sum = ' + sum,
		'Mean = ' + mean,
		'Min = ' + min,
		'Max = ' + max,
		'Range = ' + range,
		'StDev = ' + stdev,
		'StDevP = ' + stdevp,
		'StdErr = ' + stderr
	]
	output = output.toString()
	output = output.replace(/,/g, '<br>')
	document.getElementById('output').innerHTML = output
}
