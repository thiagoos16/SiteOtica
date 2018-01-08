
setTimeout(ShowModal, 5000);

function ShowModal() {
    document.querySelector(".modal").style.display="block";
    
    document.querySelector(".modal a").addEventListener("click", function() { document.querySelector(".modal").style.display="none"});
}
