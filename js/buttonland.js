let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alArr = alphabet.split('');

let req = new XMLHttpRequest(); 
let bypass = 'https://cors-anywhere.herokuapp.com';
// garbage values. if you wanna use this ur gonna need to change this ;p
let appid = '76dbac2d';
let app_key = 'ddcff1136658ed357f8a9918f0fc43b74';
req.open('GET', bypass+'/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/ace?app_id='+appid+"&app_key="+app_key, true);
req.setRequestHeader("app_id", appid);
req.setRequestHeader("app_key", app_key);

req.onload = function () {
	let data = JSON.parse(this.response);
	console.log(data);
}
req.send();

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

