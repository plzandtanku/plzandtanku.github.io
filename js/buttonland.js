let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alArr = alphabet.split('');

function makeGrid(id){
	var table = document.getElementById(id);
	for (var i=0;i < 10;i++){
		var row = table.insertRow(0);
		for (var j=0;j<10;j++){
			var col = row.insertCell(0);
			col.innerHTML = "<div class='empty' id="+i+","+j+"> </div>";
		}
	}
}

function jibGen() {
	let len = Math.floor(Math.random() * 7) + 1;
	let w = "";
	while (len > 0){
		w += alArr[Math.floor(Math.random() * alArr.length)];
		len--;
	}
	return w;
}

function spawnButton(){
	let buttons = document.getElementsByTagName('button');
	let i = Math.floor(Math.random() * 10);
	let j = Math.floor(Math.random() * 10);
let d = document.getElementById(i+","+j);
	//for (let i=0;i<buttons.length;i++) {
		let newButton = document.createElement("button");
	newButton.addEventListener("click", spawnButton);

			//newButton.appendChild(document.createTextNode("yes"));
	newButton.appendChild(document.createTextNode(jibGen()));
		//buttons[0].appendChild(newButton);
	if (d.className === "empty") {
		d.className = "boop";
		d.appendChild(newButton);
	}
	//}
}

