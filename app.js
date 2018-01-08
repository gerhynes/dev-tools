const dogs = [{ name: "Snickers", age: 2 }, { name: "Hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, I am a %s string", "test");

// Styled
// console.log('%c I am some great text', 'font-size: 50px; background: red;');

// warning!
console.warn("OH NOOOOO!!");

// Error :|
console.error("Feck!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 2, "That is wrong");

const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Wes");

// timing
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("Fetching data");
  });

// table
console.table(dogs);
