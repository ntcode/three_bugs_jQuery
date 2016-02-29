// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array[0];

  var employeeNumber = array[1];
  var baseSalary = parseInt(array[2]);
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }


  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
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

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
var peopleArray = [];

var arrayAtticus = new People("Atticus", "47000", "4230", "51230");
var arrayJem = new People("Jem", "63500", "3810", "67310");
var arrayBoo = new People("Boo", "54000", "2160", "56160");
var arrayScout = new People("Scout", "74750", "9718", "84467");

$(document).ready(function(){
  for(var i = 0; i < peopleArray.length; i++){
    appendDom(peopleArray[i]);
  }
});

function People (name, salary, bonus, totalCompensation){
  this.name = name;
  this.salary = salary;
  this.bonus = bonus;
  this.totalCompensation = totalCompensation; 
  peopleArray.push(this);
}

function appendDom(object){
  $('.container').append('<div class="person"></div>');

  var $el = $('.container').children().last();

  $el.append('<p>' + object.name + '</p>');
  $el.append('<p>' + object.salary + '</p>');
  $el.append('<p>' + object.bonus + '</p>');
  $el.append('<p>' + object.totalCompensation + '</p>');
}




