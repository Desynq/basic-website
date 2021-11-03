function myFunction() {
	let input;
	input = window.prompt('Enter a set of numbers.\nSeparate numbers with a comma\nInsensitive to characters that aren\'t numbers or commas.');
	document.getElementById('dataset').innerHTML = input;
}
