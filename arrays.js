const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break
  }
}
console.log( "And if you don't know, now you know.")


let countries = [
    ["Argentina", "Brasil","Uruguay"],
    ["Bolivia", "Panama", "Colombia"],
    ["USA", "CANADA", "PIPO"],
    ["Mexico", "Peru" , "Ecuador"]
]; 

for(let f = 0; f < countries.length;f++){
    for(let c = 0; c< countries[f].length;c++){
        console.log(countries[f][c]);
    }} 
countries.push(["PORTUGAL", "POLONIA", "ESPAÑA"]); //agg al final
countries.pop(); // borra el ultimo
countries.shift(); // borra el primero
countries.unshift("ASIA"); // agg al principio 
*/

let countries = ["Argentina", "PERU","Uruguay"];
let countries2 = ["Mexico", "Peru" , "Ecuador"];

let allCountries = countries.concat(countries2); //sumar los dos arrays
console.log(allCountries);
allCountries.reverse(); // le cambia el sentido de atras para adelante
console.log(allCountries);
allCountries.sort(); // ordena por orden alfabetico
console.log(allCountries);
let country = countries.filter(country => country.includes("a"));  //filtrar por a
console.log(country);
