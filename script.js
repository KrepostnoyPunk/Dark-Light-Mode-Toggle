const inputEl=document.querySelector('.input')
const bodyEl=document.querySelector('body')

// console.log(inputEl);
//  console.log(inputEl.checked);

inputEl.checked=JSON.parse(localStorage.getItem('mode'))

updateBackground()

function updateBackground() {
    if(inputEl.checked) {
        bodyEl.style.background='rgb(25,25,25)'
    } else {
        bodyEl.style.background='white'
    }
}

inputEl.addEventListener('input', ()=>{
    updateBackground()
    updateLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}