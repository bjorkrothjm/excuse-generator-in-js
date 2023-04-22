/* eslint-disable */
import "bootstrap";
import "./style.css";

/*
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/

window.onload = () => {
  //document.querySelector("#excuse").innerHTML = generateExcuse();
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = randomNumber;
  console.log(randomNumber);
};

/*
let generateExcuse () => {
    const excuse_elemets = {
      who: ["The dog", "My grandma", "His turtle", "My bird"],
      action: ["ate", "peed", "crushed", "broke"],
      what: ["my homework", "the keys", "the car"],
      when: ["before the class","right on time","when I finished","during my lunch", "while I was praying"]
    };

    // creating the excuse
    function generator(array) {
      for (let i = 0; i < 4; i++) {
        return array[Math.floor(Math.random() * array.lenght)];
      };
    };
    
    for (let array of excuse_elemets) {
      var str = "";
      str += generator(array);
    };
    return str;
};
*/
