// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
function getMashedPotatoesInstructions() {
  function recursivelyGetInstruction(i) {
    getInstruction("mashedPotatoes", i, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      recursivelyGetInstruction(i+1)
    }, (error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`);
  }
  recursivelyGetInstruction(0)
}

getMashedPotatoesInstructions()



// Iteration 2 - using promises
function getSteakInstructions() {
  function recursivelyGetInstruction(i) {
    obtainInstruction('steak', i)
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`
      recursivelyGetInstruction(i+1)
    })
    .catch(error => document.querySelector("#steak").innerHTML += `<li>"Steak is ready!"</li>`)
  }
  recursivelyGetInstruction(0)
}

getSteakInstructions();

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...