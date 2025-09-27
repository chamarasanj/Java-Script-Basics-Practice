console.log("Hello world from Script.js");


import { add } from './math.js';

var result = add(5, 10);
console.log(" sum of 5 and 10 is:",result);
//console.log(add(2,3));


import subtract, {marks} from './math.js';

var result2 = subtract(10, 5);
console.log(" difference of 10 and 5 is:",result2);

console.log("marks object:",marks);



import message from './message.js';     

var greet = message("Alice", 30);
console.log(greet);


let bigNumber=32116546465465465464654654646546464654654654646546464654n;
console.log(" Type of Big Number:",typeof(bigNumber));