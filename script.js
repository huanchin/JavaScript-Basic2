'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*************** OR ****************/
// the OR operator short circuits when the first value is true
// and then immediately returns that truthy value without even evaluating the rest operand
// or, return the last operand if all of them are falsy
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(null || undefined); // undefined
console.log(3 || 5); // 3
console.log(5 || 3); // 5

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // restaurant.numGuests is undefined
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

/*************** AND ****************/
// the AND operator short circuits when the first value is falsy
// and then immediately returns that falsy value without even evaluating the second operand
// or, return the last operand if all of them are truthy
console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  // check restaurant.orderPizza if exist
  restaurant.orderPizza('mushrooms', 'spinach');
}

// another way to write:
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/******** The Nullish Coalescing Operator *********/
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // 10
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// return first non-nullish value
const guestCorrect = restaurant.numGuests ?? 10; // 0
console.log(guestCorrect);