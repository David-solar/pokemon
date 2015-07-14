//modelo de como esta organizada la informacion para un navegador
//dentro de js
//objetos contienen: variables y/o funciones

//funciones de Math:
//floor --> redondeo al numero menor
//ceil --> redondeo al numero mayor

//los tres objetos principales de js son:
//document --> codigo html
//navigator --> opciones especificas del navegador
//window --> propiedades de la ventana

//var maxima;

//maxima = Math.max( 5,48,21,45,6,84,7 );

//document.write( maxima );

//objeto del tipo pokemon

function Pokemon(n, v, a)
{
	this.grito = "Pikaaaaa!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()//esta es otra forma de declarar funciones
	//el nombre de esta funcion es gritar
	{
		alert(this.grito);
	}
}

function inicio()
{
	var rattata = new Pokemon("Rattata", 40, 20);
	rattata.grito = "Daviiiid";

	nombrePokemon.innerText = rattata.nombre;

	var pikachu = new Pokemon("Pikachu", 100, 55);	
}



//console.log()

/*function Pokemon(nombrePoke, vidaPoke, ataPoke)
{
	var estructuraPokemon = 
	{
		nombre: nombrePoke,
		vida: vidaPoke,
		ataque: ataPoke,
		datos: {
			tipo: "Tierra",
			debilidad: "Fuego"
				}
	};

	return estructuraPokemon;
}*/



/*var pikachu = Pokemon("Pikachu", 100, 55);

var bulbasaur = Pokemon("bulbasaur", 90, 50);
//bulbasaur.nombre = "Bulbasaur";
//bulbasaur.vida = 90;
//bulbasaur.ataque = 50;

console.log( bulbasaur );*/