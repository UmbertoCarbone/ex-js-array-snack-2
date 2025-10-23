const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// 1 snack

//Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter((pag) => pag.pages > 300);
console.log(longBooks);
//Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((t) => t.title);
console.log(longBooksTitles);
//Stampa in console ogni titolo nella console.
longBooksTitles.forEach((t) => console.log(t));

// 2 snack

//Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter((book) => book.available === true);
console.log(availableBooks);
//Crea un array (discountedBooks)
//  con gli availableBooks,
//  ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map((b) => ({
  ...b,
  price: (parseFloat(b.price) * 0.8).toFixed(2) + "€",
}));
console.log(discountedBooks);

//Salva in una variabile (fullPricedBook)
//  il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((b) =>
  b.price.match(/^[0-9]+\.00€$/)
);
console.log(fullPricedBook);

// 3 snack
//Creare un array (authors) che contiene gli autori dei libri.
const authors = books.map((b) => b.author);
console.log(authors);

//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAdults = authors.every((a) => a.age >= 18);
console.log(areAuthorsAdults);

//Ordina l’array authors in base all’età, senza creare un nuovo array.
authors.sort((a, b) => a.age - b.age);
console.log(authors);
// 4 snack
/* Snack 4 - Calcola l’età media
Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri. */
const ages = books.map((b) => b.author.age);
const agesSum = ages.reduce((acc, age) => acc + age, 0);
const agesAvg = (agesSum / ages.length).toFixed(2);
console.log("Età media autori:", agesAvg);
