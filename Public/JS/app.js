console.log('Client side js script is loaded')

// fetch('http://localhost:3000/Weather?address=Karnataka').then((response)=>{
//     response.json().then((data)=>{
// console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const SearchElement = document.querySelector('input')
const Message1= document.querySelector('#message-1')

// Message1.textContent='from javascript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault() //prevents default behaviour to render the page
    const Location= SearchElement.value

// console.log(Location)

fetch('http://localhost:3000/Weather?address='+Location).then((response)=>{
    response.json().then((data)=>{
// console.log(data)

Message1.textContent='Current Temperature of '+Location+' is '+data.Result
    })
})
})

// Fetch API