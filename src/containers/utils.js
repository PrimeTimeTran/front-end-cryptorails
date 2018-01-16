import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = new Date(d.date);
		d.open = d.open;
		d.high = d.high;
		d.low = d.low;
		d.close = d.close;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	const promiseMSFT = fetch("http://localhost:3000")
	.then((response) => response.json())
	.then(function(data) {
		data.columns = ["date", "open", "close", "low", "high"]
		return data
	})
	return promiseMSFT;
}
