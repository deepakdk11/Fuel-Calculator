const distance = document.querySelector("#distance");

const efficiency = document.querySelector("#efficiency");

const price = document.querySelector("#price");

const btn = document.querySelector("button");

const result = document.querySelector("p")


btn.addEventListener("click" , () => {
    let res = distance.value / efficiency.value

    let finalRes = res * price.value

    result.classList.add("result")
   if(distance.value, efficiency.value, price.value === ""){
    result.innerHTML = `<q>Enter The Value</q>`
   }
    else{
     result.innerHTML = `This trip will require <span>${Math.floor(res)} </span> liters of fuel, which amounts to a fuel cost of <span>₹${Math.floor(finalRes)}</span> .`
    }
   
    
})
