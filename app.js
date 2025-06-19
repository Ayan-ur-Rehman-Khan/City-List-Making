var cities = [];

var list = document.getElementById("list");

function addToList(){
    var input = prompt("Enter Your City");

    cities.push(input)

    list.innerHTML= '';

    listMaker()
}

function listMaker(){
    for(var i=0 ; i < cities.length ; i++){

        list.innerHTML += `<li>${cities[i]}</li>`;

    }
}

// console.log(cities);
