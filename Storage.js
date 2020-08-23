"use strict";

class Storage {
  constructor(drink, recept) {
    this.drink = drink;
    this.recept = recept;
  }
  reset() {
    this.drink.splice(0, 1);
    this.recept.splice(0, 1);
  }
  addValue(key, value) {
    return {
      key: key,
      value: value,
    };
  }
  getValue(key) {
    return {
      key: key,
    };
  }
  deleteValue(key) {
    if (key == true) {
      alert(true);
    } else alert(false);
  }
  getKeys() {
    let get = [this.addValue()];
    return get;
  }
  drinkStorage = {
    addValue() {
      alert(drink.recept);
    },
  };
}

let num = new Storage();

num = document.querySelector(".button-in");

//~~~
