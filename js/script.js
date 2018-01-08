
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
    form.addEventListener("submit", modalValidation);
    form.email.addEventListener("keyup", function(){
        form.email.className = "";
        document.querySelector("span.nao_valido").style.display="none";
    });
}

function modalValidation(evt) {
    var form = document.forms["modal_form"];
    
    var inputEmail = form.email;
    var emailValue = form.email.value;
    var posicaoArroba = emailValue.indexOf("@");
    
    if(emailValidation(emailValue)) {
        alert("Email Enviado");
    } else {
        alert("Email Inserido Inválido!");
        inputEmail.className = "nao_valido";
        document.querySelector("span.nao_valido").style.display="block";
        evt.preventDefault();
    }
}

if (document.forms["form_contato"] != undefined) {
    var form = document.forms["form_contato"];
    var formValido = true;
    
    form.addEventListener("submit", function(evt){
        if (!NaoVazio(form.nomeCompleto.value)) {
            form.nomeCompleto.className = "nao_valido";
            formValido = false;
        }
        if (!NaoVazio(form.telefone.value)) {
            form.telefone.className = "nao_valido";
            formValido = false;
        }
        if (!NaoVazio(form.mensagem.value)) {
            form.mensagem.className = "nao_valido";
            formValido = false;
        }
        if(!emailValidation(form.email.value)) {
            form.email.className = "nao_valido";
            formValido = false;
        }
                          
        if (!formValido) {
            evt.preventDefault();
        }                                           
    });
    
    var inputs = document.querySelectorAll("form[name=form_contato] input[type=text]");
    for (var i=0; i < 3; i++) {
        inputs[i].addEventListener("keypress", function(){
           this.className = ""; 
        });
    }
    
    var textarea = document.querySelector("form[name=form_contato] textarea");
    textarea.addEventListener("keyup", function() {
        this.className = ""; 
        document.querySelector(".texto").innerHTML="Caractere(s) " + this.value.length;
    });
}

function emailValidation(email) {
    var posicaoArroba = email.indexOf("@");
    
    if (email != "" && email.indexOf("@") > 0 && email.indexOf(".") > posicaoArroba) {
        return true;
    } else {
        return false;
    }
}

function NaoVazio(texto) {
    if (texto.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}