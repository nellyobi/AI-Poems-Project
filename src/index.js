function displayPoem(response) {

  console.log ("poem generated");

   new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();
  

let instructionsInput = document.querySelector("user-instructions");
    let apiKey = "f0da5c802d5ot8b64ac1acf8ecb78fa3";
    let prompt = `User instructions: Generate a French poem about $(instructionsInput.value)`;
    let context = 
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 language line poem in basic HTML. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI'";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;
// Make a call to the API

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get (apiURL).then(displayPoem);
   
}
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);