//invisible();
const spin=document.getElementById("spinner");
spin.classList.add("invisible");
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// function invisible() {
    
//     var nodes = document.getElementById("processing").getElementsByTagName('*');
//     console.log(nodes.disabled)
//     for (var i = 0; i < nodes.length; i++) {

//         nodes[i].classList.add("invisible");

//     }
// }

// function visible() {
//     var nodes = document.getElementById("processing").getElementsByTagName('*');
//     console.log(nodes.disabled)
//     for (var i = 0; i < nodes.length; i++) {

//         nodes[i].classList.remove("invisible");

//     }
// }


console.log('submit+++')
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDPRwYtU_E840TUesYQ9HzT-5f9PYMbb-CpgeiDm1rTZ8LAqmPZxD8ccNE4DhGFYbZ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
   // visible();
   spin.classList.remove("invisible");
   spin.classList.add("animate-spin");
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response)
            spin.classList.remove("animate-spin");
            spin.classList.add("invisible");
            document.getElementById("submit-to-google-sheet").reset();
         //   invisible();
        }

        )
        .catch(error => console.error('Error!', error.message))
})