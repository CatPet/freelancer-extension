console.log("Bid");
window.addEventListener("click", function () {
	navigator.clipboard.readText().then(text => {
		console.log(text);
	}).catch(err => {
		console.log('Error: ', err);
	})
});