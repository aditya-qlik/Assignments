/* eslint-disable no-extend-native */
/* eslint-disable no-console */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-object */
const myDate = new Date('June 18, 2025');
console.dir(myDate);
console.log(myDate.getFullYear());

const names = new Array('adi', 'alok');
const adi = new Object({
        name: 'adi',
});
const span = document.createElement('span');

String.prototype.sarcastic = function() {
        // make sarcastic
        return [...this].map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]()).join('');
        // const sarcastic = this.split('')
        //         .map((char, i) => {
        //                 if (i % 2) {
        //                         return char.toUpperCase();
        //                 }
        //                 return char.toLowerCase();
        //         })
        //         .join('');
        // return sarcastic;
};

function Pizza(toppings = [], customer) {
        console.log('Making a pizza');
        // save the toppings that were passed in, to this instance of pizza
        this.toppings = toppings;
        this.customer = customer;
        this.id = Math.floor(Math.random() * 16777215).toString(16);
        this.slices = 10;
        // this.eat = function () {
        //   if (this.slices > 0) {
        //     this.slices = this.slices - 1;
        //     console.log(`CHOMP you now have ${this.slices} left!`);
        //   } else {
        //     console.log(`Sorry! No slices left!`);
        //   }
        // }
}

Pizza.prototype.eat = function() {
        if (this.slices > 0) {
                this.slices = this.slices - 1;
                console.log(`CHOMP you now have ${this.slices} left!`);
        } else {
                console.log(`Sorry! No slices left!`);
        }
};

Pizza.prototype.describe = function() {
        return `This pizza is for ${this.customer} with the toppings ${this.toppings.join(',')} and there are ${
                this.slices
        } left!`;
};

const pepperoniPizza = new Pizza(['pepperoni'], 'adi kumar');
const canadianPizza = new Pizza(['pepperoni', 'mushrooms', 'onion'], 'alok kumar');

// const button1 = document.querySelector('.one');
// const button2 = document.querySelector('.two');

// function tellMeAboutTheButton() {
//   console.log('outside', this);
//   setTimeout(() => {
//     console.log('inside', this);
//     this.textContent = 'You Clicked Me';
//   }, 1000);
// }

// button1.addEventListener('click', tellMeAboutTheButton);
// button2.addEventListener('click', tellMeAboutTheButton);
