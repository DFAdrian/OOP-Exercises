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
