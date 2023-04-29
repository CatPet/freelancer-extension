// chrome.action.onClicked.addListener((tab) => {
// 	chrome.scripting.executeScript({
// 		target: { tabId: tab.id },
// 		files: ['bid.js']
// 	}, () => {
// 		console.log('Extension icon clicked!');
// 	});
// });

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: async () => {
			await window.document.activeElement.blur();
			await window.document.body.focus();
			window.addEventListener("", () => {
				navigator.clipboard.readText().then(text => {
					console.log(text);
				}).catch(err => {
					console.log('Error: ', err);
				})
			});
		}
	});
});

