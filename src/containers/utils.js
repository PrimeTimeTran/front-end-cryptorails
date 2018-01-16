import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = d.open;
		d.high = d.high;
		d.low = d.low;
		d.close = d.close;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	// const promiseMSFT = fetch("//raw.githubusercontent.com/PrimeTimeTran/front-end-cryptorails/3cb5a7a4e2b3e4316019632156ab0b3ee52c9772/src/data/prices.tsv")
	// 	.then(response => response.text())
	// 	.then(data => tsvParse(data, parseData(parseDate)))
	const promiseMSFT = fetch("//raw.githubusercontent.com/PrimeTimeTran/front-end-cryptorails/779a6e51f0c1519b1e5ebfefc6c281902b504590/src/data/prices.tsv")
	.then(response => response.text())
	.then(data => tsvParse(data, parseData(parseDate)))

	// const promiseMSFT = fetch("http://localhost:3000")
	// .then((response) => response.json())
	// .then(function(data) {
	// 	console.log('Data: ', data);
	// 	return {
	// 		data,
	// 		columns: ["data", "open", "close", "low", "high"]
	// 	}
	// })
	return promiseMSFT;
}
