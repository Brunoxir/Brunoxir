import { menuArray } from "./data.js"
// console.log(menuArray)
let order = document.getElementById("order")
let orderFinal = document.getElementById("order-final")
const popUp = document.getElementById("pop-up")
const popUpDelete = document.getElementById("pop-up-x")
const completeBtn = document.getElementById("complete-btn")
const payBtn = document.getElementById("pay-btn")
let orderSummary = document.getElementById("your-order")
let orderText = ""
let ordersArr = []
let totalPrice=0
menuArray.forEach((dish) => {
    orderText+=
    `   
    <article class='dishClass'>
    <div style='display:flex;'>
        <div style='float:left' class='emoji'>
            ${dish.emoji}
        </div>
        <div>
            <p>${dish.name}</p>
            <p>${dish.ingredients}</p>
            <p>${dish.price.join}</p>
        </div>
        </div>
        <div style='justify-content: right'>
            <button><i class="fa-solid fa-plus" data-plus="${dish.id}"></i></button>
        </div>
        
    </article>
    <hr style='width: 50%; clear:both;'>
    `
    
    document.addEventListener("click",function(e){
        
        if(e.target.dataset.plus==dish.id){
            
            orderSummary.innerHTML+=
            `
                <p class='order-display'>${dish.name} <i class='remove' data-remove=${dish.id}>remove</i><span class='item-push'>$${dish.price}</span></p>
            ` 
            totalPrice+=dish.price
 
            orderFinal.innerHTML=`
            <hr>
            <p>Total price: <span class='item-push'>${totalPrice}</span></p>
            `  
        }
        if(e.target.dataset.remove==dish.id){
            
        
        }
        
    })
    
})

completeBtn.addEventListener("click",function(){
    popUp.classList.remove("display")
})

popUpDelete.addEventListener("click",function(){
    popUp.classList.add("display")
})

payBtn.addEventListener("click",function(){
    const or = document.getElementById("or")
    const name = document.getElementById("name").value
    const cardNr = document.getElementById("card-number").value
    const ccv = document.getElementById("ccv").value
    let wrong = document.getElementById("wrong-pop-up")
    if(name=="" || cardNr=="" || ccv=="") {
        wrong.innerHTML = "Some inputs are empty!"
    }
    else if(!isNaN(name)){
        wrong.innerHTML = "Enter your name!"
    }
    else if(cardNr<=0){
        wrong.innerHTML = "Enter your card number corectly!"
    }
    else{
        popUp.classList.add("display")
        or.innerHTML = `<p id='order-Finish'>Thanks,${name}! Your order is on the way!</p>`
    }
})


order.innerHTML = orderText
