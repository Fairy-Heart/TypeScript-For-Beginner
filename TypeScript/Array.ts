let myArray : string[] = ['My String'];

//Array many type :

let myArray2 : (string | boolean)[] = ['Hello world', true];

console.log(`${myArray[0]}, ${myArray2[0]}, ${myArray2[1]}`); //Ouput : My String, Hello World, true
