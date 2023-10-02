console.log("task1")
function average(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10){
    var total =(x1+x2+x3+x4+x5+x6+x7+x8+x9+x10)/10;
    console.log(total);
}
average(1,2,3,4,5,6,7,8,9,10);

console.log("______________________________________");
console.log("task2")
function area (base,height){
  var area_oftriangle =(1/2 * height * base)
  console.log(area_oftriangle)
}
area(10,5);

console.log("______________________________________");
console.log("task3")
function age(years){
    return years*365;
}
console.log(age(10));

console.log("______________________________________");
console.log("task4")
function sum(x,y){
    return x+y ;
}
console.log(sum(10,5));
console.log("______________________________________");

console.log("task5")
var namesArray = ["ahmed", "mohamed", "samer", "Sarah", "taha", "aysel", "gamal", "tarek", "salma", "fatma"];
function getFirstName(namesArray){
  return namesArray;
}
console.log(getFirstName(namesArray[0]));
 console.log("______________________________________");
 console.log("task6")

function my_name(showname){
  return showname;
}
document.getElementById("myname").innerHTML=my_name("Ahmed samer mohamed taha");

console.log("______________________________________");
 console.log("task7")

 function convertHoursToSeconds(hours) {
    var seconds = hours * 3600;
    return seconds;
  }
  console.log(convertHoursToSeconds(3));
 
  console.log("______________________________________");
 console.log("task8")
  
 function suuum(x1,x2,x3,x4){
    var total=x1+x2+x3+x4;
    if (total>350){
        return true;
    } else {
        return false;
      }
 }
 document.getElementById("sum").innerHTML=suuum(100,50,30,200);

 console.log("______________________________________");
 console.log("task9")
 function checkIfZero(number) {
    if (number === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkIfZero(0));

  console.log("______________________________________");
 console.log("task10")
 function getModulo(num1, num2) {
    var modulo = num1 % num2;
    return modulo;
  }
  console.log(getModulo(18,5));
  console.log("______________________________________");
 console.log("task11")
 function largest(n1,n2){
    if(n1>n2){
        console.log(n1);
    }else if(n1==n2){
          console.log("they are equals");  
    } else{
        console.log(n2);

    }
 }
 console.log(largest(20,20));
 
 console.log("______________________________________");
 console.log("task12")
 //بحثت عنها وفهمتها وكتبتها
 function isNumber(input) {
    return !isNaN(input);
  }
  console.log(isNumber(45));
  console.log(isNumber("ahmed"));

  console.log("______________________________________");
 console.log("task13")
  //بحثت عنها وفهمتها وكتبتها
 var d = new Date();
 console.log(d);
