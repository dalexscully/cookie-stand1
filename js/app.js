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

// ** CALLED ON SUBMIT ACTION
function handleSubmit(Event){
  // ** STOP DEFAULT BEHAVIOR
  Event.preventDefault();

  // ** GATHER INFORMATION FROM **
  let name = Event.target.LocationName.value;
  let minCustomer = Event.target.MinCustomer.value;
  let maxCustomer = Event.target.MaxCustomer.value;
  let avgCookie = Event.target.AvgCookie.value;

  // ** CREATE NEW LOCATION OBJECT VIA CONSTRUCTOR **
  let myNewStore = new CityArea(name, minCustomer, maxCustomer, avgCookie);
  myNewStore.calCookiesSoldPerHr();
  myNewStore.render();
  // RENDER OUR LOCATION ON SCREEN **

  // ** CLEAR FORM FOR THE NEXT INPUT **
  // allStores.reset();
  let tfoot = document.getElementById('tablefooter');
  tfoot.textContent = '';
  renderfooter();
}

// ** STEP 2: ATTACH EVENT LISTENER: type of event, and our callback functio or event handler ****
let formElement = document.getElementById('allStores-form');
formElement.addEventListener('submit', handleSubmit);

function renderfooter() {
  let tfoot = document.getElementById('tablefooter');
  let row3 = document.createElement('tr');
  row3.textContent = 'Total';
  tfoot.appendChild(row3);

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

