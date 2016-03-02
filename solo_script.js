// ! ! !
// Three Bugs

//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
//var arrayBoo = ["Boo", "11435", "54000", 3];
//var arrayScout = ["Scout", "6243", "74750", 5];
//arrays have been attached to function Person to input property names for each cell
var Atticus = new Person("Atticus", "2405", "47000", 3);
var Jem = new Person("Jem", "62347", "63500", 4);
var Boo = new Person("Boo", "11435", "54000", 3);
var Scout = new Person("Scout", "6243", "74750", 5);
//var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var personArray = [Atticus, Jem, Boo, Scout];
var adjustedSalary = [];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');
//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'

console.log(personArray);//logs out 4 new Person arrays within personArray

for (var i = 0; i < personArray.length; i++) {
  adjustedSalary[i] = calculateSTI(personArray[i]);
}//loops through personArray containing 4 arrays
//attaching property names to each cell in person arrays above

function Person(name, id, salary, rank) {
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rank = rank;
}

function calculateSTI(array) {
  //newArray[0] = array[0];
  //var employeeNumber = array[1];
  //var baseSalary = parseInt(array[2]);
  //var reviewScore = array[3];
  var name = array.name;
  var employeeNumber = array.id;//places employeeNumber of each array into object
  var reviewScore = array.rank;//places ranking of each array into object
  var baseSalary = parseInt(array.salary);//turns string to intiger and places salary of each array into object
  var bonusPercent = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if (bonus > 0.13) {
    bonus = 0.13;
  }

  var roundedSalary = Math.round(baseSalary);
  var newSalary = parseInt(roundedSalary * (1.0 + bonusPercent));
  var bonus = parseInt(roundedSalary * bonusPercent);

  return {name, baseSalary, bonus, newSalary};
}

function getBaseSTI(reviewScore) {
  var basePercent;
  switch (reviewScore) {
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
    default:
    case 0 :
      basePercent = 0;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber) {
  var yearAdjustment = 0;
  if (employeeNumber.length == 4) {
    yearAdjustment = 0.05;
  }

  return yearAdjustment;
}

function getIncomeAdjustment(baseSalary) {
  var incomeAdjustment = 0;
  if (baseSalary > 65000) {
    incomeAdjustment = 0.01;
  }

  return incomeAdjustment;
}

$(document).ready(function () {
  for (var i = 0; i < adjustedSalary.length; i++) {
    $('.container').append('<div class="person"></div>');

    var $el = $('.container').children().last();

    $el.append('<p>' + adjustedSalary[i].name + '</p>');
    $el.append('<p>' + adjustedSalary[i].baseSalary + '</p>');
    $el.append('<p>' + adjustedSalary[i].bonus + '</p>');
    $el.append('<p>' + adjustedSalary[i].newSalary + '</p>');
  }
});
