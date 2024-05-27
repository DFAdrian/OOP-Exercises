// Crear un array con 10 números y encontrar la suma total usando un bucle for.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// Dado un array de números, usar map para crear un nuevo array que
// contenga los cuadrados de los números originales.

// let updatedArr = arr.map((el) => Math.pow(el, 2));
// let updatedArr2 = arr.map((el) => el * el);
// console.log(updatedArr);

// Dado un array de números, usar filter para crear un
// nuevo array que contenga solo los números pares.

// let filtered = arr.filter((num) => num % 2 === 0);
// console.log(filtered);

// Dado un array de strings, usar sort para ordenar el array alfabéticamente.

// let letters = ["r", "a", "o", "s", "b"];
// console.log(letters.sort());

// Escribir una función que acepte un número
// y devuelva true si es par y false si es impar.

// function parcheck(numero) {
//   return numero % 2 === 0 ? "Par" : "Impar";
// }

// console.log(parcheck(1));
// console.log(parcheck(2));

// Escribir una función que tome dos números y devuelva su suma.

// const sum = (a, b) => a + b;
// console.log(sum(3, 3));

// Crear una función que acepte un array de números y
// devuelva un nuevo array con los números en orden inverso.

// let arr = [1, 2, 3, 3, 5, 6, 162, 8, 9, 10];

// arr.reverse();

// function rever(array) {
//   let updatedArr = [];
//   invirtiendoArr: for (let i = array.length; i > 0; i--) {
//     updatedArr.push(array[i - 1]);
//   }
//   return updatedArr;
// }

// console.log(rever([1, 2, 3, 3, 5, 6, 162, 8, 9, 10]));

// Usar un bucle for para imprimir los números del 1 al 100.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// Crear un bucle while que cuente de 10 a 1.

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Usar un bucle for...of para
// iterar sobre un array de nombres y saludar a cada nombre.

// let names = ["Liz", "Adrian", "Noah"];

// for (let i of names) {
//   console.log(`Hi ${i}`);
// }

// Crear un bucle for...in para iterar sobre las propiedades de un objeto.

// const yo = { job: "Ars Painting", children: 1, wife: "Liz" };

// for (let iter in yo) {
//   console.log(`${iter}: ${yo[iter]}`);
// }

// Escribir una función que tome
// un string y devuelva el número de vocales que contiene.

// const vocals = (str) => {
//   let counter = 0;
//   let voc = "aeiouAEIOU";

//   for (let letter of str) {
//     if (voc.includes(letter)) {
//       counter++;
//     }
//   }

//   return `Tiene ${counter} vocales`;
// };

// console.log(vocals("sfrta"));

// Crear una función que reciba un string y devuelva
// el mismo string con las palabras en orden inverso.

// function backwards(str) {
//   let back = str.split("");
//   return back.reverse().join("");
// }
// console.log(backwards("diez"));

// Crear un objeto persona con propiedades nombre, edad, y profesión,
// y luego imprimir cada propiedad.

// const persona = {
//   nombre: "Adrian",
//   edad: 28,
//   trabajo: "Ars Painting",
// };

// for (let el in persona) {
//   console.log(`${el}:${persona[el]}`);
// }

// Escribir una función que acepte un objeto y una clave, y
// devuelva el valor correspondiente a esa clave.

// const persona = {
//   nombre: "Adrian",
//   edad: 28,
//   trabajo: "Ars Painting",
// };

// function checkProperty(obj, clave) {
//   if (obj.hasOwnProperty(clave)) return `${obj[clave]}`;
//   else `not found`;
// }

// console.log(checkProperty(persona, "nombre"));

// Crear un objeto que represente un libro con propiedades título,
// autor, y año, y una función que imprima una frase describiendo el libro.

// const book = {
//   nombre: "Debt",
//   precio: 15.76,
//   editorial: "juninho records",
//   info() {
//     return information(this);
//   },
// };

// function information(book) {
//   return `EL libro se llama ${book.nombre}, con un precio de ${book.precio} de la editorial ${book.editorial}`;
// }

// console.log(book.info());

// function palindromeCheck(str) {
//   let lowerCase = str.toLowerCase().trim();
//   for (let i = 0; i < lowerCase.length; i++) {
//     console.log("jes");
//     for (let j = lowerCase.length - 1; j >= 0; j--) {
//       console.log(lowerCase[j]);
//       console.log(lowerCase[i]);
//       //   if (lowerCase[i] !== lowerCase[j - 1]) return `No es igual`;
//       //   else `Palinrome`;
//     }
//   }
// }

// console.log(palindromeCheck("abc"));

// const form = document.getElementById("form");
// const userName = document.getElementById("user-name");
// const userPassword = document.getElementById("user-password");
// const msj = document.getElementById("msj");
// const btn = document.getElementById("btn");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   msj.classList.remove("hide");
//   setTimeout(() => {
//     msj.classList.add("hide");
//     form.submit();
//   }, 3000);
// });

// const persona = {
//   nombre: "Adrian",
//   edad: 28,
//   trabajo: "Ars Painting",
// };

// function info() {
//   console.log(this.nombre);
// }

// info.bind(persona)();
// info.call(persona);
// info.apply(persona);

// POO PARA EDAD DE PERSONA PAR O IMPAR

// class Persona {
//   constructor(age) {
//     this.age = age;
//   }

//   par() {
//     return this.age % 2 === 0;
//   }
// }

// const check = new Persona(44);

// console.log(check.par());

// Crea una clase BankAccount con propiedades
// owner (dueño) y balance (saldo). Agrega métodos deposit y
// withdraw para añadir y retirar fondos, respectivamente.

// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposit(amount) {
//     return (this.balance += amount);
//   }

//   withdraw(amount) {
//     return amount > this.balance
//       ? console.log(`Insufficient founds`)
//       : (this.balance -= amount);
//   }
// }

// let newClient = new BankAccount("Adrian", 4000);

// console.log(newClient);
// newClient.deposit(2000);
// console.log(newClient);
// newClient.withdraw(2000);

// Crea una clase Library que administre una
// colección de libros. Debe tener métodos para agregar libros,
// buscar libros por título y eliminar libros.

// class Library {
//   constructor(books) {
//     this.books = [];
//   }

//   add(name) {
//     this.books.push(name.toLowerCase());
//   }

//   search(name) {
//     const searchedBook = this.books.find((book) => {
//       if (book == name.toLowerCase()) {
//         console.log(`${name} is in the library`);
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (!searchedBook) console.log(`${name} not found`);
//   }
// }

// const newLibrary = new Library();

// newLibrary.add("Harry Potter");
// newLibrary.add("Tom");
// newLibrary.add("JS");
// console.log(newLibrary);
// newLibrary.search("j");

// Crea una clase Product con propiedades name,
// price (precio) y quantity (cantidad). Agrega métodos
// para calcular el valor total del inventario y para agregar
// y quitar unidades del producto.

// class OnlineStore {
//   constructor() {
//     this.products = [];
//     this.productMap = new Map();
//   }
//   addProduct(product) {
//     this.products.push(product);
//     this.productMap.set(product.id, product);
//   }

//   getById(id) {
//     return this.productMap.get(id);
//   }

//   getByBrand(productBrand) {
//     return this.products.find(
//       (producto) => producto.brand.toLowerCase() === productBrand.toLowerCase()
//     );
//   }
// }

// const product1 = {
//   id: 123,
//   type: "Shoes",
//   brand: "Nike",
//   size: 12,
// };

// const product2 = {
//   id: 1234,
//   type: "Shoes",
//   brand: "New Balance",
//   size: 10,
// };

// const newStore = new OnlineStore();
// console.log(newStore.products);
// newStore.addProduct(product1);
// newStore.addProduct(product2);
// console.log(newStore.products);
// console.log(newStore.getById(123));
// console.log(newStore.getById(1234));
// console.log(newStore.getByBrand("new balance"));

// Crea una Budget App con poo

class Expense {
  constructor(amount, description) {
    this.amount = amount;
    this.description = description;
  }
}

class Budget {
  constructor() {
    (this.totalBudget = 0), (this.balance = 0), (this.expenses = []);
  }

  setBudget(amount) {
    if (/^\d*$/.test(amount)) {
      this.totalBudget = amount;
      this.balance = amount;
    } else {
      console.log(`${amount} solo debe contener numeros`);
    }
  }

  addExpense(amount, description) {
    if (amount > this.balance) {
      console.log("There is not enough money");
      return;
    }
    const expense = new Expense(amount, description);
    this.expenses.push(expense);
    this.balance -= amount;
  }

  expensesAmount() {
    let total = 0;
    this.expenses.forEach((el) => {
      total += el.amount;
    });
    return total;
  }

  expensesList() {
    return this.expenses;
  }
}

const adrian = new Budget();

adrian.setBudget(4000);
adrian.addExpense(2500, "Renta y carros");
adrian.addExpense(500, "cosas");
adrian.addExpense(50, "asdgfja");
console.log(adrian);
console.log(adrian.expensesAmount());
console.log(adrian.expensesList());
adrian
  .expensesList()
  .forEach((el) => console.log(`${el.amount} - ${el.description}`));
