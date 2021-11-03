function getVersion() {
	const version = 'v1.2.1'
	document.getElementById('version').innerHTML = version;
}

function myFunction() {
	let error = [];
	let input;
	input = window.prompt('Enter a set of numbers.\nSeparate numbers with a comma\nInsensitive to characters that aren\'t numbers or commas.');
	
	input = input.replace(/[^0-9\-.,]/g,'');
	input = input.split(',');
	if (input.some(a => a === '') ) {
		window.alert('Some elements have been left blank!\nYour Input: ' + input);
		return false;
	}
	let dataset = input.map(Number);
	const n = dataset.length;
	if (dataset.some(isNaN) ) {
		for (let i = 0; i < n; i++) {
			if (isNaN(dataset[i]) ) {
				error.push(input[i]);
			}
		}
		window.alert('One or more elements are not a valid number!\nErrored Elements: ' + error);
	}
	document.getElementById('dataset').innerHTML = 'Dataset = ' + dataset;
	document.getElementById('n').innerHTML = 'n = ' + n;
}
