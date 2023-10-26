import { Person } from "./Person";
import { Personable } from "./Personable";
import { Student } from "./Student";
import { Mode } from "./Mode";
import { Burger } from "./Burger";

import * as _ from 'lodash';

const didar:Student= new Student("didar","dogan",12);



function testFunc<T extends Person>(item:T):T{
  item.describe().greet();
  return item;
}

let myStudent= testFunc(didar);


function testMe<T>(numbers:Array<T> ):Array<T>{
 numbers.shift();
 return numbers;
}

console.log(testMe<number>([1,3]));
console.log(testMe<string>(["1","3"]));

/*
for( const item of list){
 item.describe();
}
*/

