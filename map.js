//define map function
//input1: Array
//input2: Callback Fn
//output: mapped array based on Cbfn
//

const stormlightBooks = [
  "The Way of Kings",
  "Words of Radiance",
  "Oathbringer",
  "Rhythm of War",
  "Dawnshard"
];

const map = function() {

};

const mapAString = map(stormlightBooks, (book) => book[0]);
console.log(mapAString);

