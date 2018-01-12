import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {

		console.log('D', d);

		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	// const promiseMSFT = fetch("//rrag.github.io/react-stockcharts/data/MSFT.tsv")
	// 	.then(response => response.text())
	// 	.then(data => tsvParse(data, parseData(parseDate)))
	// return promiseMSFT;



	var txt = '';
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
			txt = xmlhttp.responseText;
		}
	};
	debugger
	xmlhttp.open("GET","./prices.csv",true);

	var data = xmlhttp.send();
	data.csvParse(data, parseData(parseDate))

	// const promiseMSFT = fetch("http://localhost:3000/")
	// 	.then(response => response.text())
	// 	.then(function(data) {
	// 		var size = 10;
	// 		var array = []
	// 		for (var i = 0; i < JSON.parse(data).length; i += size) {
	// 				var smallarray = JSON.parse(data).slice(i,i+size);
	// 				array.push(smallarray)
	// 		}
	// 		return array
	// 	})
	// 	return promiseMSFT;
}


