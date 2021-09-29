var nomeDuplicados = [
  "oo",
  "ratoato",
  "roeuoeu",
  "aa",
  "roupaoupa",
  "dodo",
  "reiei",
  "dee",
  "romaoma",
];

var uniqueName = "BANANA";
console.log(uniqueName);

var inicial = Math.round(uniqueName.length / 2);
var final = uniqueName.length;

console.log(inicial, final);

var mediaInicial = uniqueName.slice(0, inicial);
var mediaFinal = uniqueName.slice(inicial, final);

if (mediaInicial !== mediaFinal) {
  mediaInicial = uniqueName.slice(0, final / 2 + 1);
} else {
  mediaInicial = uniqueName.slice(inicial[0], inicial);
}

console.log(mediaInicial);
