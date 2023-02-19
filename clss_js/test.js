var sample = [1, 2, 3];

//foreach
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})

//filter
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)

//map
var mapped = sample.map(function(elem) {
    return elem * 10;
})
console.log(mapped);

//filter
var sum = sample.reduce(function(sum, elem){
    return sum + elem;
})
console.log(sum)

//2)
var names = ['Arpan', 'Abhishek', 'GeeksforGeeks'];
 
names.forEach(function(name){
    console.log(name);
});

//3)
let list = [1,2,3,4,5,6,7,8,9,10];
let result1 = list.map(x => x*x);
console.log(result1)

//4)
const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand'];

const startsWith = countries.filter((country) => country.startsWith("E"));

console.log(startsWith);

//5)
function getStringLists(array) {
    const stringArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const currentItem = array[i];
  
      if (typeof currentItem === "string") {
        stringArray.push(currentItem);
      }
    }
  
    return stringArray;
  }
  const mixedArray = [1, "apple", true, "orange", {}, "banana", "pear"];
  const stringArray = getStringLists(mixedArray);
  console.log(stringArray); 
    
//6)
const country = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"];

const sentence = country.reduce((accumulator, currentValue, currentIndex) => {
  if (currentIndex === 0) {
    return currentValue;
  } else if (currentIndex === country.length - 1) {
    return `${accumulator}, and ${currentValue}`;
  } else {
    return `${accumulator}, ${currentValue}`;
  }
}, "");

const finalSentence = `${sentence} are north European countries`;

console.log(finalSentence); 

//7)
const countriess = ["Finland", "Fiji", "France", "Germany", "Greece", "Honduras", "Hungary", "Iceland", "India"];

const letterFrequencies = {};

countriess.forEach(country => {
  const initialLetter = country[0];
  if (letterFrequencies[initialLetter]) {
    letterFrequencies[initialLetter]++;
  } else {
    letterFrequencies[initialLetter] = 1;
  }
});

const mostFrequentLetter = Object.keys(letterFrequencies).reduce((a, b) => letterFrequencies[a] > letterFrequencies[b] ? a : b);

console.log(`The letter "${mostFrequentLetter}" is used most frequently as the initial letter for country names.`);

//8)
const constants = [2.7, 100, 9.8, 91, 3.14];

const [A, B, C, D, PI] = constants;

console.log(`The values of a, b, c, d, and e are ${A}, ${B}, ${C}, ${D}, and ${PI}, respectively.`);

//Exercise1)
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countriessss = ['Finland', 'Sweden', 'Norway'];

// Create an empty set
const mySet = new Set();

// Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  mySet.add(i);
}

console.log(mySet);

// Remove an element from a set
mySet.delete(5);
console.log(mySet);

// Clear a set
mySet.clear();
console.log(mySet);

// Create a set of 5 string elements from array
const countrySet = new Set(countriessss.slice(0, 5));
console.log(countrySet);

// Create a map of countriessss and number of characters of a country
const countryMap = new Map();
countriessss.forEach(country => {
  countryMap.set(country, country.length);
});

console.log(countryMap);

//Exercise2)
const x = [4, 5, 8, 9];
const y = [3, 4, 5, 7];

// Find the union of x and y
const union = [...new Set([...x, ...y])];
console.log(union); 

// Find the intersection of x and y
const intersection = x.filter(value => y.includes(value));
console.log(intersection); 

// Find the values in x that are not in y
const aWithoutB = x.filter(value => !y.includes(value));
console.log(aWithoutB); 

//Exercise3)
let countryy = [
    {
      name: "United States",
      languages: ["English", "Spanish"]
    },
    {
      name: "Canada",
      languages: ["English", "French"]
    },
    {
      name: "Mexico",
      languages: ["Spanish"]
    },
    {
      name: "France",
      languages: ["French"]
    },
    {
      name: "Spain",
      languages: ["Spanish"]
    },
    {
      name: "Russia",
      languages: ["Russian"]
    },
    {
      name: "China",
      languages: ["Chinese"]
    },
    {
      name: "India",
      languages: ["Hindi", "English"]
    }
  ];
function mostSpokenLanguages(countryy, n) {
    let languageCounts = {};
  
    // Count the number of countries that speak each language
    countryy.forEach(country => {
      country.languages.forEach(language => {
        if (language in languageCounts) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      });
    });
  
    // Convert the languageCounts object to an array of objects
    let languageCountsArray = [];
    for (let language in languageCounts) {
      languageCountsArray.push({[language]: languageCounts[language]});
    }
  
    // Sort the languageCountsArray in descending order of count
    languageCountsArray.sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0];
    });
  
    // Return the top n entries
    return languageCountsArray.slice(0, n);
  }
  
  console.log(mostSpokenLanguages(countryy, 10));
  console.log(mostSpokenLanguages(countryy, 3));
  
