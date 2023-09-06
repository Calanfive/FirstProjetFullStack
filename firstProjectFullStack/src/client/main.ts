
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

button.addEventListener("click",  async () => {
  if(input.value.length > 0){
    console.log(input.value);
    const res = await fetch("/hello/" + input.value)
    const message = await res.text()
    
    const resultAPI = document.createElement('p') 
    resultAPI.classList.add('result');
    resultAPI.style.backgroundColor = 'green'
    resultAPI.style.color = "white";
    resultAPI.innerText = message;
      
    app.appendChild(resultAPI);
    input.value = '';
  }
  else {
    alert("Rentrer au moins un caractère")
  }

})