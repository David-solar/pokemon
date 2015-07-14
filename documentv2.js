
function Pokemon(nom, grit, vi, ata)
{
	this.nombre = nom;
	this.grito = grit;
	this.vida = vi;
	this.ataque = ata;
	this.gritar = function()
	{
		alert(this.grito);
	}
}

var bulbasaur = new Pokemon("Bulbasaur","bulba bulba jajajaja", 150, 200);
var charmander = new Pokemon("Charmander", "charma charma xD", 200, 400);
var voltor = new Pokemon("Voltor","vo vov o", 100, 86);

function datos(nomVar)
{
	alert( "Elegiste a: " + nomVar.nombre );
	imagen.innerHTML = '<img src = "' + nomVar.nombre + '.jpg" width = "200" height = "200">'
	nombrePokemon.innerText = "Nombre del Pokemon: " + nomVar.nombre;
	gritoPokemon.innerText = "Grito del pokemon: " + nomVar.grito;
	vidaPokemon.innerText = "Nivel de vida: " + nomVar.vida;
	ataquePokemon.innerText = "Nivel de ataque: " + nomVar.ataque;
}

function inicio()
{
	
	var opcion = prompt("Elige un pokemon para ver sus caractisticas" +
						"\nBulbasaur: 1" +
						"\nCharmander: 2" +
						"\nVoltor: 3","0");

	opcion = Number(opcion);

	if(opcion == 1)
	{
		datos( bulbasaur );
	}
	else if(opcion == 2)
	{
		datos( charmander );
	}
	else if(opcion == 3)
	{
		datos( voltor );
	}
	else
	{
		alert("Esa opcion no existe bueey!!");
	}

	
	
}