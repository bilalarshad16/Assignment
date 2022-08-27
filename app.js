
//----------------------- BILAL ARSHAD -------------------------//
//----------------------- WEEKEND - BATCH 08 -------------------------//

/*Q1
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223 */

var num = +prompt("Enter a number to find the reverse of it");
var revNum = num.toString().split("").reverse().join("");
document.write("<h2>The Reverse of" + num + "is :" + revNum + "</h2>");


/* Q2.
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward */

var text = prompt("Enter a number to find wether it's palindrom or not");
var revText = text.split("").reverse().join("");
if (text === revText)
{
    document.write("<h2>" + text + " : This word is Palindrom </h2>"); 
}
else 
{
    document.write("<h2>" + text + " : This word is not Palindrom </h2>"); 
}


/*Q3. 
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */

var nam = prompt("Enter any word to find it possible combinations")
var array = [];
for (var i = 0; i < nam.length; i++)
{
    for (var j = 0; j < nam.length; j++)
    {
       if(nam.slice(i,j+1)!=="")
       {
        array.push(nam.slice(i,j+1));

       }
    }
}
document.write(`<h2>The possible combinations of ${nam} is ${array}</h2>`);

/*Q4. 
Write a JavaScript function that returns a passed string with letters in 
alphabetical order. Example string : 'webmaster' Expected Output :'abeemrstw' */

function alphabetical(a,b)
{
    var a = prompt("Enter a word to place in alphabetical order");
    var b = a.split("").sort().join("");
    document.write("The alphabetical order of " + a + " is :" + b + "</h2>");
}
alphabetical();


/*Q5. 
Write a JavaScript function that accepts a string as a parameter and converts 
the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox' */

function upperCase(word) 
{
    var word = prompt("Enter any sentence to find it fist letter capital");
    var b = word.toLowerCase().split(" ");
    for (var i = 0; i < b.length; i++) {
        b[i] = b[i].charAt(0).toUpperCase() + b[i].substring(1)
    }
    return b.join(" ");
}
document.write(upperCase());

/* Q6. 
Write a JavaScript function that accepts a string as a parameter and find 
the longest word within the string. Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

function longWord() 
{
    var word = prompt("Enter your sentence to find largest word: ");
    var splitVal = word.split(" ");
    var b = "";
    for (var i = 0; i < splitVal.length; i++)
    {
        if (splitVal[i].length > b.length) 
        {
            b = splitVal[i];
        }
    }
document.write("<h2> Actual String is : " + word + "</h2>")
document.write("<h2> Longest word in String is : " + b + "</h2")
}
longWord();


/* Q7. 
Write a JavaScript function that accepts a string as a parameter and counts 
the number of vowels within the string. Example string : 'The quick brown fox'
Expected Output : 5 */

function countVowel(){
    var word = prompt("Please enter a string");
    const reg = /[aeiou]/gi;
    var charsToMatch = word.match(reg);
    document.write(`<h2> The total Vowels in sentence ${word} is : ${charsToMatch.length}</h2>`);
}
countVowel();

/* Q8. 
Write a JavaScript function that accepts a number as a parameter and check 
the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself. */

function checkPrime()
{
    var num = +prompt("Enter a positive number: ");
    var flag = true;
    if (num === 1) 
{
    console.log("1 is neither prime nor composite number.");
}
else if (num > 1) 
{
for (var i = 2; i < num; i++)
{
if (num % i === 0) 
{
flag = false;
break;
}
}
if (flag)
{
   document.write("<h2> " + num +  "is a prime number </h2>");
 } 
 else {
        document.write("<h2> " + num +  "is a not prime number");
    }
}
}
checkPrime();


/* Q9. 
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: 
object, boolean, function, number, string, and undefined */

function dtypes(val)
{
    return typeof(val)
}
console.log(dtypes(true));

/* Q10. 
Write a JavaScript function which will take an array of numbers stored 
and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4 */

function secondGreatest(str){
    var sortNum = str.sort();
    document.write(`<h2> ${sortNum.join(" ")} </h2>`);
    var findLength = str.length-2;
    document.write(`<h2> The Second Greatest no is : ${str[findLength]} from last value</h2>`);
    document.write(`<h2> The Second Greatest no is : ${str[1]} from start value</h2>`);
}
secondGreatest([5,1,4,3,2]);