'use strict';

let myContainer = document.getElementById('cookieStand');

// console.log(myContainer);

// global variables 

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  cookiesSold: [],

  soldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
      this.cookiesSold.push(hourlyCookies)
      this.soldTotal += hourlyCookies;
    }
  },

  render: function () {
    this.calCookiesSoldPerHr();
    // console.log('I am here');
    let seattleList = document.getElementById('cookieStand');
    let seattleheader = document.createElement('h1');
    seattleheader.textContent = 'Seattle'
    seattleList.appendChild(seattleheader);
    for (let i = 0; i < storeHours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total Cookies: ${this.soldTotal}`;
    seattleList.appendChild(li);

  },
};

seattle.render();


let tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  cookiesSold: [],

  soldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
      this.cookiesSold.push(hourlyCookies)
      this.soldTotal += hourlyCookies;
    }
  },

  render: function () {
    this.calCookiesSoldPerHr();
    // console.log('I am here');
    let tokyoList = document.getElementById('cookieStand');
    let tokyoheader = document.createElement('h1');
    tokyoheader.textContent = 'Tokyo'
    tokyoList.appendChild(tokyoheader);
    for (let i = 0; i < storeHours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total Cookies: ${this.soldTotal}`;
    tokyoList.appendChild(li);

  },
};

tokyo.render();


let Dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookiesSold: [],

  soldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
      this.cookiesSold.push(hourlyCookies)
      this.soldTotal += hourlyCookies;
    }
  },

  render: function () {
    this.calCookiesSoldPerHr();
    // console.log('I am here');
    let dubaiList = document.getElementById('cookieStand');
    let dubaiheader = document.createElement('h1');
    dubaiheader.textContent = 'Dubai'
    dubaiList.appendChild(dubaiheader);
    for (let i = 0; i < storeHours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total Cookies: ${this.soldTotal}`;
    dubaiList.appendChild(li);

  },
};

Dubai.render();


// let storeTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookiesSold: [],

  soldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
      this.cookiesSold.push(hourlyCookies)
      this.soldTotal += hourlyCookies;
    }
  },

  render: function () {
    this.calCookiesSoldPerHr();
    // console.log('I am here');
    let parisList = document.getElementById('cookieStand');
    let parisheader = document.createElement('h1');
    parisheader.textContent = 'Paris'
    parisList.appendChild(parisheader);
    for (let i = 0; i < storeHours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total Cookies: ${this.soldTotal}`;
    parisList.appendChild(li);

  },
};

Paris.render();


let lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  cookiesSold: [],

  soldTotal: 0,

  randomCustomerEachHr: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
  },

  calCookiesSoldPerHr: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
      this.cookiesSold.push(hourlyCookies)
      this.soldTotal += hourlyCookies;
    }
  },

  render: function () {
    this.calCookiesSoldPerHr();
    // console.log('I am here');
    let limaList = document.getElementById('cookieStand');
    let limaheader = document.createElement('h1');
    limaheader.textContent = 'Lima'
    limaList.appendChild(limaheader);
    for (let i = 0; i < storeHours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total Cookies: ${this.soldTotal}`;
    limaList.appendChild(li);

  },
};

lima.render();