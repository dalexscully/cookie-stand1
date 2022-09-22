'use strict';

let allStores = [];

let tableElem = document.getElementById('class');

function randomCustomerEachHr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// *********** This is the Constructor Function **********

let CityArea = function (name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.cookiesSold = [];
  this.salestotal = 0;
  allStores.push(this);

};


// *********** This is the Prototype Methods ***********

CityArea.prototype.randomCustomerEachHr = function () {
  return randomCustomerEachHr(23, 65);
};

CityArea.prototype.calCookiesSoldPerHr = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let hourlyCookies = this.randomCustomerEachHr();
    this.cookiesSold.push(Math.floor(hourlyCookies * this.avgCookie));
    this.salestotal += this.cookiesSold[i];
  }
};

// console.log(this.calCookiesSoldPerHr);

function renderHeader() {
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'SiteLocation';
  row1.appendChild(th1Elem);

  for (let i = 0; i < storeHours.length; i++) {
    let h2Elem = document.createElement('th');
    h2Elem.textContent = storeHours[i];
    row1.appendChild(h2Elem);
  }

  let th4Elem = document.createElement('th');
  th4Elem.textContent = 'Daily Location Total';
  row1.appendChild(th4Elem);

}



renderHeader();


CityArea.prototype.render = function () {

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);


  let cityElem = document.createElement('td');
  cityElem.textContent = this.name;
  row2.appendChild(cityElem);

  for (let i = 0; i < this.cookiesSold.length; i++) {
    let td1Elem = document.createElement('td');
    td1Elem.textContent = this.cookiesSold[i];
    row2.appendChild(td1Elem);
  }

  let dailySaleOfElem = document.createElement('td');
  dailySaleOfElem.textContent = this.salestotal;
  row2.appendChild(dailySaleOfElem);
};

function renderfooter() {
  let row3 = document.createElement('tr');
  row3.textContent = 'Total';
  tableElem.appendChild(row3);

  let grandTotal = 0;

  for (let i = 0; i < storeHours.length; i++) {
    let Total = 0;
    for (let j = 0; j < allStores.length; j++) {
      Total += allStores[j].cookiesSold[i];

    }
    // console.log(Total);

    let td1Elem = document.createElement('td');
    td1Elem.textContent = Total;
    row3.appendChild(td1Elem);

    grandTotal += Total;

  }

  let td2Elem = document.createElement('td');
  td2Elem.textContent = grandTotal;
  row3.appendChild(td2Elem);
}
new CityArea('Seattle', 23, 65, 6.3);
new CityArea('Tokyo', 3, 24, 1.2);
new CityArea('Dubai', 11, 38, 3.7);
new CityArea('Paris', 20, 38, 2.3);
new CityArea('Lima', 2, 16, 4.6);


function renderAll() {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].calCookiesSoldPerHr();
    allStores[i].render();
  }
}


renderAll();

renderfooter();



// let seattle = {
//   name: 'Seattle',
//   minCustomers: 23,
//   maxCustomer: 65,
//   avgCookie: 6.3,
//   cookiesSold: [],

//   soldTotal: 0,

//   randomCustomerEachHr: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
//   },

//   calCookiesSoldPerHr: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
//       this.cookiesSold.push(hourlyCookies)
//       this.soldTotal += hourlyCookies;
//     }
//   },

//   render: function () {
//     this.calCookiesSoldPerHr();
//     // console.log('I am here');
//     let seattleList = document.getElementById('cookieStand');
//     let seattleheader = document.createElement('h1');
//     seattleheader.textContent = 'Seattle'
//     seattleList.appendChild(seattleheader);
//     for (let i = 0; i < storeHours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
//       seattleList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies: ${this.soldTotal}`;
//     seattleList.appendChild(li);

//   },
// };

// seattle.render();


// let tokyo = {
//   name: 'Tokyo',
//   minCustomers: 3,
//   maxCustomer: 24,
//   avgCookie: 1.2,
//   cookiesSold: [],

//   soldTotal: 0,

//   randomCustomerEachHr: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
//   },

//   calCookiesSoldPerHr: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
//       this.cookiesSold.push(hourlyCookies)
//       this.soldTotal += hourlyCookies;
//     }
//   },

//   render: function () {
//     this.calCookiesSoldPerHr();
//     // console.log('I am here');
//     let tokyoList = document.getElementById('cookieStand');
//     let tokyoheader = document.createElement('h1');
//     tokyoheader.textContent = 'Tokyo'
//     tokyoList.appendChild(tokyoheader);
//     for (let i = 0; i < storeHours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies: ${this.soldTotal}`;
//     tokyoList.appendChild(li);

//   },
// };

// tokyo.render();


// let Dubai = {
//   name: 'Dubai',
//   minCustomers: 11,
//   maxCustomer: 38,
//   avgCookie: 3.7,
//   cookiesSold: [],

//   soldTotal: 0,

//   randomCustomerEachHr: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
//   },

//   calCookiesSoldPerHr: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
//       this.cookiesSold.push(hourlyCookies)
//       this.soldTotal += hourlyCookies;
//     }
//   },

//   render: function () {
//     this.calCookiesSoldPerHr();
//     // console.log('I am here');
//     let dubaiList = document.getElementById('cookieStand');
//     let dubaiheader = document.createElement('h1');
//     dubaiheader.textContent = 'Dubai'
//     dubaiList.appendChild(dubaiheader);
//     for (let i = 0; i < storeHours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies: ${this.soldTotal}`;
//     dubaiList.appendChild(li);

//   },
// };

// Dubai.render();


// let Paris = {
//   name: 'Paris',
//   minCustomers: 20,
//   maxCustomer: 38,
//   avgCookie: 2.3,
//   cookiesSold: [],

//   soldTotal: 0,

//   randomCustomerEachHr: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
//   },

//   calCookiesSoldPerHr: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
//       this.cookiesSold.push(hourlyCookies)
//       this.soldTotal += hourlyCookies;
//     }
//   },

//   render: function () {
//     this.calCookiesSoldPerHr();
//     // console.log('I am here');
//     let parisList = document.getElementById('cookieStand');
//     let parisheader = document.createElement('h1');
//     parisheader.textContent = 'Paris'
//     parisList.appendChild(parisheader);
//     for (let i = 0; i < storeHours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
//       parisList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies: ${this.soldTotal}`;
//     parisList.appendChild(li);

//   },
// };

// Paris.render();


// let lima = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomer: 16,
//   avgCookie: 4.6,
//   cookiesSold: [],

//   soldTotal: 0,

//   randomCustomerEachHr: function () {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomers + 1) + this.minCustomers);
//   },

//   calCookiesSoldPerHr: function () {
//     for (let i = 0; i < storeHours.length; i++) {
//       let hourlyCookies = Math.ceil(this.randomCustomerEachHr() * this.avgCookie);
//       this.cookiesSold.push(hourlyCookies)
//       this.soldTotal += hourlyCookies;
//     }
//   },

//   render: function () {
//     this.calCookiesSoldPerHr();
//     // console.log('I am here');
//     let limaList = document.getElementById('cookieStand');
//     let limaheader = document.createElement('h1');
//     limaheader.textContent = 'Lima'
//     limaList.appendChild(limaheader);
//     for (let i = 0; i < storeHours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${storeHours[i]}: ${this.cookiesSold[i]}`;
//       limaList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies: ${this.soldTotal}`;
//     limaList.appendChild(li);

//   },
// };

// lima.render();
