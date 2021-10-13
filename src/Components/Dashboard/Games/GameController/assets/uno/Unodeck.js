const unocards = require("./unocards").default;

let deck = [];

for (let unoCard in unocards) {
  deck.push(unocards[unoCard]);
}

let swap, rand;
for (let i = 0; i < deck.length; ++i) {
  rand = Math.floor(Math.random() * deck.length);
  swap = deck[i];
  deck[i] = deck[rand];
  deck[rand] = swap;
}

export default deck;
