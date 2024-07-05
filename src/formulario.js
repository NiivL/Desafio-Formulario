const input = document.querySelectorAll('input');
const listaSpan = document.querySelectorAll('span');
const txtAreas = document.querySelectorAll("textarea");
// const span = listaSpan[0];

console.log(txtAreas);


input.forEach(function (item) {
    item.addEventListener('input', function () {
        item.classList.add('border-digitando')
    })
})


function verifForm() {

    for (let i = 0; i < input.length; i++) {
        const item = input[i];
        
        if(!item.value) {
            listaSpan[i].classList.add('showTag')
            input[i].classList.add('border-erro')
    
    
        }else if(item.value){
            
            
            listaSpan[i].classList.remove("showTag")

        } 
    }
    }












