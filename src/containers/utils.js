export function getData() {
	const promiseMSFT = fetch("http://localhost:3000")
	.then((response) => response.json())
	.then(function(data) {
		data.columns = ["date", "open", "close", "low", "high"]
		return data
	})
	return promiseMSFT;
}
