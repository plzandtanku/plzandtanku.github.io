function makeGrid(id){
	var table = document.getElementById(id);
	for (var i=0;i < 100;i++){
		var row = table.insertRow(0);
		for (var j=0;j<100;j++){
			var col = row.insertCell(0);
			col.innerHTML = "<div id="+i+","+j+"> </div>";
		}
	}
}

function spawn(){
	let buttons = document.getElementsByTagName('button');
	for (let i=0;i<buttons.length;i++) {
		console.log(buttons[i]);
	}
}
