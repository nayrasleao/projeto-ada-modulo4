  // Captura o botão pelo ID
  let buttonNext = document.getElementById("next");
  let buttonCalc = document.getElementById("calc");
  

  function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Testa a string do e-mail com a expressão regular
    return regex.test(email);
  }

  function validateCEP(cep) {
    var regexCEP = /^\d{5}-\d{3}$/;
    return regexCEP.test(cep);
}


  // Adiciona um evento de clique ao botão

  buttonNext.addEventListener("click", function() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let checkedPromo = document.getElementById("checkedPromo").checked;

    let emailValidated = validateEmail(email);
    let cepValidated = validateCEP(cep);

    if(name == "" || email == "" || cep == ""){
        alert("Todos os campos são obrigatórios!")
    }else{
        var fill = true;
    }

    if(!emailValidated){
        alert("Preencha um e-mail válido. Ex: email@email.com")
    }

    if(!cepValidated){
        alert("Preencha um CEP válido. Ex: 69000-000")
    }

    if(fill && emailValidated && cepValidated){

        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("cep", cep);
        sessionStorage.setItem("checkedPromo", checkedPromo);

        const userId = document.getElementById('userId');


        userId.style.display = 'none';

    }

  });

  // Faz a verificação se há itens no sessinStorage

  function getSessionStorage(){

    let validNome = sessionStorage.getItem("name");
    let validEmail = sessionStorage.getItem("email");
    let validCEP = sessionStorage.getItem("cep");
    let validPromo = sessionStorage.getItem("checkedPromo");

    if(validNome !== null && validEmail !== null && validCEP !== null && validPromo !== null){

        const userId = document.getElementById('userId');

        userId.style.display = 'none';

    }

  }

  getSessionStorage()

  // Adiciona um evento de clique ao botão

buttonCalc.addEventListener("click", function() {



  let adultos = parseInt(document.getElementById("adultos").value);
  let pessoasBebem = parseInt(document.getElementById("pessoasBebem").value);
  let criancas = parseInt(document.getElementById("criancas").value);

  // Validacao

  let carne = calculoCarne(adultos, criancas);
  let paoDeAlho = calculoPaoDeAlho(adultos, criancas);
  let sal = calculoSal(adultos, criancas);
  let gelo = calculoGelo(adultos, criancas);
  let refrigerante =  calculoRefrigerante(adultos, criancas);
  let agua = calculoAgua(adultos, criancas);
  let cerveja = calculoCerveja(pessoasBebem);


  // Exibe o resultado

  let paragrafoCarne = "<p> Carne: " + carne + " gramas" + "</p>";

  if(paoDeAlho == 1 ){
      var paragrafoPaoDeAlho = "<p> Pão de Alho: " + paoDeAlho + " pão de alho" + "</p>";
  }else {
      var paragrafoPaoDeAlho = "<p> Pão de Alho: " + paoDeAlho + " pães de alho" + "</p>";
  }

  let paragrafoSal = "<p> Sal: " + sal + " kg de sal" + "</p>";

  let paragrafoGelo = "<p> Gelo: " + gelo + " kg de gelo" + "</p>";


  if(refrigerante == 1 ){
      var paragrafoRefrigerante = "<p> Refrigerante: " + refrigerante + " garrafa de 2 litros" + "</p>";
  }else {
      var paragrafoRefrigerante = "<p> Refrigerante: " + refrigerante + " garrafas de 2 litros" + "</p>";
  }

  if(agua == 1 ){
      var paragrafoAgua = "<p> Água: " + agua + " garrafa de 1 litro" + "</p>";
  }else {
      var paragrafoAgua = "<p> Água: " + agua + " garrafas de 1 litro" + "</p>";
  }        

  let  paragrafoCerveja = "<p> Cerveja: " + cerveja + " garrafas de 600 ml" + "</p>";
  

  let resultadoFinal = document.getElementById("result")


  if(pessoasBebem > adultos){
      alert("O número de pessoas que bebem deve ser menor ou igual ao número de adultos")
      resultadoFinal.innerHTML = "";
  }else if (adultos == 0 && criancas == 0){
      alert("Insira pelo menos uma pessoa para que o cálculo seja realizado")
      resultadoFinal.innerHTML = "";
  }
  else{
      resultadoFinal.innerHTML = paragrafoCarne + paragrafoPaoDeAlho + paragrafoSal + paragrafoGelo + paragrafoRefrigerante + paragrafoAgua + paragrafoCerveja;
  }




});


// Faz funções de cálculo para o churrasco

function calculoCarne(adulto, criancas){

return adulto*400 + criancas*200;

}

function calculoPaoDeAlho(adulto, criancas){

return adulto*2 + criancas;

}

function calculoSal(adulto, criancas){

return 0.04*(adulto+criancas);

}

function calculoGelo(adulto, criancas){

let soma = adulto + criancas;

if(soma%10 == 0){
  var resultadoGelo = soma/10;
}else{
  var resultadoGelo = Math.floor((adulto+criancas) / 10) + 1;
}

return resultadoGelo;

}

function calculoRefrigerante(adulto, criancas){

let soma = adulto + criancas;

if(soma%5 == 0){
  var resultadoRefrigerante = soma/5;
}else{
  var resultadoRefrigerante = Math.floor((adulto+criancas) / 5) + 1;
}

return resultadoRefrigerante;


}

function calculoAgua(adulto, criancas){

let soma = adulto + criancas;

if(soma%5 == 0){
  var resultadoAgua = soma/5;
}else{
  var resultadoAgua = Math.floor((adulto+criancas) / 5) + 1;
}

return resultadoAgua;

}

function calculoCerveja(pessoasBebem){

return pessoasBebem*3;

}