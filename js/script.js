
setTimeout(ShowModal, 5000);

function ShowModal() {
    var modal = document.querySelector(".modal");
    
    if  (modal != null) {
        document.querySelector(".modal").style.display="block";
    
        document.querySelector(".modal a").addEventListener("click", function() { document.querySelector(".modal").style.display="none"});
    } else {
        console.log("Não Existe Modal");
    }
}

if (document.forms["modal_form"] != undefined) {
    var form = document.forms["modal_form"];
    form.addEventListener("submit", emailValidation);
    form.email.addEventListener("keyup", function(){
        form.email.className = "";
        document.querySelector("span.nao_valido").style.display="none";
    });
}

function emailValidation(evt) {
    var form = document.forms["modal_form"];
    
    var inputEmail = form.email;
    var emailValue = form.email.value;
    var posicaoArroba = emailValue.indexOf("@");
    
    if(emailValue != "" && emailValue.indexOf("@") > 0 && emailValue.indexOf(".") > posicaoArroba) {
        alert("Email Enviado");
    } else {
        alert("Email Inserido Inválido!");
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display="block";
        evt.preventDefault();
    }
}