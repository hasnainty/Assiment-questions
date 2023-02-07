// . Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// let x = prompt("Enter the number")
// let p = Number.parseInt(x)
// if (x>=65 && x<=90){
//     console.log("Uppercase")
// }
// else if (x>=97 && x<=122){
//     console.log("Lowercase")
// }
// else{
//     console.log("number")
// }


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// let x = prompt("Enter the first number")
// let p = Number.parseInt(x)
// let y = prompt("Enter the second number")
// let q = Number.parseInt(y)
// if (p>q){
//   console.log("p =",p)
// }
// else if(p<q){
//     console.log("q =",q)
// }
// else{
//     console.log("p and q=",p,q);
// }


// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// let p = prompt("Enter the number")
// let q = Number.parseInt(p)
// if (p<0){
//     console.log("Negative Number")
// }
// else if (p>0){
//     console.log("Positive Number")
// }
// else{
//     console.log("Zero")
// }


// 4. Write program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise 


// let x = prompt("Enter the character")
// if (x =="a" ||x == "e" || x == "i" || x == "o" || x == "u"){
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// let x = "12345"
// let y = prompt("Enter your password")
// if (y==x){
//     console.log("Correct! The password you entered matches the original password")
// }
// else {
//     console.log("Incorrect password")
// }


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 21;
// if (hour < 18) {
// console.log ("Good day");
// }
// else{
// console.log("Good evening");
// }


// let x = +prompt("Enter the time")
// if (x>=0000 && x<1200){
//     console.log("Good morning")
// }
// else if(x>1200 && x<1700){
//     console.log("Good afternoon")
// }
// else if (x>=1700 && x<2100){
//     console.log("Good evening")
// }
// else if(x >=2100 && x<=2359){
//     console.log("Good night")
// }

// console.log("har\"".lenght)

// let num = [1,2,3,4,5]
// let num2;
// do {
//  num2 = +prompt("Enter the number")
//   num.push(num2);
// }while(num2 !=0)
// console.log(num);


// let num3 = [1,30,40,50,6,7,8,8,9,1,11,12]
// let result = num3.filter((a)=>{
//     return 
// })
// console.log(result)

// let arr = [1,2,3,40,5,60,7,80,90,110,120,130];
// let result = arr.filter((a)=>{
//   return (a%10==0)
// })
// console.log(result)


// let num = [1,2,3,4,5]
// let num2 = num.map((a)=>{
//   return a * a
// })
// console.log(num2)

// let arr = [1,2,3,4,5,6]
//  let newArr = arr.reduce((n1,n2)=>{
//   return n1 * n2
//  }) 
//  console.log(newArr)



// let a = Math.floor(((Math.random()*100)+1))
//     let input = prompt('Guess the number')

//             while(a !== input){
//                 if(a == input){
//                     break;
//                 } 
//                 else if(input>a){
//                     alert("You have guessed greater number")
//                     input = prompt('Guess the number')
//                 }
//                 else{
//                    alert("You have guessed lower number")
//                    input = prompt('Guess the number')
//                 }


//             }
//             alert("Guessed Number is correct")


// let x = prompt("Enter your number")
// let score = 0;
// let y = Math.floor(Math.random() * 100)
// do{
//     x = Number.parseInt(prompt());
//     if(x>y){
//         console.log(`${x} is greater than the Random Number`)
//     } else if(x<y){
//         console.log(`${x} is smaller than the Random Number`)
//     } else if(x==y){
//         console.log(`You Win The Match!!`)
//     }
//     score += 1;
// }while(x!=y)
// console.log("Time to play the match:", score)
// console.log(`Your Score is: ${(100 - score)}`)


// let num2 = prompt("Enter your number")
// let score = 0;
// let num = Math.floor(Math.random() * 100)
// do{
//      if (num2 > num){
//     console.log(`${num2} is greater than the Random Number`)
//   }
//   else if(num2 < num){
//     console.log(`${num2} is smaller than the Random Number`)
//   }
//   else if (num2 == num){
//     console.log(`Congrates your number is matched by original number`)
//   }
//   score =+ 1;
// }while(num2!=num)
// console.log("time to play the match:", score)
// console.log(`Your score is :${(100 - score)}`)


// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let name = [];


// 2. Declare an empty array using JS object notation to store
// student names in future.


// let obj = [];
// let newobj = obj.push(12)
// console.log(newobj)

// let arr = new Array();
// console.log(arr)
// let stdarr = arr.unshift();
// console.log(stdarr);

// 3. Declare and initialize a strings array.

// let num = ["1,2,3,4,5"]
// console.log(num)


// 4. Declare and initialize a numbers array.

// let num2 = [1,2,3,4,5]
// console.log(num2)



// 5. Declare and initialize a boolean array.

// let num1 = 100;
// let num2 = 200;
// if (num1 <= num2 ){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let myAyy= []
// for (i=0; i<=5;i++){
//     (i%2===0)?(myAyy.push(true)):(myAyy.push(false));
// }
// console.log(myAyy);


// 6. Declare and initialize a mixed array.






// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser

// let edu = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PHD"]
// console.log("Qualifications:")
// for (i = 0; i < edu.length; i++) {
//   console.log(i + ")", edu[i]);
// }




// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// let student = ["Hasnain","Ali","Zaheer"]
// let marks = [300,250,350]
// let total = 500;
// let per1= (marks[0]/total)*100;
// let per2= (marks[1]/total)*100;
// let per3= (marks[2]/total)*100;
// console.log("Score of "+student[0]+" is" ,marks[0]+". Percentage: " + per1+"%");
// console.log("Score of "+student[1]+" is" ,marks[1]+". Percentage: " + per2+"%");
// console.log("Score of "+student[2]+" is" ,marks[2]+". Percentage: " + per3+"%");


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


//  a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// let color = ["Yellow","Green","Blue","Black","Pink"];
// let newColor = prompt("Inter your color")
//  color.unshift(newColor)
// console.log(color)

// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.

// let color = ["Yellow","Green","Blue","Black","Pink"];
// let newColor = prompt("Inter your color")
//  color.push(newColor)
// console.log(color)


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.

// let color = ["green","blue","white","purple"]
// let newColor1 = prompt("Enter your color")
// let newColor = prompt("Enter your color")
// color.unshift(newColor,newColor1)
// console.log(color)



// d. Delete the first color in the array. Display the updated
// array in your browser.

// let color = ["black","blue","pink","yellow"]
//  delete color[0]
//  console.log(color)

// e. Delete the last color in the array. Display the updated
// array in your browser.


// let color = ["Naqpo","Karpo","Sarpo","Marpo"]
// delete color[3]
// console.log(color)


// f. Ask the user at which index he wants to add a color 
// & color name. Then add the color to desired 
// index. . Display the updated array in your 
// browser.


// let color = ["Naqpo","Karpo","Sarpo","Marpo"]
// let newIndex = prompt("Add your Index Number")
// let newcolor = prompt("Enter your color")
// color.splice(newIndex,1,newcolor)
// console.log(color)


// g. Ask the user at which index he wants to delete
// color(s) & how many colors he wants to delete. Then
// remove the same number of color(s) from user-defined
// index. . Display the updated array in your
// browser.

// let color = ["Black","Blue","White","Yellow","Green"]
// let index = +prompt("Enter Your index number")
// let deleteColor = +prompt("Enter your colors want to delete")
// let newIndex = color.splice(index,deleteColor)
// console.log(newIndex)


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.


// let scores = [320,445,644,875,6,54]
// console.log("Scores of Students :" + scores)
// scores.sort()
// console.log("Ordered Scores of Students: " + scores)

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 

// let cities = ["Islamabad","Skardu","peshawar","Muree"]
// console.log("cities list:", cities)
// let newcities = cities.slice(0,3)
// console.log(newcities)



// 2. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// let arr = ["This","is" , "my", "cat"];
// let newarr = arr.join(",")
// console.log("Array:")
// console.log(newarr)
// console.log("string:")
// let arr2 = arr.join(" ")
// console.log(arr2)


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)



// let arr = []
// let newarr = prompt("Enter your array name")
// arr.push(newarr)

// console.log(arr)



// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method


// let mobile = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// function submit() {
//   let data = document.getElementById('drop');
//   for(i=0;i<mobile.length;i++){
//     let mydata = mobile[i];
//     data.innerHTML+= `<option value="${mydata}">${mydata}<option>`
//   }
// }
// submit();


//   1. Declare and initialize an empty multidimensional array.
// (Array of arrays)



// rendering method by map

// let arr = [["sew", "jhf"], ["dafa", "jsdfhjshf"]]
// let arron = [
//     {
//         "name": "zahoor",
//         "fatherName": "Abdus Samad"
//     },
//     {
//         "name": "hasnain",
//         "fatherName": "Ghuam rasool"
//     },
//     {
//         "name": "Ali Zaherr",
//         "fatherName": "Abdus Samad"
//     },
//     {
//         "name": "ISmail",
//         "fatherName": "Abdur Rehman"
//     }
// ]
// // console.log(arr)

// let vvv = arron.map((e) => {
//     return `my name is ${e.name} my father name is ${e.fatherName}`


// })
// console.log(vvv)
// 2. Declare and initialize a multidimensional array 
// representing the following matrix:



// for (let i = 1; i < 20; i = i + 5){
//   for (let a = i; a <  i + 5; a++){
//     document.write( a + " " )
//   }
//   document.write("<br>")
// }


// let arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// console.log(arr)
// // 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i<=10;i++){
//   console.log(i)
// }



// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let num = +prompt("Enter a number to show its Multiplication table")
// let num2 = +prompt("Enter length multiplication table")
// for (let i = 1;i<=num2;i++){
// let table = num*i;
// document.write(num + "*" + i + "=" +table +"<br>");
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]



// let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i]+"<br>")
// }
// for (let i = 0; i < fruits.length; i++) {
//   document.write("Element at index "+i+" is ",fruits[i]+"<br>")
// }


// 8. Write a program to identify the largest number in the
// given array.


// let num = [1, 2, 3454, 235, 563, 4, 5]
// let num1 = Math.max(...num)
// console.log(num1)




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// let order = prompt("Wellcome to our bakery. what you want to order sir/mam")
// switch (order) {
//   case 'cake':
//     document.write("cake is <strong> availbe </strong> at index 1 in our bakery")
//     break;
//   case 'apple pie':
//     document.write("apple pie  <strong>available</strong> at index 2 in our bakery")
//     break;
//   case 'patties':
//     document.write("patties is <strong>available</strong> at index 5 in our bakery")
//     break;
//   case 'cookie':
//     document.write("cookie is <strong>available</strong> at index 3 in our bakery")
//     break;
//   case 'chips':
//     document.write("chips is <strong>available</strong> at index 4 in our bakery")
//     break;
//   default:
//     document.write(`we are sorry. ${order}is <strong>not available</strong> in ourr bakery`)
//     break;
// }



// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 129, 9]
// let b = Math.min(...A)
// console.log(b);




// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// a

// for (let i = 1; i <= 15; i++) {
//   console.log(i)
// }

// b

// for (let i = 10; i > 0; i--) {
//   console.log(i)
// }


// // c
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }


// d
// for (let i = 1; i < 20; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// e
// for (let i = 2; i <= 20000; i++) {
//   if (i % 2000 == 0) {
//     console.log(i)
//   }
// }

// for (let i = 1; i <= 15; i++) {
//   console.log(i)
// }



// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i)

//   }

// }

//  STRING METHODS
//  1. Write a program that takes two user inputs for first and
//  last name using prompt and merge them in a new variable
//   titled fullName. Greet the user using his full name.

// let firstN = prompt("Please Enter you first name")
// let lastN = prompt("Please Enter you last name")
// console.log(firstN, lastN)



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// let phone = prompt("Name of your favorite phone")
// console.log("My favorite phone name is", phone)
// console.log("The length of string:", phone.length)


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let name1 = "pakistani"
// let new1 = name1.indexOf('n')
// console.log(`The index of 'n'"${name1}" is : ${new1}`)



// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// let word = "Hello World"
// let newWord = word.lastIndexOf("l")
// console.log(`the index of letter 'l' "${word}" is : ${newWord}`)


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// let num = "Pakistani"
// let num1 = num.charAt("3")
// console.log(num1);


// 6. Repeat Q1 using string concat() method.


// let name = prompt("Enter your first name")
// let Nname = prompt("Enter your second name")
// let fullname = name.concat(" ", Nname)
// console.log(fullname)

// . Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let name = "Hyderabad"
// console.log("City Name :", name)
// let newName = name.replace("Hyder", "Islam")
// console.log("After replacement :", newName)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// let text = "Ali and Sami are best friends They play cricket and football together"
// console.log("Before :", text)
// let newText = text.replace(/and/g, "& ")
// console.log("After replacement :", newText)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let num = "427"
// console.log(typeof num)
// console.log("Type", typeof +num)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let input1 = prompt("Enter your message")
// console.log("User input :", input1)
// let message = input1.toUpperCase()
// console.log("Uppercase :", message)


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// function toTitleCase(str) {
//     return str.replace(
//         /\w\S*/g,
//         function (txt) {
//             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//         }
//     );
// }
// console.log(toTitleCase("hello"));


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// let num = 35.36;
// let newNum = num.toString()
// console.log(newNum.split('.').join(""));


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// let userName = prompt("Enter your input")
// let num;
// let arr = [];
// let arr1 = [];
// for (let i = 0; i < userName.length; i++) {
//     arr[i] = userName.split(' ');
//     arr1[i] = userName.charCodeAt(i);
//     if (arr1[i] !== 33 || arr1[i] !== 44 || arr1[i] !== 46 || arr1[i] !== 64) {
//         num = "Corret userName"
//     }
//     while (arr1[i] == 33 || arr1[i] == 44 || arr1[i] == 46 || arr1[i] == 64) {
//         alert("Please enter a valid name")
//         userName = prompt("Enter your input")
//         for (let i = 0; i < userName.length; i++) {
//             arr[i] = userName.split(' ');
//             arr1[i] = userName.charCodeAt(i);
//             if (arr1[i] !== 33 || arr1[i] !== 44 || arr1[i] !== 46 || arr1[i] !== 64) {
//                 break;
//             }
//         }
//     }
// }
// alert(num)


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:




// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// let order = prompt("Wellcome to our bakery. what you want to order sir/mam")
// let userOrder = order.toLocaleLowerCase()
// switch (userOrder) {
//     case 'cake':
//         document.write("cake is <strong> availbe </strong> at index 1 in our bakery")
//         break;
//     case 'apple pie':
//         document.write("apple pie  <strong>available</strong> at index 2 in our bakery")
//         break;
//     case 'patties':
//         document.write("patties is <strong>available</strong> at index 5 in our bakery")
//         break;
//     case 'cookie':
//         document.write("cookie is <strong>available</strong> at index 3 in our bakery")
//         break;
//     case 'chips':
//         document.write("chips is <strong>available</strong> at index 4 in our bakery")
//         break;
//     default:
//         document.write(`we are sorry. ${order}is <strong>not available</strong> in ourr bakery`)
//         break;
// }




// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of Karachi";
// let arry = [];
// for (i = 0; i < university.length; i++) {
//     arry[i] = university.split("");
//     let newrr = arry[i];
//     for (j = 0; j < newrr.length; j++) {
//         document.write(newrr[j] + "<br>")
//     }
//     break;
// }



// 17. Write a program to display the last character of a user
// input.

// let name1 = prompt("Enter your name")
// console.log("User input :", name1)
// let new1 = name1.length;
// new1 = new1 - 1;
// console.log("Last character of input :", name1[new1]);


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let str = "The quick brown fox jumps over the lazy dog"
// let newstr = [];
// for (let i = 0; i < str.length; i++) {
//     newstr = str.split(" ");
// }


// let str = "The quick brown fox jumps over the lazy dog";

// for (let i = 0; i < str.length; i++) {

// }
// function countOccurrences(string, word) {
//     var count = 0;
//     var lowerString = string.toLowerCase();
//     var lowerWord = word.toLowerCase();
//     var startIndex = 0;
//     while (true) {
//         var index = lowerString.indexOf(lowerWord, startIndex);
//         if (index === -1) {
//             break;
//         }
//         count++;
//         startIndex = index + lowerWord.length;
//     }
//     return count;
// }

// var string = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = countOccurrences(string, word);
// console.log(count);



// let items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// let userInput = prompt("enter......");
// let inputData = userInput.toLocaleLowerCase();
// if (items.includes(inputData)) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

// let name1 = ["snake", "water", "gun"]
// let input1;
// let position;
// let cpoint = 0;
// let upoint = 0;
// for (let i = 0; i <= name1.length; i++) {
//     input1 = prompt("Enter your choice: [snake,water,gun]").toLowerCase()
//     position = Math.floor(Math.random() * 3)
//     if (name1[position] == "snake" && input1 == "water")
//         cpoint++;
//     else if (name1[position] == "water" && input1 == "snake")
//         upoint++;
//     else if (name1[position] == "water" && input1 == "gun")
//         cpoint++;
//     else if (name1[position] == "gun" && input1 == "water")
//         upoint++;
//     else if (name1[position] == "snake" && input1 == "gun")
//         upoint++;
//     else if (name1[position] == "gun" && input1 == "snake")
//         cpoint++;
// }
// console.log("Computer points :", cpoint)
// console.log("User points :", upoint)
// if (cpoint > upoint || upoint < cpoint) {
//     if (cpoint > upoint) {
//         console.log("Computer win the game")
//     } else {
//         console.log("User win the game")
//     }
// } else if{
//     console.log("Game Draw")
// }