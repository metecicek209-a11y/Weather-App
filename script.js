

const key = "0d7719e985e3606186a9fb142fda4fb4";

let button = document.querySelector(".searchButton");
button.addEventListener("click", function(){
	let city = document.querySelector(".inputCity").value;
	async function havayiOgren(city){
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
		const hava = await fetch(url);
		const bilgi = await hava.json();
		console.log(bilgi);
		if(bilgi.name == undefined){
			window.alert("wrong name");
		}
		document.getElementById("cityName").innerHTML = bilgi.name;
		let derece = Math.round(bilgi.main.temp);
		document.getElementById("lastTemp").innerHTML = derece + " °C" ;
		let durum = bilgi.weather[0].main;
		document.getElementById("sun").style.visibility = "hidden";
		document.getElementById("rain").style.visibility = "hidden";
		document.getElementById("bulut").style.visibility = "hidden";
		if(durum == "Rain"){
			document.getElementById("rain").style.visibility = "visible";
		}
		if(durum == "Clear"){
			document.getElementById("sun").style.visibility = "visible";
		}
		if(durum == "Clouds"){
			document.getElementById("bulut").style.visibility = "visible";
		}
	}
	havayiOgren(city);
	async function bringBackGround(city){
		let bckkey = "SNCEfMknQt9EI11K5mSLOwAl85aZytlFTLC6B6tzFy06yCsKGA2Q2Wdw";
		const url1 = `https://api.pexels.com/v1/search?query=${city}&per_page=1`;
		const bck = await fetch(url1,{
			headers : {
				Authorization : bckkey
			}
		});
		const image = await bck.json();
		document.body.style.background = `url(${image.photos[0].src.large})`;
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
	}
	bringBackGround(city);
});





