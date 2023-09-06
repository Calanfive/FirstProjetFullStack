import "./style.css";

import { setupCounter } from "./counter";
import typescriptLogo from "./typescript.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// création champs de saisie + button
const app = document.querySelector("#app") as HTMLDivElement
const input = document.createElement('input')
const button = document.createElement('button')

input.setAttribute('type', 'text');
button.setAttribute('type', 'button');

button.innerText = 'Write a name and click';
button.style.backgroundColor = '#45B39D';
button.style.color = "white";

app.appendChild(input);
app.appendChild(button);

button.addEventListener("click", () => {
  if(input.value.length > 0){
    console.log(input.value);
    
    const resultAPI = document.createElement('p') 
    resultAPI.classList.add('result');
    resultAPI.style.backgroundColor = 'green'
    resultAPI.innerText = input.value;
      
    app.appendChild(resultAPI);
    }

    input.value = '';

  // else {
  //   alert("Rentrer au moins un caractère")
  // }

})
