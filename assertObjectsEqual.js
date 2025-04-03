const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

//input: 2x objects
//output: console.log

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Input Objects Match: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Input Objects DO NOT Match: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const brandonSandersonBooks = {
  author: "Brandon Sanderson",
  totalBooksPublished: 50,
  mostFamousSeries: ["Mistborn", "The Stormlight Archive", "The Reckoners", "Warbreaker"],
  firstPublishedBook: "Elantris",
  cosmereUniverse: true,
  averageBookLength: 500,  // Approximate pages
  mostRecentBook: "Yumi and the Nightmare Painter",
  genres: ["Fantasy", "Science Fiction", "Young Adult"],
  famousCharacters: ["Kaladin", "Vin", "Kelsier", "Dalinar", "Shallan"],
  upcomingBooks: ["Stormlight Archive 5", "Mistborn Era 3", "Dark One"]
};

const brandonSandersonBooksAlso = {
  author: "Brandon Sanderson",
  totalBooksPublished: 50,
  mostFamousSeries: ["Mistborn", "The Stormlight Archive", "The Reckoners", "Warbreaker"],
  firstPublishedBook: "Elantris",
  cosmereUniverse: true,
  averageBookLength: 500,  // Approximate pages
  mostRecentBook: "Yumi and the Nightmare Painter",
  genres: ["Fantasy", "Science Fiction", "Young Adult"],
  famousCharacters: ["Kaladin", "Vin", "Kelsier", "Dalinar", "Shallan"],
  upcomingBooks: ["Stormlight Archive 5", "Mistborn Era 3", "Dark One"]
};

const notBrandonSandersonBooks = {
  author: "Not Brandon Sanderson",
  totalBooksPublished: 50,
  mostFamousSeries: ["Mistborn", "The Stormlight Archive", "The Reckoners", "Warbreaker"],
  firstPublishedBook: "Elantris",
  cosmereUniverse: true,
  averageBookLength: 500,  // Approximate pages
  mostRecentBook: "Yumi and the Nightmare Painter",
  genres: ["Fantasy", "Science Fiction", "Young Adult"],
  famousCharacters: ["Kaladin", "Vin", "Kelsier", "Dalinar", "Shallan"],
  upcomingBooks: ["Stormlight Archive 5", "Mistborn Era 3", "Dark One"]
};

console.log(assertObjectsEqual(brandonSandersonBooks, brandonSandersonBooksAlso));
console.log(assertObjectsEqual(brandonSandersonBooks, notBrandonSandersonBooks));