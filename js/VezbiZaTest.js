/* Metod za presmetuvanje OSTATOK */
alert(15 % 9);
console.log(15 % 9);

/*Metod za dodavanje na varijabla(15 rezultat) */
x = 10;
y = 5;
console.log((x += y));

/*Proverka na tip */
var lastName = "Johnson";
console.log(typeof "lastName");

/*VEZBA*/
var person = {
  name: "John",
  age: 50,
};
console.log(person);

/*Use the slice method to return the word "bananas".*/
var txt = "I can eat bananas all day";
var x = txt.slice(10, 17);

console.log(x);

/* Use the correct String method to replace the word "Hello" with the word "Welcome".*/
var txt = "Hello World";
txt = txt.replace("Hello", "Welcome");
console.log(txt);

/*Use the correct Array method to remove the last item of the fruits array.*/
var fruits = ["Banana", "Orange", "Apple"];
fruits.pop();

/*Create a Date object and alert the current date and time.*/
var da = new Date();
console.log(da);

/*Use the correct Date method to extract the year (four digits) out of a date object.*/
var d = new Date();
year = d.getFullYear();
console.log(year);

/*Use the correct Date method to get the month (0-11) out of a date object.*/
var dat = new Date();
month = dat.getMonth();

/*Use the correct Date method to set the year of a date object to 2020.*/
var yea = new Date();
yea.setFullYear(2020);

/*Use the correct Math method to create a random number.*/
var r = Math.random();

/* Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".*/
var age = n;
var voteable = age < 18 ? "Too young" : "Old enough";
alert(voteable);

/* Create a loop that runs from 0 to 9. */
var i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

/* Create a loop that runs through each item in the fruits array.*/
var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

/* Create a loop that runs as long as i is less than 10.*/
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

/* Create a loop that runs as long as i is less than 10, but increase i with 2 each time.*/
var i = 0;
while (i < 10) {
  console.log(i);
  i = i + 2;
}

/* Make the loop stop when i is 5.*/
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}

/* Make the loop jump to the next iteration when i is 5.*/
for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
