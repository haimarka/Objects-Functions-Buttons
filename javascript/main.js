//1

// var buyArray = [];
// var button = document.getElementById("butt");
// var userInput = document.getElementById("input");
// button.addEventListener("click", function(){
//      buyArray.push(userInput.value)
//      console.log(buyArray);
//      if(buyArray.indexOf(userInput.value)==-1){
//         console.log("comes   twis");
//      }
//      return
// });

//2

// var sum = 0;
// var button = document.getElementById("butt")
// var userInput1 = document.getElementById("input1");
// var userInput2 = document.getElementById("input2");

// button.addEventListener("click",function (){
//     sum = Number(userInput1.value) + Number(userInput2.value);
//     console.log(sum);
// });

//3

// var button = document.getElementById("butt");
// button.addEventListener("click",function(){
//     button.style.backgroundColor = "red"
// });

//4

// var button = document.getElementById("butt");
// var para = document.getElementById("paragraph");
// button.addEventListener("click",function(){
//     para.innerText = `${Math.floor(Math.random()* 100)}`;
// });

//5

// var prodact = [
//     {
//         prodactName: "milki",
//         img: "https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_960_720.jpg"
//     },
//     {
//         prodactName: "kotej",
//         img: "https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_960_720.jpg"
//     },
//     {
//         prodactName: "dani",
//         img: "https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_960_720.jpg"
//     },
// ];
// var div = document.getElementById("father");


// for (let i = 0; i < prodact.length; i++) {
//     div.innerHTML += `<h1> ${prodact[i].prodactName}</h1>`
//     div.innerHTML += `<img src="${prodact[i].img}">`
// }

//6

// var array = [];
// var button = document.getElementById("butt");
// var userInput = document.getElementById("input1");
// button.addEventListener("click",function(){
//     array.push(userInput.value);
//     console.log(array);
// })

//7

// var paragraph = document.getElementById("para");
// paragraph.addEventListener("click",function(){
//     paragraph.innerText = Date();
// })

//8

// var paragraph = document.getElementById("para");
// paragraph.addEventListener("click",function(){
//     paragraph.innerText = new Date().getHours();
// })

//9

// var age = document.getElementById("input1");
// var paragraph = document.getElementById("para");
// paragraph.addEventListener("click",function(){
// paragraph.innerText = new Date().getFullYear() - 29;

// });

//10

// var array = [1,2,3,4,5];
// var userInput = document.getElementById("input1");
// var button = document.getElementById("butt");
// var paragraph = document.getElementById("para");
// button.addEventListener("click",function(){
//     for (let i = 0; i < array.length; i++) {
//         if(Number(userInput.value) == array[i]){
//             paragraph.innerText = "exist in the array"
//             return;
//         }
//         paragraph.innerText = "not in the array"
//     }
//     console.log(array);
//     console.log(userInput.value);
// });

//11

// var fullName = document.getElementById("input1");
// var paragraph1 = document.getElementById("para1");
// var paragraph2 = document.getElementById("para2");
// var button = document.getElementById("butt");
// button.addEventListener("click",function(){
//     var string = fullName.value;
//     var space = string.indexOf(" ");
//     paragraph1.innerText = string.substring("0",space);
//     paragraph2.innerText = string.substring(space);

// });

//12

// var userInput1 = document.getElementById("input1");
// var userInput2 = document.getElementById("input2");
// var button = document.getElementById("butt")
// button.addEventListener("click",function(){
//     inputL1 = userInput1.value;
//     inputL2 = userInput2.value;
//     console.log(inputL1.length);
//     console.log(inputL2.length);
// })

//13

// var clientArray = [];
// var buttonObject = document.getElementById("btnObject");
// var input1 = document.getElementById("input1")
// var input2 = document.getElementById("input2")
// var input3 = document.getElementById("input3")
// var div = document.getElementById("diva")

// buttonObject.addEventListener("click",function(){
//     var dataUser = {}

//     dataUser.name = input1.value;
//     dataUser.email = input2.value;
//     dataUser.age = input3.value;
//     clientArray.push(dataUser)
//     div.innerHTML = `${dataUser.name} ${dataUser.email} ${dataUser.age}`;
// });
// console.log(clientArray);




