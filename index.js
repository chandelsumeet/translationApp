const textField = document.getElementById("input");
const translateBtn = document.getElementById("trn-btn");
const outputTextField = document.getElementById("output");
const apiUrl = "https://api.funtranslations.com/translate/shakespeare.json";

translateBtn.onclick = (event) => {
  const text = textField.value;
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((response) => response.json())
    .then((result) => {
      const { translated } = result.contents;
      outputTextField.innerText = translated;
    })
    .catch((error) => alert("error occured " + error));
};
