alert('This alert is external file')

// String and methods   
let fn ="Tushar"; //String
let ln ="Patil"; //String
//let fullname = fn + " " + ln;
let fullname = fn.concat(" ").concat (ln);
console.log(fullname);

let isPresrnt = fn.includes("h") // iSPresrnt
console.log(isPresrnt);

console.log(fn.charAt(2));

console.log(fn.endsWith("h"));

console.log (fn.startsWith("T"));

var result ="I am Tushar Patil".split(" ");
console.log(result);

console.log(result.join("-"));

var numb1 = 10;

var strNumber = numb1.toString();
console.log(strNumber);

console.log(typeof(strNumber));

var output =strNumber + 10;
console.log(output);

//console.log(number1.toFixed(2));

let str2 = "1999";
console.log(parseInt(str2));

let currentdate = new Date();
console.log(currentdate);   
console.log(typeof currentdate);

let dt ="2024-01-01";
console.log(new Date(dt));

console.log(new Date("10-10-2024"));

console.log(currentdate.getMonth());

console.log(currentdate.getFullYear()+"_"+(currentdate.getMonth()+1)+"_"+currentdate.getDate());

currentdate.setDate(10);    
currentdate.setMonth(9);
console.log(currentdate);

// Array and methods

let arrayofnumber =[0,2,4,6,8,10,12,14,16,18,20];

//console.log(arrayofnumber(2));
console.log(arrayofnumber.length);

//let arrayofstring =[Tushar,Omkar,Ashif,Priyanka,Rohit,Shubham,Shruti,Vishal];

let obj1 = {Firstname:"Tushar",Lastname:"Patil",age:23,city:"Pune"}; 
//fullName:function(){
  //  return this.firstName+" "+this.lastName;        
//};

//console.log(obj1.fullName());   

//let arrayofobject ={Firstname:"Ashif",Lastname:"Nadaf",age:23,city:"Pune"}, {Firstname:"Omkar",Lastname:"Kale",age:24,city:"Kolhapur"};

    //arrayofstring.includes("Tushar");
   // console.log(arrayofstring.includes("Tushar"));

    let arr =[1,"Rahul","Male",true,["Javascript","Html","Css"]];
    console.log(arr[4].length);

let s1 = new Set();
s1.add(0);

s1.add(10);

s1.add(11);

s1.add(15);

s1.add(11);

s1.add(15);

console.log(s1.size);















