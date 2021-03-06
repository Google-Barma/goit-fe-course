"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;
    const transObj = { id, type, amount };
    return transObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert(`На вашем счету не достаточно средств. Баланс: ${this.balance}`);
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
    // return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */

  getTransactionDetails(id) {
    let obj = this.transactions.find((item) => item.id === +id);

    return obj;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const oneTypes = this.transactions.filter((item) => item.type === type);
    return oneTypes.reduce((sum, current) => {
      if (current.type === type) return sum + +current.amount;
    }, 0);
  },
};

const buttonDepositRef = document.querySelector(".deposit__btn");
const buttonWithdrawRef = document.querySelector(".withdraw__btn");
const buttonBalanceRef = document.querySelector(".balance__btn");
const buttonFindIdRef = document.querySelector(".find-id__btn");
const buttonTypeOfDepositRef = document.querySelector(".type-of-deposit__btn");
const buttonTypeOfWithdrawRef = document.querySelector(
  ".type-of-withdraw__btn"
);

buttonDepositRef.addEventListener("click", () => {
  account.deposit(+prompt("Введите сумму:"));
});

buttonWithdrawRef.addEventListener("click", () => {
  account.withdraw(+prompt("Введите сумму:"));
});

buttonBalanceRef.addEventListener("click", () => {
  alert(account.getBalance());
});

buttonFindIdRef.addEventListener("click", () => {
  const getId = prompt("Введите номер транзакции:");
  const transaction = account.getTransactionDetails(getId);
  alert(
    `ID: ${transaction.id}, типа транзакции: ${transaction.type}, сумма: ${transaction.amount}`
  );
});

buttonTypeOfDepositRef.addEventListener("click", () => {
  alert(
    `Вы совершили операций на сумму: ${account.getTransactionTotal("deposit")}`
  );
});

buttonTypeOfWithdrawRef.addEventListener("click", () => {
  alert(
    `Вы совершили операций на сумму: ${account.getTransactionTotal("withdraw")}`
  );
});

// console.log(account.deposit(200));
// console.log(account.deposit(200));
// console.log(account.deposit(200));
// console.log(account.deposit(34));
// console.log(account.deposit(200));
// console.log(account.withdraw(304));
// console.log(account.deposit(340));
// console.log(account.deposit(304));
// console.log(account.withdraw(30));

// console.log(account.balance);

// console.log(account.getTransactionTotal("withdraw"));

// console.log(account.transactions);
